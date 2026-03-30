# AI Career Navigator 🚀

## 🧩 Problem

University students often struggle to understand why they get rejected from internships and how competitive they are for a target role.  
Most applications provide little to no feedback, leaving students unsure about how to improve.

---

## 💡 Solution

AI Career Navigator is an AI-powered web application that analyzes a student's profile and provides personalized career insights.

The system generates:
- Competitiveness score
- Personalized verdict
- Strengths
- Gaps
- 30-day improvement plan

This helps students turn uncertainty into clear, actionable steps.

---

## 🌐 Live Demo

🔗 https://ai-career-navigator-bkxj.vercel.app/features/index.html

🎥 Demo Video:  
https://www.loom.com/share/d06cb41e8b464df5969dc44c99e2bbdb

---

## 👤 Target Users

- University students  
- Internship applicants  
- Early-care professionals  
- Students who want to improve their CV and applications  

---

## 🤖 AI’s Role

AI is the core engine of this application.

It is responsible for:
- Evaluating candidate profiles  
- Identifying strengths and weaknesses  
- Generating a competitiveness score  
- Producing structured career feedback  
- Creating a personalized roadmap  

---

## ✨ Key Features

- 🎯 Internship competitiveness scoring  
- 🧠 AI-powered career evaluation  
- 💪 Strength & gap analysis  
- 📅 30-day roadmap  
- 📄 Optional CV upload  
- 🏢 Company-specific insights  

---

## 🛠️ Tech Stack

### Frontend
- HTML  
- CSS  
- JavaScript  

### Backend
- Python  
- Flask  
- Flask-CORS  

### AI
- Gemini API  
- OpenAI-compatible endpoint  

### Deployment
- Vercel (Frontend)  
- Hugging Face Spaces (Backend)  

---

## 🔄 User Flow

1. User fills out the form  
2. Data is sent to backend  
3. AI analyzes the input  
4. Structured response is generated  
5. Results are displayed in UI  

---
## 📁 Project Structure

```
ai-career-navigator/
│
├── backend/            # Flask backend (AI logic)
├── features/           # Frontend (HTML, CSS, JS)
│
├── README.md
├── idea.md
├── user-flow.md
├── tech-stack.md
├── prd.md
├── tasks.md
```


---

## ⚙️ How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/aysegulcelikyurt/ai-career-navigator.git
cd ai-career-navigator

2. Run backend
cd backend
pip install -r requirements.txt
python app.py

3. Run frontend
cd features
python3 -m http.server 5500

Open in browser:
http://localhost:5500
