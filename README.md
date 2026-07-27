# Dev Patel Portfolio

Premium static portfolio for Dev Patel — a senior full-stack engineer focused on cloud platforms, event-driven systems, and production AI: AWS serverless architecture, real-time IoT telemetry, Kafka/MSK event processing, IoT device management + OTA, a shared React 19 design system, production dashboards, infrastructure automation, and a production Amazon Bedrock agent platform.

## Site Goals

- Present Dev accurately as a Senior Full-Stack Engineer (Cloud Platform, Event-Driven Systems & AI Agent Platforms) with 5 years of production cloud, manufacturing, operations, and customer-facing systems experience.
- Make the first viewport recruiter-friendly with clear role, focus, proof points, and calls to action.
- Tell a stronger technical story than a basic resume page while staying aligned to the resume.
- Keep the implementation fast, accessible, responsive, and easy to maintain on GitHub Pages.

## Source Files

- `index.html`: Complete semantic page structure and portfolio content.
- `css/styles.css`: Visual system, responsive layout, animation, focus, and accessibility states.
- `js/main.js`: Header scroll state, mobile navigation, escape handling, reveal animations, and active-section nav highlighting.
- `img/profile.png`: Primary visual asset used in the hero.
- `img/SAS.png`: Rutgers education asset.
- `Dev_Patel_Resume.pdf`: Resume linked from the hero CTA.
- `ARCHITECTURE.md`, `CONTENT.md`, `CHANGELOG.md`: Architecture, content model / source-of-truth, and change history.

## Local Preview

Run a static server from the repository root:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Maintenance Rule

Before making future project changes, read the Markdown docs first. If a change affects structure, content, styling, behavior, assets, deployment, or page goals, update the relevant section in these docs in the same change.
