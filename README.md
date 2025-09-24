TalentFlow – A Mini Hiring Platform

A simple React + Vite application that simulates a mini hiring platform for managing jobs, candidates, and assessments.
All data is stored locally using MirageJS (mock API) — no backend required.

🚀 Features
🔹 Jobs

Create new jobs

Archive / Unarchive jobs

Drag & drop reorder

🔹 Candidates

Add candidates with name & email

Kanban board view (Applied → Screen → Tech → Offer → Hired → Rejected)

Drag & drop candidates between stages

🔹 Assessments

Build assessments with custom questions

Live preview of questions (basic version)

🛠 Tech Stack

Vite
 (React + fast dev server)

React Router
 (routing)

MirageJS
 (mock API)

@hello-pangea/dnd
 (drag & drop)

Plain CSS for styling

⚡ Getting Started
1. Clone the repo
git clone https://github.com/your-username/talentflow.git
cd talentflow

2. Install dependencies
npm install


If you get dependency errors, try:

npm install --legacy-peer-deps

3. Run the app
npm run dev


👉 Open http://localhost:5173 in your browser.

🧪 Mock API Endpoints

The app uses MirageJS to simulate APIs like:

GET /api/jobs

POST /api/jobs

GET /api/candidates

POST /api/candidates

All data persists only during the session (no backend).

📌 Notes & Improvements

Currently, assessments only support text questions.

Future improvements:

Multiple question types (MCQ, file upload, numeric ranges)

IndexedDB persistence (to keep data after refresh)

Error handling with retries

📜 License

This project is for educational purposes only.