# Chirru-site

## Project Overview

Chirru-site is a personal portfolio web application showcasing projects, education, skills, and contact information.

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Java (Spring Boot) REST API
- **Admin:** `/admin` page to manage profile JSON data

## Project Structure

```text
Chirru-site/
├── Backend/                         # Java Spring Boot API
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/chirru/site/
│       │   ├── PortfolioBackendApplication.java
│       │   ├── config/CorsConfig.java
│       │   ├── controller/ContactController.java
│       │   ├── controller/ProfileController.java
│       │   └── service/ProfileService.java
│       └── resources/application.properties
│
├── Frontend/                        # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminPage.jsx        # Admin panel to edit profile JSON
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Project.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── profileDefaults.js
│   └── package.json
└── README.md
```

## Backend API

- `GET /api/profile` → fetch portfolio profile data
- `PUT /api/profile` → update portfolio profile data
- `POST /api/contact` → contact endpoint (Java backend)

### Run backend

```bash
cd Backend
mvn spring-boot:run
```

## Frontend

- Normal portfolio: `/`
- Admin page: `/admin`

### Run frontend

```bash
cd Frontend
npm install
npm run dev
```

Set `Frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
```
