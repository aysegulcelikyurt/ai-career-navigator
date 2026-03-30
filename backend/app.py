import io
import os
import json
from typing import Any, Dict

import pdfplumber
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__, static_folder="../features", static_url_path="/features")
CORS(app)

client = OpenAI(
    api_key=os.getenv("GEMINI_API_KEY"),
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)


def extract_text_from_pdf(file_storage) -> str:
    try:
        pdf_bytes = file_storage.read()
        file_storage.seek(0)

        text_parts = []
        with pdfplumber.open(io.BytesIO(pdf_bytes)) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text_parts.append(page_text)

        return "\n".join(text_parts).strip()
    except Exception as e:
        print("PDF extraction error:", e)
        return ""


def build_prompt(
    department: str,
    target_role: str,
    company_name: str,
    application_stage: str,
    final_background: str,
    rejection_text: str,
) -> str:
    return f"""
You are an elite career strategist and internship evaluator.

Evaluate the candidate for the following role:

Department: {department}
Target Role: {target_role}
Company: {company_name}
Application Stage: {application_stage}

Candidate Background:
{final_background}

If Rejected / Current Problem:
{rejection_text}

Instructions:
1. Read both the written summary and CV evidence carefully.
2. Identify the candidate's true strengths, not generic ones.
3. Identify concrete gaps based on the target role.
4. Give a competitiveness score from 0 to 100.
5. Write a verdict that is direct, realistic, and honest.
6. Create a personalized 30-day action plan based specifically on the candidate's weaknesses.
7. In the roadmap, connect actions to gaps using this logic:
   - Because you lack X, do Y.
   - Because your project depth is weak, build Z.
   - Because your interview readiness is low, practice A.
8. Do NOT give a generic roadmap. Tailor every step to the candidate profile.
9. If the candidate has no relevant projects, explicitly recommend beginner projects.
10. If the candidate already has experience, recommend deeper and more advanced next steps.
11. Keep the language concise, practical, and specific.

Return ONLY valid JSON with this exact structure:
{{
  "score": 0,
  "headline": "",
  "verdict": "",
  "strengths": ["", "", ""],
  "gaps": ["", "", ""],
  "roadmap_30_day": [
    {{
      "week": "Week 1",
      "focus": "",
      "actions": ["", "", ""]
    }},
    {{
      "week": "Week 2",
      "focus": "",
      "actions": ["", "", ""]
    }},
    {{
      "week": "Week 3",
      "focus": "",
      "actions": ["", "", ""]
    }},
    {{
      "week": "Week 4",
      "focus": "",
      "actions": ["", "", ""]
    }}
  ]
}}
""".strip()


def get_fallback_response(raw_text: str) -> Dict[str, Any]:
    return {
        "score": 0,
        "headline": "Analysis generated, but JSON parsing failed.",
        "verdict": raw_text[:1500] if raw_text else "No analysis returned.",
        "strengths": [],
        "gaps": [],
        "roadmap_30_day": [],
    }


def call_gemini_for_analysis(prompt: str) -> Dict[str, Any]:
    response = client.chat.completions.create(
        model="gemini-2.5-flash",
        messages=[
            {
                "role": "system",
                "content": "You are a precise career analysis assistant. Return only valid JSON."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.7,
    )

    raw_text = response.choices[0].message.content if response.choices else ""

    if not raw_text:
        return get_fallback_response("No content returned from Gemini.")

    try:
        return json.loads(raw_text)
    except json.JSONDecodeError:
        cleaned = raw_text.strip()

        if cleaned.startswith("```json"):
            cleaned = cleaned.replace("```json", "", 1).strip()
        if cleaned.startswith("```"):
            cleaned = cleaned.replace("```", "", 1).strip()
        if cleaned.endswith("```"):
            cleaned = cleaned[:-3].strip()

        try:
            return json.loads(cleaned)
        except json.JSONDecodeError:
            print("JSON parse error. Raw model output:")
            print(raw_text)
            return get_fallback_response(raw_text)


@app.route("/")
def home():
    return send_from_directory("../features", "index.html")


@app.route("/features/<path:filename>")
def serve_features(filename):
    return send_from_directory("../features", filename)


@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        department = request.form.get("department", "").strip()
        target_role = request.form.get("target_role", "").strip()
        company_name = request.form.get("company_name", "").strip()
        application_stage = request.form.get("application_stage", "").strip()
        summary_text = request.form.get("cv_summary", "").strip()
        rejection_text = request.form.get("rejection_reason", "").strip()

        uploaded_file = request.files.get("cv_file")
        cv_text = ""

        if uploaded_file and uploaded_file.filename:
            cv_text = extract_text_from_pdf(uploaded_file)

        final_background = summary_text
        if cv_text:
            if final_background:
                final_background = f"{summary_text}\n\nAdditional CV Evidence:\n{cv_text}"
            else:
                final_background = cv_text

        if not any([department, target_role, company_name, application_stage, final_background, rejection_text]):
            return jsonify({
                "error": "No form data received."
            }), 400

        prompt = build_prompt(
            department=department,
            target_role=target_role,
            company_name=company_name,
            application_stage=application_stage,
            final_background=final_background,
            rejection_text=rejection_text,
        )

        analysis = call_gemini_for_analysis(prompt)

        return jsonify({
            "success": True,
            "used_cv_pdf": bool(cv_text),
            "cv_text_found": bool(cv_text.strip()),
            "analysis": analysis
        })

    except Exception as e:
        print("Analyze route error:", e)
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=8000)