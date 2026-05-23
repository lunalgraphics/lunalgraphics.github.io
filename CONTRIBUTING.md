# Contributing to lunalgraphics.com

Thanks for your interest in contributing! Here's how to get started.

## Setup

1. Fork and clone the repo
2. Run `npm install`
3. Run `npm run dev` to start the dev server
4. Make your changes
5. Run `npm run check` to verify there are no type errors
6. Run `npm test` to run smoke tests
7. Open a pull request

## Code Style

- **Svelte 5 syntax only** — use `$props()`, `$state`, `$derived`, `$effect`, `{@render}` (not `export let`, `$:`, slots, or `on:` directives)
- **Tailwind CSS only** — no inline `style` attributes unless the value is dynamic. No `:global()` selectors. No `<style>` blocks.
- **TypeScript** — all new files should be TypeScript. Add types for props and data.
- **Accessibility** — use semantic HTML, provide alt text for images, ensure keyboard navigability.

## Content Changes

### Blog posts

See the README for instructions on adding a blog post. The key files are:
- `src/lib/content/blog.ts` — metadata array
- `src/routes/blog/[slug]/+page.svelte` — the post itself

### Product pages

Product data lives in `src/lib/content/products.ts`. Each product page in `src/routes/about-*/` imports from the content layer and uses the shared `ProductPage` component.

### Video tutorials

Add entries to `src/lib/content/videos.ts`. The video tutorials page renders them automatically.

## Component Guidelines

- Reusable components go in `src/lib/components/`
- Export them from `src/lib/components/index.ts`
- Use Bits UI for interactive primitives (dialogs, dropdowns, etc.)
- Props should be typed with `$props()` destructuring

## Testing

We use Playwright for smoke tests. Run with:

```bash
npm test
```

Tests verify that each route renders without errors. If you add a new route, add a corresponding test.

## Pull Request Process

1. Create a branch from `main` (e.g., `feat/my-feature` or `fix/my-fix`)
2. Keep PRs focused — one feature or fix per PR
3. Ensure `npm run check` and `npm test` pass
4. Describe what you changed and why in the PR description
