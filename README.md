📊 Lead Management System

A full-stack Lead Management Module for managing sales/customer leads.
Built with React + Vite + TailwindCSS (frontend) and Node.js + Express + MongoDB (backend).

🚀 Features
🔹 Frontend

Dashboard Cards → total leads, new, connected, lost.

Lead List (Responsive) →

📱 Card view on mobile

💻 Table view on desktop

Search & Filter by name, email, company, and status.

Add/Edit Lead with modal form.

Soft Delete → marks lead as lost (not permanent).

Glassy & Responsive UI with Tailwind.

🔹 Backend

Lead APIs (CRUD with soft delete).

Validations:

Phone number = exactly 10 digits

Email = must end with @gmail.com

Image Upload with multer.

Summary API → count of total, new, connected, and lost leads.

📂 Project Structure
Backend
backend/
├── controllers/
│   └── leadController.js
├── models/
│   └── Lead.js
├── routes/
│   └── leadRoutes.js
├── uploads/          # profile images
├── server.js
└── package.json

Frontend
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── DashboardCards.jsx
│   │   ├── SearchFilter.jsx
│   │   ├── LeadList.jsx
│   │   ├── LeadCard.jsx
│   │   ├── LeadFormModal.jsx
│   │   └── ConfirmDeleteModal.jsx
│   ├── api/
│   │   └── leadService.js
│   ├── App.jsx
│   └── main.jsx
├── public/
└── package.json

⚙️ Installation
1. Clone the Repository
git clone https://github.com/your-username/lead-management-system.git
cd lead-management-system

2. Backend Setup
cd backend
npm install


Create .env file:

PORT=5000
MONGO_URI=your_mongo_connection_string


Run backend:

npm start

3. Frontend Setup
cd frontend
npm install
npm run dev

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/leads	Add new lead
GET	/api/leads	Get all leads (with filters)
GET	/api/leads/summary	Get summary counts
PUT	/api/leads/:id	Update lead
DELETE	/api/leads/:id	Mark as lost (soft delete)
🎨 UI Preview

Dashboard with summary cards

Responsive leads table & card view

Add/Edit form (modal with validation)

Soft delete with confirmation modal

🛠️ Tech Stack

Frontend: React (Vite), TailwindCSS, Axios, React Icons
Backend: Node.js, Express.js, Multer, Mongoose, MongoDB
Database: MongoDB Atlas / Local

 Notes

Soft delete → leads are not removed, only marked as "lost".

Only Gmail emails are accepted (@gmail.com).

Phone numbers must be exactly 10 digits.

<img width="1919" height="813" alt="image" src="https://github.com/user-attachments/assets/f6b9bfea-60b6-4686-86dd-8625c71398c6" />
<img width="1919" height="873" alt="image" src="https://github.com/user-attachments/assets/76d84261-71a4-48f3-aa1f-8cf91f79b51f" />
<img width="1919" height="692" alt="image" src="https://github.com/user-attachments/assets/202cddd3-77d6-47f1-bfbd-3578f5c62b1f" />
<img width="1919" height="861" alt="image" src="https://github.com/user-attachments/assets/d5bcd4a9-b2ce-4b7d-8a9c-e9628e69a59d" />





👨‍💻 Author

Ankit Jha
🚀 Passionate Full-Stack Developer | React • Node • MongoDB • UI/UX
