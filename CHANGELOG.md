# Changelog

## 2026-07-26 — Corrected origin-story wording (v1.3.1)

- Replaced every "founding engineer" reference with "first software engineer on the Automation team." Dev did not found the team — it already existed as mechanical and controls engineers, and he was the first software hire into it. Added a documentation guardrail so this doesn't drift back.
- Swapped in the updated resume PDF, which carries the same corrected wording.

## 2026-07-26 — Resume sync: origin story + strict resume parity (v1.3.0)

- Led with the origin story from the resume: hero now opens with "first software engineer on a dental-manufacturing automation team," and a new "First engineer in, full-stack owner" impact card covers building the AWS telemetry backend and reviewing other engineers' work into production.
- Promoted the AI Agent Platform out of the MES card into its own flagship card — 10-tool registry, live DynamoDB access, sandboxed code interpreter, NL-to-SQL, ticket-narrative structuring, and on-demand charts instead of fixed dashboards.
- Rewrote the MES card around what it actually does: digitizing flow-based production so every step emits structured data, feeding real-time KPIs and AI-generated charts for plant leadership.
- Rewrote the Glidewell experience bullets to match the resume line for line, including the ownership/mentorship and serverless-cost bullets that were missing.
- Trimmed everything the resume does not claim: C/C++/C#, "Vanilla-JS SPAs," SiteWise / IoT Events / RDS / EC2 / Route 53, the Secure File Ingestion project, and the legacy-JS → React 19 migration bullet.
- Rebuilt the skills toolbox into the resume's six categories, adding a new Enterprise Integrations group (Zendesk, Pega, D365 / Dataverse).
- Updated the platform-leverage metric to "40+ services · 13+ applications" and refreshed the page title/meta/social descriptions to match.
- Layout: impact grid is now 2×2, skills are a 3-column grid, and the project grid keeps an even number of half-width cards.
- Updated CONTENT.md and ARCHITECTURE.md, and added a guardrail that the site must stay a strict subset of the resume.

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
