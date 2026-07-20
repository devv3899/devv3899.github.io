# Changelog

## 2026-07-20 — Senior repositioning + best-in-class pass (v1.2.0)

- Repositioned from "Software Engineer III" to "Senior Software Engineer · Cloud Platform · Event-Driven Systems · AI / Agent Platforms" across the title, meta, hero eyebrow, and brand. The Experience section keeps the factual "Software Engineer III" title.
- Corrected the AI framing: replaced "RAG pipeline design" with agentic tool-use + NL-to-SQL over operational data (the systems use no vector RAG). Fixed in the systems capability and skills toolbox.
- Updated fleet scale from 3,000+ to 3,500+ machines (and growing); added the cross-facility view (five facilities / nine production lines) to the Fleet Analytics card.
- Added two flagship "Selected Systems": IoT Device Management & OTA Platform (feature card) and 3D Mesh QC Viewer. Enriched MES (planner-routed Bedrock agent, Claude + Nova), Unified Data Exchange (no-code transformer + HIPAA-oriented PII protection), and auth (single reusable authorizer across HTTP/REST/WebSocket).
- Expanded the experience timeline with the AI agent platform, the IoT/OTA platform, and legacy-JS → React 19 migrations onto a shared design system (13+ dashboards).
- SEO/structured data: added JSON-LD `Person` schema, canonical URL, `og:url`, and a Twitter card.
- Accessibility: added visible `:focus-visible` outlines on links, buttons, and nav.
- Added active-section navigation highlighting (IntersectionObserver).
- Refreshed the skills toolbox (added SQL, three.js, Plotly; removed "RAG").
- Removed dead Vite build artifacts (`assets/index-*.js`, `assets/index-*.css`).
- Updated CONTENT.md and ARCHITECTURE.md.

## 2026-06-25 — Resume alignment, favicon, UI polish (v1.1.0)

- Rewrote site content to match the updated resume: new headline ("Software Engineer III · Cloud Platform & Event-Driven Systems"), sharper summary, and impact-first metrics throughout.
- Reframed the projects section as "Selected Systems," now featuring three flagship platforms (Scalable MES, Unified Data Exchange Platform, Fleet Analytics Dashboard) plus telemetry, authentication, and ingestion infrastructure.
- Updated hero highlights and experience bullets with real outcome metrics: 1M+ daily events (minutes→sub-second), reusable patterns across 40+ services (setup days→hours), 3,000+ machine fleet dashboard, and Bedrock + AI agent workflows.
- Added a centralized authentication platform highlight (Cognito + Azure AD / MSAL).
- Removed the Signage Ideas role to match the resume.
- Refreshed the skills toolbox (MUI, vanilla-JS SPAs, Highcharts, Azure AD/MSAL, WebSocket APIs, Timestream/InfluxDB, AI agent orchestration).
- Replaced the resume PDF with the latest polished version.
- Added a proper favicon set — a "DP" monogram (SVG + PNG + multi-size ICO + Apple touch icon). The old favicon was a mislabeled JPEG and did not render reliably.
- Added subtle hover lift to project, impact, and capability cards (respects reduced-motion).
- Updated CONTENT.md and ARCHITECTURE.md to reflect the above.
