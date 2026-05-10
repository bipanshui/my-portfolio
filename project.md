# Project Nuts and Bolts

This repository is a personal portfolio built with the Next.js App Router. It is a mostly single-page site composed of reusable sections, a small set of shared UI primitives, and lightweight motion effects.

## What the app is

The site is a portfolio for Bipanshu Kumar, focused on DevOps, cloud, automation, and backend work. It is organized as a landing page with these sections:

1. Hero
2. About
3. Skills
4. Projects
5. Contact
6. Footer

The page is designed to feel like a modern developer portfolio, with anchored navigation, animated reveal effects, dark/light theme support, and componentized content blocks.

## Tech stack

- `Next.js` 16 with the App Router
- `React` 19
- `TypeScript`
- `Tailwind CSS` 4
- `framer-motion` for animation
- `next-themes` for theme switching
- `lucide-react` for icons
- `class-variance-authority`, `clsx`, and `tailwind-merge` for variant-driven styling
- Radix UI helpers for a few low-level interaction primitives

## Entry points

The main files that define the app are:

- [`app/layout.tsx`](app/layout.tsx)
- [`app/page.tsx`](app/page.tsx)
- [`app/globals.css`](app/globals.css)

`app/layout.tsx` sets the global metadata, fonts, and theme provider.  
`app/page.tsx` composes the actual landing page sections.  
`app/globals.css` defines the design tokens and base theme colors.

## Rendering model

This project uses a mix of server and client components.

- `app/layout.tsx` is a server component. It is responsible for document-level setup.
- `app/page.tsx` is also server-rendered and simply assembles the page sections.
- Most interactive sections are client components because they use React state, effects, `framer-motion`, or browser APIs.

The client-side sections are:

- [`components/navbar.tsx`](components/navbar.tsx)
- [`components/hero.tsx`](components/hero.tsx)
- [`components/about.tsx`](components/about.tsx)
- [`components/skills.tsx`](components/skills.tsx)
- [`components/projects.tsx`](components/projects.tsx)
- [`components/contact.tsx`](components/contact.tsx)
- [`components/footer.tsx`](components/footer.tsx)
- [`components/providers/theme-provider.tsx`](components/providers/theme-provider.tsx)

## Page composition

`app/page.tsx` is intentionally simple. It imports the section components and renders them in order.

This gives the site a clear structure:

- `Navbar` is fixed at the top
- `Hero` fills the first screen with the main intro
- `About` explains the background
- `Skills` shows the toolset
- `Projects` lists work samples
- `Contact` provides social links and a contact form
- `Footer` closes the page with a small summary

Because the page is assembled from isolated section components, each block can evolve independently without turning the main page file into a large template.

## Theme and styling

The project uses a token-based styling approach.

### Global tokens

`app/globals.css` defines CSS variables for:

- `--background`
- `--foreground`
- `--primary`
- `--muted`
- `--border`
- `--accent`

Those variables are mapped into Tailwind’s theme layer with `@theme inline`, so classes like `bg-background`, `text-foreground`, and `border-border` work consistently across the app.

### Light and dark mode

There are two theme mechanisms working together:

- a `prefers-color-scheme: dark` fallback in CSS
- the `ThemeProvider` from `next-themes`, which adds or removes the `dark` class

That means the app can follow system preference, but the user can also toggle the theme from the navbar.

### Fonts

`app/layout.tsx` loads `Geist` and `Geist_Mono` through `next/font/google`. The font variables are wired into the Tailwind theme so the entire site uses the same typography system.

## Shared primitives

The `components/ui` folder contains the reusable low-level building blocks.

- [`components/ui/button.tsx`](components/ui/button.tsx)
- [`components/ui/badge.tsx`](components/ui/badge.tsx)
- [`components/ui/input.tsx`](components/ui/input.tsx)
- [`components/ui/textarea.tsx`](components/ui/textarea.tsx)
- [`components/ui/sheet.tsx`](components/ui/sheet.tsx)

These are small design-system style components rather than full-featured widgets.

### `Button`

`Button` uses variant and size props powered by `class-variance-authority`.

It supports:

- `default`
- `outline`
- `ghost`
- `secondary`
- `destructive`

and sizes such as `sm`, `default`, `lg`, and `icon`.

### `Badge`

`Badge` is also variant-driven and is used to label skills, project tags, and status markers.

### `Input` and `Textarea`

These are standard form controls with shared borders, focus rings, spacing, and theme-aware colors.

### `Sheet`

`Sheet` is a custom right-side mobile drawer implemented with `framer-motion`.

It provides:

