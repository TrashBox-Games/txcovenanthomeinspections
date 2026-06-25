# Business Template

A template repository for quickly spinning up small business websites.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Component Dev:** [Storybook](https://storybook.js.org/)
- **Unit Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- **E2E Testing:** [Playwright](https://playwright.dev/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Node Version:** managed via [fnm](https://github.com/Schniz/fnm) (`.node-version`)

## Getting Started

```bash
# Install fnm if you haven't already
# https://github.com/Schniz/fnm#installation

# Use the correct Node version
fnm use

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   ├── lib/           # Utility functions (cn, etc.)
│   ├── hooks/         # Custom React hooks
│   └── styles/        # Global CSS / Tailwind theme
├── e2e/               # Playwright E2E tests
├── public/            # Static assets
└── .storybook/        # Storybook configuration
```

## Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Lint with ESLint |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm test:e2e` | Run E2E tests (Playwright) |
| `pnpm storybook` | Start Storybook (component library on port 6006) |
| `pnpm format` | Format code with Prettier |

## Creating a New Business Site

1. Click **"Use this template"** on GitHub to create a new repository
2. Update `src/app/layout.tsx` with your business name and metadata
3. Add your components in `src/components/`
4. Add shadcn/ui components: `pnpm dlx shadcn@latest add button`
5. Deploy to GitHub Pages (see below)

## Deploy to GitHub Pages

This site is a static Next.js export deployed automatically when you push to `main`.

### One-time setup

1. Push this repo to GitHub.
2. Go to **Settings → Pages** in the repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Go to **Settings → Secrets and variables → Actions** and add a repository secret:
   - `NEXT_PUBLIC_TRASHBOX_API_KEY` — your Trashbox form API key
5. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).

The site will be published at:

`https://trashbox-games.github.io/txcovenanthomeinspections/`

The deploy workflow uses `actions/configure-pages` to set the correct `basePath` automatically. That keeps CSS and JavaScript loading on both the `github.io` project URL and a custom domain (where `basePath` is empty).

### Custom domain

1. Add DNS records and set the domain under **Settings → Pages**.
2. Push to `main` — the workflow detects the custom domain and builds with an empty `basePath`.
3. Add the custom domain to your Trashbox API key allowed origins.

You do not need to edit the workflow when switching to a custom domain.

### Local dev with the Pages base path

To match production routing locally:

```bash
NEXT_PUBLIC_BASE_PATH=/txcovenanthomeinspections pnpm dev
```
