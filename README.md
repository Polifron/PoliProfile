# PoliCoder Portfolio

A React + Vite portfolio website using shadcn/ui components, with pages for Home, About, and Contact.

## Stack

- React + Vite
- shadcn/ui
- Tailwind CSS v4
- React Router
- Framer Motion (scroll reveal timeline)

## Run (Frontend only)

```bash
npm install
npm run dev
```

## Functional Contact Form (Brevo SMTP)

This project now includes an Express mail API in `server/index.js` and a wired contact form in the Contact page.

### 1) Configure environment

Create a `.env` file from `.env.example` and set your SMTP values:

```bash
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
EMAIL_USER=your-brevo-smtp-user
EMAIL_PASSWORD=your-brevo-smtp-password
EMAIL_FROM=your-sender@email.com
EMAIL_TO=your-inbox@email.com
PORT=3000
VITE_API_BASE_URL=
```

Use `VITE_API_BASE_URL` only if your frontend and backend are deployed on different domains (example: `https://your-api.onrender.com`).

### 2) Run frontend + backend together

```bash
npm run dev:all
```

- Frontend: Vite on `http://localhost:5173`
- Backend API: Express on `http://localhost:3000`
- Vite proxy forwards `/api/*` to backend in development.

### 3) API endpoints

- `GET /api/health`
- `POST /api/send-email`

Payload for `POST /api/send-email`:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello from the contact form"
}
```

## Build

```bash
npm run build
```

## Deploy notes

- Keep this as one GitHub repo (frontend + backend together).
- Do **not** commit `.env`; only commit `.env.example`.
- If you deploy on platforms like Render/Railway/Fly.io, set environment variables in the platform settings.
- GitHub Pages alone cannot run the Express API.

## Personal Data Source

Update portfolio data in:

- `src/data/profile.json`

This file powers profile details, skills, hobbies, contact info, social links, and experience timeline entries.
