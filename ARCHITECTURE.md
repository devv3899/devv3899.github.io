# Architecture

## Overview

This portfolio is a static GitHub Pages site. It does not require a build step, package manager, framework runtime, backend service, or API. The production page is served directly from `index.html` with static CSS, JavaScript, images, and a resume PDF.

## Runtime Flow

1. `index.html` loads metadata, fonts, `/css/styles.css`, and deferred `/js/main.js`.
2. The browser renders a semantic single-page portfolio with anchor navigation.
3. `js/main.js` enhances the static page with:
   - Sticky header scroll styling.
   - Mobile navigation open and close behavior.
   - Escape-key menu dismissal.
   - IntersectionObserver reveal animations.
4. All content remains readable if JavaScript is unavailable.

## Page Sections

- `#hero`: First impression, primary role, CTA links, and high-level proof points.
- `#work`: Software Engineer III value proposition and impact pillars.
- `#systems`: Capability map from edge/IoT through event services, cloud services, and dashboards.
- `#projects`: Production-oriented project stories plus selected CS systems foundations.
- `#experience`: Resume-aligned work history and education.
- `skills-section`: Language, frontend, AWS/data, and delivery toolbox.
- `#contact`: Recruiter-friendly contact CTA and contact details.
- Footer: Minimal back-to-top navigation only.

## Styling System

The visual system lives in `css/styles.css`:

- Typography uses `Newsreader` for editorial display headings and `Instrument Sans` for interface/body copy.
- Palette uses ink, paper, teal, coral, amber, and steel accents to avoid a generic single-color template.
- Layout relies on CSS Grid, full-width bands, constrained content width, and responsive breakpoints at `1020px`, `760px`, and `460px`.
- Motion is intentionally lightweight and respects `prefers-reduced-motion`.

## Accessibility

- Semantic headings and landmark elements are used throughout.
- A skip link is available for keyboard users.
- Mobile navigation uses `aria-expanded` and `aria-controls`.
- Decorative hero image content is hidden from assistive tech while meaningful images include alt text.
- Interactive focus states are visible.
- Text remains present in HTML and does not depend on animation to become available.

## Deployment

The project is GitHub Pages ready because all asset paths are absolute from the site root:

- `/css/styles.css`
- `/js/main.js`
- `/img/profile.png`
- `/img/SAS.png`
- `/Dev_Patel_Resume.pdf`

If the repository is served from a subpath instead of a user/org root page, convert these to relative paths.
