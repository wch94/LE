# Lauterbach & Eilber Insurance

Website for Lauterbach & Eilber Insurance, built with React, TypeScript, Vite, and Tailwind CSS. Deployed to Azure Static Web Apps.

## Getting Started

```bash
cd src
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Project Structure

```
src/
├── components/       # Layout and Navigation
├── pages/            # One component per route
├── context/          # ThemeContext (dark mode)
├── public/           # Static assets (images, favicon)
├── index.html        # Entry point
├── index.css         # Tailwind base + custom component classes
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Stack

- **React 18** with TypeScript
- **Vite** for bundling
- **Tailwind CSS** for styling
- **React Router v6** for routing
- **Azure Static Web Apps** for hosting

## Deployment

Merging to `main` triggers the CI/CD pipeline (`.github/workflows/ci-cd.yml`) which builds and deploys to Azure Static Web Apps automatically.