- a full-screen backdrop
- a slide-in panel from the right
- a title slot
- a close-button wrapper

The navbar uses this on small screens instead of a traditional desktop menu.

## Navigation

[`components/navbar.tsx`](components/navbar.tsx) is the top-level navigation bar.

What it does:

- stays fixed at the top of the viewport
- fades/slides in on page load
- provides desktop section links
- opens a mobile slide-out menu
- toggles light/dark theme

The nav links are in-page anchors:

- `#home`
- `#about`
- `#skills`
- `#projects`
- `#contact`

Instead of using full route changes, the navbar scrolls to sections with `scrollIntoView({ behavior: "smooth" })`.

## Hero section

[`components/hero.tsx`](components/hero.tsx) is the most animated part of the page.

It includes:

- a headline
- a typing-style role rotator
- a terminal-style animated panel
- CTA buttons
- social icons

### State inside Hero

The hero manages three pieces of client state:

- `currentRole` rotates through a list of role strings
- `displayedText` types out the current role character by character
- `visibleLines` controls when each terminal line appears

The typing effect is driven by a timed `useEffect` that advances one character at a time.  
The terminal sequence is driven by a set of delayed timeouts so the lines appear in a staged way.

### Visual idea

The right side of the hero is not a real terminal. It is a stylized panel meant to suggest build logs, Docker commands, and Terraform output, reinforcing the DevOps theme.

## About section

[`components/about.tsx`](components/about.tsx) combines three things:

- a profile image generated from DiceBear initials
- a long-form personal bio
- a stats row

The section uses `whileInView` animations so it fades in only when scrolled into view.

The stats are static content at the moment:

- Projects Built
- Cloud Tools
- Goal

## Skills section

[`components/skills.tsx`](components/skills.tsx) presents skills as grouped badges.

The data is arranged into categories:

- DevOps & Cloud
- Languages
- Backend
- Tools

Each category is rendered from a data array, which makes the section easy to update without changing the layout code.

## Projects section

[`components/projects.tsx`](components/projects.tsx) is another data-driven section.

Each project entry contains:

- `name`
- `description`
- `tags`
- `github`
- `live`
- optional `isWip`

This section is structured so you can add or remove projects by editing the array, not the JSX layout.

The current project cards are:

- Attendance System
- Infrastructure Automation
- CI/CD Pipeline Template
- Portfolio Website

The “Portfolio Website” card is marked as work in progress.

## Contact section

[`components/contact.tsx`](components/contact.tsx) contains:

- social links
- a basic contact form

The form is currently client-side only. It updates local state and logs the submitted payload to the console.

That means the form is not wired to a backend, email service, or API route yet.

The section is still useful as a UI placeholder and as a clear spot for later integration with:

- a server action
- a form handling service
- a custom API endpoint

## Footer

[`components/footer.tsx`](components/footer.tsx) gives the page a final closing row with:

- a short “built with Next.js” line
- social links
- a dynamic copyright year

## Utilities

[`lib/utils.ts`](lib/utils.ts) exports a `cn()` helper.

This is the standard class-name merge helper used throughout the UI primitives:

- `clsx` handles conditional class composition
- `tailwind-merge` resolves conflicting Tailwind classes

## Current data hard-coding

The project is mostly static right now. That is fine for a portfolio, but it also means many values are hard-coded in component arrays and constants.

Examples:

- personal name and headline in the hero and navbar
- project descriptions and links
- social links
- skill categories
- about text

This makes the site easy to maintain for a single-person portfolio, but it is not yet wired to CMS data or an external content source.

## Known limitations

The biggest current limitations are:

- the contact form does not submit anywhere
- the resume button in the hero is only a visual CTA
- some external links still point to placeholder URLs like `https://github.com` and `https://example.com`
- the site is content-driven, but the content is still embedded directly in components

## How the pieces fit together

At runtime, the flow is simple:

1. `app/layout.tsx` sets fonts, metadata, and theme context.
2. `app/page.tsx` renders the section components in order.
3. Each section manages its own local UI state if needed.
4. Shared UI primitives keep styling consistent.
5. Tailwind classes and CSS variables provide the visual system.
6. `framer-motion` adds reveal and interaction polish.

In practice, this means the project is easy to reason about because there is no separate state management layer, no backend dependency for the visible content, and no routing complexity beyond anchored sections.

## If you want to extend it

The next logical improvements would be:

- wire the contact form to a backend or server action
- replace placeholder links with real profiles
- extract portfolio content into a data file or CMS
- add a real resume download path
- replace the generated avatar with an actual profile image
- add project detail pages if the portfolio grows beyond a single page

