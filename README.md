# Dev Portfolio

A personal portfolio website built with Astro and Tailwind CSS. The site renders a single-page layout composed of reusable Astro components and pulls all content from a centralized configuration file.

## Features

- Astro-powered static site with fast builds and lightweight runtime.
- Tailwind CSS for utility-first styling.
- Centralized content and theme configuration in `src/config.ts`.
- Modular sections for hero, about, projects, experience, and education.

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript] (https://www.typescriptlang.org/)** - For type-safety and better tooling at any scale
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons

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

The content lives in the src/config.ts file, update the fields there to change the portfolio data:

- **Personal Information**: Name, title, description
- **Accent Color**: Primary color theme (changing this will change the accent color site wide)
- **Social Links**: Email, LinkedIn, Twitter, GitHub (all optional)
- **About Section**: Personal bio/description
- **Skills**: List of technical skills
- **Projects**: Project showcase with descriptions and links
- **Blog**: A collection of articles
- **Experience**: Work history with bullet points
- **Education**: Educational background and achievements

If skills, projects, blog, experience or education are removed from the config, those sections will be hidden entirely.

## Deployment

This project is an Astro static site. You can deploy the output from `npm run build` (`dist/` folder) to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Credits

This project was initially based on a template by [Ryan Fitzgerald](https://github.com/RyanFitzgerald).

## License

This project is licensed under the MIT License.
