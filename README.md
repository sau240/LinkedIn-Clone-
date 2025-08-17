# LinkedIn Clone
A full-stack LinkedIn Clone built using the MERN stack (MongoDB, Express, React, Node.js) that replicates core functionalities of LinkedIn, including user authentication, posting updates, and a personalized feed. This project is designed to demonstrate modern web development practices with protected routes and RESTful API integration.

**Live Demo**
**View Deployed App on Vercel**
https://linked-in-clone-one-nu.vercel.app/

# Tech Stack
- Frontend: React, React Router, Tailwind CSS, React Icons
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ODM)
- Testing Tools: Postman
- Deployment: Vercel
- Authentication: JWT + Protected Routes

# Features
- User authentication (Login/Register)
- Post creation and feed rendering
- Protected routing (users must be logged in)
- Fully responsive design
- API tested with Postman
- Deployed on Vercel


 # Project Structure
bash
Copy
Edit
LinkedIn-Clone/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── server/               # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
├── package.json
└── README.md
 Setup Instructions

**Clone the Repository**

bash
Copy
Edit
git clone https://github.com/sau240/LinkedIn-Clone-.git
cd LinkedIn-Clone-
Install Dependencies

bash
Copy
Edit
cd client
npm install

cd ../server
npm install
Environment Setup

Create a .env file in the server/ directory:

env
Copy
Edit
PORT=8000
MONGO_URI=your_mongo_db_connection
JWT_SECRET=your_jwt_secret
Run the App Locally

bash
Copy
Edit
# In server/
npm start
 ---
# In client/
npm run dev
 API Testing
All API routes are tested and documented using Postman. You can import the Postman collection provided in the docs/ folder (if you create one) or test routes directly via:
---
/api/auth/login
---
---
/api/auth/register
---
/api/profile
---
/api/posts
---
etc.

# ScreenShots:-
1. ![image](https://github.com/user-attachments/assets/7b3900ec-dff5-46de-9862-017744d1bc9d)
2. ![image](https://github.com/user-attachments/assets/83a81204-7a8c-4676-8f36-bde057ada5d7)
3. ![image](https://github.com/user-attachments/assets/105ac6c4-830c-4ec2-ae2c-9ab224334afd)




📄 License
This project is licensed under the MIT License - feel free to use it for learning or as a starter for your own projects.

