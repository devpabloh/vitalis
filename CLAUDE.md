# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server at http://localhost:5173
npm run build        # type-check then bundle for production
npm run lint         # ESLint
npm run format       # Prettier (write)
npm run test         # Vitest (watch mode)
npm run test -- --run        # Vitest (single run, no watch — used in CI)
npm run test:coverage        # Vitest with coverage report
npm run test:e2e             # Playwright end-to-end tests
```

Run a single unit test file:
```bash
npx vitest run src/test/useTheme.test.tsx
```

The `format:check` script key in `package.json` contains a space (`"format: check"`), so it must be called as `npm run "format: check"` — not `npm run format:check`.

Playwright auto-starts the dev server unless `CI=true`. If Chromium download fails on Ubuntu, set `PLAYWRIGHT_CHROMIUM_PATH` to an installed Chromium binary.

## CI/CD

The GitHub Actions pipeline (`.github/workflows/pipeline.yaml`) runs lint → unit tests → build on every push and PR. On merge to `main` it deploys the `dist/` output to **GitHub Pages** via `peaceiris/actions-gh-pages`.

## Architecture

Single-page landing site for **Vitalis** (corporate health/fitness). No router — `App.tsx` renders all sections in order: `Header → Hero → Stats → About → Services → Gallery → Videos → Testimonials → Process → Contact → Footer → FloatingContact`.

**State management:** React Context API only. Theme (light/dark) is the only global state:

- `src/contexts/theme/themeContext.tsx` — `ThemeContext`, `Theme`, and `ThemeContextType` types
- `src/providers/ThemeProvider.tsx` — `ThemeProviders`; syncs theme to `document.body.className` via `useEffect`, which activates the `body.light` / `body.dark` CSS rules in `index.css`
- `src/hook/useTheme.ts` — wraps `useContext(ThemeContext)` with a guard; **always use this hook**, never consume `ThemeContext` directly

**Hooks:**
- `src/hooks/useScrollAnimation.ts` — `IntersectionObserver`-based visibility trigger; fires once per element, returns `{ ref, isVisible }`
- `src/hooks/useCounter.ts` — animates a number from 0 to `target` using `requestAnimationFrame` with cubic ease-out; starts when `active` is true (typically wired to `useScrollAnimation`)

**Scroll animation patterns — two variants coexist:**
- *Tailwind inline*: apply Tailwind opacity/translate classes conditionally via `cn()` based on `isVisible` (e.g., `Stats.tsx`)
- *CSS class toggle*: add `.reveal`, `.reveal-left`, or `.reveal-right` to the element and add `.visible` when `isVisible` is true (e.g., `About.tsx`). These classes and their `.visible` transitions are defined in `index.css`

**Static content:** Business metadata (phone, email, stats, CREF, etc.) lives in `src/data/info.json` — import from there rather than hardcoding. Exception: Gallery photos, Videos list, and Testimonials content are defined inline in their respective component files, with images imported from `src/assets/Fotos/` and `src/assets/comentarios/`.

**Gallery and Videos patterns:**
- `Gallery.tsx` — grid of imported JPEG images with a built-in lightbox (`selected` state holds the enlarged image src; clicking the overlay clears it).
- `Videos.tsx` — YouTube card grid; clicking a thumbnail sets `playing` state to the video ID and swaps the `<img>` thumbnail for an `<iframe>` embed (`autoplay=1`). Thumbnails are fetched from `https://img.youtube.com/vi/{id}/maxresdefault.jpg`.

**Nav links** (defined in `Header.tsx`) only cover `#inicio`, `#sobre`, `#servicos`, `#como-funciona`, and `#contato`. The Gallery, Videos, and Testimonials sections have their own IDs (`#galeria`, `#videos`, `#depoimentos`) but are not in the main nav.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite`. Brand tokens (`--color-vitalis-green`, `--color-vitalis-orange`, etc.) are defined in the `@theme` block in `src/index.css`. Additional CSS utilities defined there: `.gradient-text` and `.gradient-text-warm` for gradient text effects; `.animate-float` and `.animate-float-slow` for infinite float animations; `.hero-enter` for the Hero section entrance animation. Use `cn()` from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional class composition.

**Testing:**
- Unit tests: Vitest + jsdom + Testing Library, setup in `src/test/setup.ts`. Currently only `useTheme` is tested (`src/test/useTheme.test.tsx`).
- E2E: Playwright, tests in `e2e/`, runs against the Vite dev server.

**Note on directory naming:** There are two hook directories — `src/hook/` (contains `useTheme.ts`) and `src/hooks/` (contains `useCounter.ts` and `useScrollAnimation.ts`). Add new hooks to `src/hooks/`.
