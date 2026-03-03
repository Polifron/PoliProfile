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
VITE_CONTACT_ENDPOINT=
VITE_BASE=
```

Use `VITE_API_BASE_URL` only if your frontend and backend are deployed on different domains (example: `https://your-api.onrender.com`).
Use `VITE_CONTACT_ENDPOINT` if you want to send the form to a third-party service instead of your own API.
Use `VITE_BASE` for GitHub Pages base path (example: `/PoliProfile/`).

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

### Option A: GitHub Pages (frontend) + serverless backend

1) Deploy the backend API to Render/Railway/Fly/Vercel/Cloudflare Workers.
2) Set `VITE_API_BASE_URL` in the frontend build to your backend URL.
3) For GitHub Pages, set `VITE_BASE` to `/<repo-name>/` (example: `/PoliProfile/`).
4) Build and publish the `dist` folder to GitHub Pages.

### Option B: GitHub Pages + third-party form service

Use a service like Formspree/Getform/Netlify Forms and set:

```
VITE_CONTACT_ENDPOINT=https://your-form-endpoint
```

This bypasses the Express API entirely.

### Notes

- Keep this as one GitHub repo (frontend + backend together).
- Do **not** commit `.env`; only commit `.env.example`.
- GitHub Pages alone cannot run the Express API.

## Personal Data Source

Update portfolio data in:

- `src/data/profile.json`

This file powers profile details, skills, hobbies, contact info, social links, and experience timeline entries.
