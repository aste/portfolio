# Dev Portfolio (Astro + Tailwind)

A personal portfolio website built with Astro and Tailwind CSS. The site renders a single-page layout composed of reusable Astro components and pulls all content from a centralized configuration file.

## Features

- Astro-powered static site with fast builds and lightweight runtime.
- Tailwind CSS for utility-first styling.
- Centralized content and theme configuration in `src/config.ts`.
- Modular sections for hero, about, projects, experience, and education.

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Astro will start a local development server. Open the printed URL (usually `http://localhost:4321`).

### Build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
.
├── public/               # Static assets (images, fonts, resume)
├── src/
│   ├── components/       # Page sections (Hero, About, Projects, etc.)
│   ├── pages/            # Route entrypoints
│   ├── styles/           # Global styles
│   └── config.ts         # Site content and theme settings
├── astro.config.mjs      # Astro configuration
├── package.json          # Scripts and dependencies
└── README.md
```

## Updating content

Most of the content lives in `src/config.ts`. Update the fields there to change the portfolio data:

- `name`, `title`, `description`: Headline and metadata.
- `accentColor`, `symbolColor`: Theme colors used across the site.
- `social`: Links for email, LinkedIn, GitHub, resume, etc.
- `aboutMe`, `skills`, `projects`, `experience`, `education`: Section content.

## Deployment

This project is an Astro static site. You can deploy the output from `npm run build` (`dist/` folder) to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Credits

This project was initially based on a template by [Ryan Fitzgerald](https://github.com/RyanFitzgerald).

## License

This project is licensed under the MIT License.
