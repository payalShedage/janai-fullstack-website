# JANAI — Full-Stack Well & Farm Pond Mud Removal Website

Marathi-first business website for Janai, with:
- Public marketing website
- Real machine image and work videos
- Call / WhatsApp / Instagram links
- Customer enquiry form
- Admin login
- Jobs/income management
- Expense management
- Dashboard with income, expenses, profit and job counts
- MongoDB database
- Express + Node.js API
- React + Vite frontend

## Technology
Frontend: React + Vite
Backend: Node.js + Express
Database: MongoDB / MongoDB Atlas
Authentication: JWT

## Requirements
Install:
1. Node.js LTS
2. MongoDB Community Server OR create a MongoDB Atlas database

Check:
```bash
node -v
npm -v
```

## 1. Start MongoDB
If MongoDB is installed locally on Windows, start the MongoDB service.

You can also use MongoDB Atlas and put its connection string in `server/.env`.

## 2. Backend
Open terminal in the `server` folder:
```bash
cd server
npm install
```

Create `server/.env` from `.env.example` and set:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/janai
JWT_SECRET=change_this_to_a_long_random_secret
ADMIN_EMAIL=admin@janai.com
ADMIN_PASSWORD=Janai@12345
```

Create the first admin:
```bash
npm run seed:admin
```

Start backend:
```bash
npm run dev
```

Backend runs at:
http://localhost:5000

## 3. Frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```

Frontend normally runs at:
http://localhost:5173

## 4. Login
Open:
http://localhost:5173/admin

Use the admin email/password from `server/.env`.

IMPORTANT:
Change the default admin password before using the site publicly.

## 5. Business flow
Customer:
Website -> Contact/Enquiry -> database -> admin dashboard

Owner:
Admin login -> Jobs -> Income
Admin login -> Expenses -> Expense records
Dashboard -> Total income / expenses / profit / completed jobs

## 6. Add your own photos later
Put photos in:
`client/public/images/`

Then reference them in React.

## 7. Production deployment
For a real public deployment:
- MongoDB Atlas for database
- Backend on Render/Railway/etc.
- Frontend on Vercel/Netlify/etc.
- Set production environment variables
- Change JWT secret and admin password
- Restrict CORS to the production frontend URL

This project intentionally keeps the first version simple so you can understand and extend it.
