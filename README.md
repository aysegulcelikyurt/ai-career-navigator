# AI Career Navigator 🚀

## Problem

University students often struggle to understand why they get rejected from internships or how competitive they really are for a target role. Most applications provide little to no feedback, which makes it difficult for students to identify their weaknesses, improve their CVs, and prepare stronger applications.

## Solution

AI Career Navigator is an AI-powered web application that helps students evaluate their internship readiness and improve their future applications.

The user enters:
- department
- target role
- company name
- application stage
- CV summary
- optional rejection context
- optional CV upload

The system then generates:
- a competitiveness score
- a personalized verdict
- strengths
- gaps
- a 30-day improvement plan

This helps students turn uncertainty into clear, actionable career guidance.


**Published App:**  
https://ai-career-navigator-bkxj.vercel.app/features/index.html

**Demo Video:**  
https://www.loom.com/share/d06cb41e8b464df5969dc44c99e2bbdb

## GitHub Repository

https://github.com/aysegulcelikyurt/ai-career-navigator

## Target Users

- university students
- internship applicants
- early-career candidates
- students who want to better understand rejection reasons and improve their profiles

## AI’s Role in the Project

AI is the core engine of the application. It analyzes the candidate’s background and generates structured, personalized feedback.

It is responsible for:
- evaluating the candidate profile
- identifying strengths and weaknesses
- generating a competitiveness score
- producing a realistic verdict
- creating a practical 30-day roadmap

## Key Features

- AI-powered internship competitiveness scoring
- personalized career verdict
- strengths and gaps analysis
- 30-day improvement roadmap
- optional CV upload support
- company- and role-specific feedback

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask
- Flask-CORS

### AI Integration
- Gemini API
- OpenAI-compatible Gemini endpoint

### Deployment
- Vercel (frontend)
- Hugging Face Spaces (backend)

## User Flow

1. The user opens the application.
2. The user enters their department, target role, company name, and application stage.
3. The user optionally uploads a CV and/or writes a CV summary.
4. The user clicks the analysis button.
5. The backend sends the request to the AI model.
6. The AI generates a structured evaluation.
7. The result is displayed on the interface with score, verdict, strengths, gaps, and roadmap.

## Project Structure

```text
ai-career-navigator/
├── backend/
├── features/
├── README.md
├── idea.md
├── user-flow.md
├── tech-stack.md
├── prd.md
├── tasks.md

## How to Run Locally
1. Clone the repository
git clone https://github.com/aysegulcelikyurt/ai-career-navigator.git
cd ai-career-navigator
2. Run the backend
cd backend
pip install -r requirements.txt
python app.py
3. Run the frontend

Open a new terminal and run:

cd features
python3 -m http.server 5500

Then open this address in your browser:

http://localhost:5500

Future Improvements
Improve the consistency of roadmap generation
Strengthen PDF CV parsing
Improve structured JSON response reliability
Add more role-specific prompt variations
Add user testing feedback integration
Improve UI for the 30-day roadmap section
About the Project

This project was built during the AI Buildathon using AI-assisted development and vibe coding. It focuses on solving a real-world problem: students often do not receive meaningful feedback during internship applications.

AI Career Navigator helps them understand how competitive they are, what they are doing well, what they are missing, and what they should improve next.

Repository Link

https://github.com/aysegulcelikyurt/ai-career-navigator
