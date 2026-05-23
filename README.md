# lunalgraphics.com

The official website for [Lunal Graphics](https://lunalgraphics.com) — free digital art tools for Photoshop and Photopea.

## Stack

- **Framework:** SvelteKit 2 + Svelte 5
- **Styling:** Tailwind CSS v4
- **Components:** Bits UI (headless, accessible primitives)
- **Deployment:** Static site via `adapter-static`
- **Font:** Orbitron (self-hosted via Fontsource)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app.css              # Tailwind config, theme tokens, global styles
├── app.html             # HTML shell
├── lib/
│   ├── components/      # Reusable Svelte components
│   ├── content/         # Structured content data (products, blog, videos)
│   └── config.ts        # Site-wide configuration (URLs, nav, etc.)
└── routes/
    ├── +layout.svelte   # Global layout (nav, footer, transitions)
    ├── +page.svelte     # Homepage
    ├── about-*/         # Product pages
    ├── blog/            # Blog posts + RSS feed
    ├── weblauncher/     # Web app launcher (iframe-based)
    └── ...              # Other pages (contact, downloads, etc.)
```

## Key Conventions

- **Svelte 5 syntax** — `$props()`, `$state`, `$derived`, `$effect`, `{@render}`
- **Tailwind only** — no inline styles (except dynamic values), no `:global()`, no `<style>` blocks
- **Content in data files** — product/blog/video metadata lives in `src/lib/content/`, not in components
- **Accessible** — semantic HTML, ARIA attributes, keyboard navigation, proper heading hierarchy

## Adding a Blog Post

1. Add metadata to `src/lib/content/blog.ts`
2. Create `src/routes/blog/[slug]/+page.svelte`
3. Use the `<BlogPost>` wrapper component:

```svelte
<script lang="ts">
  import { BlogPost } from '$lib/components';
  import banner from '$lib/assets/blog/X/banner.png';
</script>

<BlogPost title="..." date="YYYY-MM-DD" description="..." {banner}>
  <!-- Your content here (HTML) -->
</BlogPost>
```

## License

See [LICENSE.md](./LICENSE.md).
