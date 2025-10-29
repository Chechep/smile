smile/
├── client/                     # Frontend (Vite + React + Tailwind)
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/        # Dentist logos, icons, etc.
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AppointmentCard.jsx
│   │   │   ├── DentistCard.jsx
│   │   │   └── Loader.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── DashboardPatient.jsx
│   │   │   ├── DashboardDentist.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── AppContext.jsx
│   │   ├── utils/
│   │   │   ├── api.js          # Axios / fetch calls to Flask API
│   │   │   └── firebase.js     # Firebase auth config
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                     # Backend (Flask + PostgreSQL)
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── dentist.py
│   │   │   └── appointment.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── auth_routes.py
│   │   │   ├── dentist_routes.py
│   │   │   └── appointment_routes.py
│   │   ├── services/
│   │   │   ├── firebase_service.py
│   │   │   └── email_service.py
│   │   ├── config.py
│   │   └── utils.py
│   ├── requirements.txt
│   └── wsgi.py
│
├── .env
├── docker-compose.yml           # (optional: for full stack dev)
├── README.md
└── package.json                 # if shared scripts or dev commands
