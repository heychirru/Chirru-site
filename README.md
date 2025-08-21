# Chirru-site

## Project Overview

Chirru-site is a personal portfolio web application showcasing projects, education, and contact information. The frontend is built with React (Vite) and Tailwind CSS with smooth animations via Framer Motion. A minimal Express backend powers a secure contact form, sending emails with Nodemailer.

Key features:

- Responsive, modern UI with Tailwind CSS
- Animated sections (Hero, About, Projects, Education, Contact)
- Scroll-to-top and iconography via `react-icons`
- Contact form with backend email delivery (Gmail + Nodemailer)

Live/frontend origin configured for: `https://chirru.netlify.app/` (update CORS in the backend if your domain changes).

## Details

### Tech Stack

- Frontend: React 19, Vite 6, Tailwind CSS, Framer Motion, React Icons, Lucide
- Backend: Node.js, Express 5, CORS, Dotenv, Nodemailer

### Frontend

- Entry: `Frontend/src/main.jsx` → `Frontend/src/App.jsx`
- Sections/components: `Navbar`, `Hero`, `About`, `Project`, `Education`, `Contact`, `Footer`
- Animations: `framer-motion`
- Env usage: Contact form POSTs to `${import.meta.env.VITE_API_URL}/api/contact`

Basic commands (run inside `Frontend/`):

- `npm install`: install deps
- `npm run dev`: start Vite dev server
- `npm run build`: production build
- `npm run preview`: preview production build

Set Vite env in `Frontend/.env` (example):

```env
VITE_API_URL=http://localhost:5000
```

### Backend

- Server: `Backend/server.js`
- Routes:
  - `GET /` health page
  - `POST /api/contact` sends an email with `{ name, email, message }`
- CORS: `origin` is set to `https://chirru.netlify.app/` (change for local/dev as needed)

Environment variables (create `Backend/.env`):

```env
MAIL_USER=your_gmail_address
MAIL_PASS=your_gmail_app_password
MAIL_RECEIVER=destination_email
PORT=5000
```

Run the server (inside `Backend/`):

```bash
npm install
node server.js
```


```text
Chirru-site/                     # Express backend (contact API)
├── Backend/ 
│   ├── node_modules/            # Installed dependencies
│   ├── .env                     # Backend env (MAIL_*, PORT)                     
│   ├── .gitignore               # Git ignore rules
│   ├── package-lock.json        # Lockfile
│   ├── package.json             # Backend dependencies   
│   └── server.js                # Express server (routes, CORS, Nodemailer)

├── Frontend/                     # React + Vite app
│   ├── node_modules/            # Installed dependencies
│   ├── public/
│   │   └── favicon.png
│   └── src/
│       ├── assets/
│       │   └── projects/
│       ├── components/
│       │   ├── About.jsx
│       │   ├── Contact.jsx
│       │   ├── Education.jsx
│       │   ├── Footer.jsx
│       │   ├── Hero.jsx
│       │   ├── Internship.jsx
│       │   ├── Navbar.jsx
│       │   ├── Project.jsx
│       │   └── ResponsiveMenu.jsx
│       ├── Css/
│       │   └── Hero.css
│       └── functions/
│           └── buttom.js        # Utility (typo kept as-is)
│       ├── App.jsx              # App layout
│       ├── index.css            # Global styles
│       ├── main.jsx             # React entry
│       ├── server.js            # Contact form sample (frontend)
│   ├── .env                     # Frontend env (e.g., VITE_API_URL)
│   ├── .gitignore               # Git ignore rules
│   ├── eslint.config.js         # ESLint rules
│   ├── index.html               # HTML entry
│   ├── package-lock.json        # Lockfile
│   ├── package.json             # Frontend scripts/deps
│   ├── postcss.config.js        # PostCSS plugins
│   ├── tailwind.config.js       # Tailwind setup
│   ├── vite.config.js           # Vite config
└── README.md                     # Project overview

```

Notes:

- The contact form in `Frontend/src/components/Contact.jsx` posts to `VITE_API_URL` and expects the backend above.
- Update backend CORS `origin` if hosting the frontend at a different domain.
