# Soumic 2025 - Festival website

A simple web/mobile frontend built with Next.js for managing and showcasing the Soumic 2025 music festival.

## Overview

This project is a web app developed as part of a fullstack training program.
It displays key festival information such as artists and their concert, stages and amenities on a live map and more.

Built with:

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- CSS Modules
- Leaflet & React Leaflet for map rendering
- Hosted on [Vercel](https://vercel.com/)

## Project structure

- `app/page.js` – Home page
- `components/` – Reusable UI components (e.g., MiniMap, TicketsLink) and Local CSS modules
- `lib/` – Utility functions (e.g., `fetchStagesOnly`)
- `public/` – Static assets

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/ManonFr/soumic-front.git
cd soumic-front

# Install dependencies
npm install

# Start the dev server with Turbopack
npm run dev
```

## Deployment

This project is deployed on Vercel.

To deploy your own version:

1. Push the project to Github
2. Create a Vercel account and import the repository
3. Vercel will auto-detest the Next.js framework and deploy it

## License

This project is for educational purposes and has no specific license.
