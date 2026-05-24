# Portfolio — Rishik Puneet M

Personal portfolio site. Live at [iamrpm.xyz](https://iamrpm.xyz) · [portfolio-three-beta-kjdkuu3i5a.vercel.app](https://portfolio-three-beta-kjdkuu3i5a.vercel.app).

## Stack

- **React 18** + **Vite**
- **Tailwind CSS** — custom dark/light theme tokens
- **framer-motion** — page and section animations
- **React Router v6** — client-side routing
- **EmailJS** — contact form
- **Vercel** — hosting + CI/CD

## Project Structure

```
src/
├── components/
│   ├── common/        # Header, Footer, Card, Button, ThemeToggle
│   ├── home/          # Hero, Skills, Experience, Projects, Contact
│   └── projects/      # ProjectHeader, ProjectDetail, TechStack
├── data/              # Content: personalInfo, projects, experience, skills, achievements
├── pages/             # Home, ProjectPage
├── context/           # ThemeContext (dark/light toggle)
└── utils/             # framer-motion animation variants
```

All site content lives in `src/data/` — edit those files to update anything shown on the site.

## Dev

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` auto-deploy via Vercel.

## Previous Version

The original 2024 portfolio is archived in [`v1-2024/`](./v1-2024/).
