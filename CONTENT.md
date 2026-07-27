# Content Model

## Positioning

Dev Patel is presented as a **Senior Full-Stack Engineer · Cloud Platform, Event-Driven Systems & AI Agent Platforms** with 5 years building cloud platforms, real-time applications, and production AI systems for high-volume dental manufacturing. The portfolio leads with **first-engineer-in ownership** and measurable outcomes rather than a generic full-stack label. Strongest themes:

- First software engineer on the Automation team (a hardware engineering group) — joined mechanical and controls engineers bringing connected devices online across five sites, built the cloud telemetry backend and the application platform above it, and now owns architecture and delivery end to end while guiding two engineers.
- The standards layer: Terraform + Lambda delivery across the backend, and a shared React 19 / MUI / Vite design system across the frontend.
- Real-time event-driven ingestion (IoT Core, Kafka/MSK, WebSockets, 100+ DynamoDB tables).
- IoT device management + OTA (provisioning, firmware/config delivery, self-healing reconciliation).
- A configurable workflow engine that digitized a paper-based production process.
- Manufacturing analytics dashboards and fleet monitoring, plus closed-loop ChatOps remediation.
- A production Amazon Bedrock **AI agent platform** — planner-routed, multi-model tool-use with NL-to-SQL over Athena and human-in-the-loop gating on writes.
- Authentication and authorization (Cognito + Azure AD / Entra, scoped API keys, dynamic RBAC).

## Resume-Aligned Facts

- Name: Dev Patel.
- Headline: Senior Full-Stack Engineer · Cloud Platform · Event-Driven Systems · AI Agent Platforms.
- Location: Irvine, California.
- Email: `devnandol@gmail.com`. Phone: `(551) 234-1189`.
- LinkedIn: `https://www.linkedin.com/in/devv3899/`. GitHub: `https://github.com/devv3899`.
- Current role (factual title in Experience): Software Engineer III at Glidewell Dental, September 2021 to present. The site also shows the full progression — Software Engineer III (2025–Present) · II (2022–2025) · I (2021–2022) — because the resume now lists it. The "Senior Full-Stack Engineer" headline is positioning/brand; the Experience section keeps the factual title.
- Education: B.S. in Computer Science, Rutgers University – New Brunswick, 2017–2021 (May 2021).

## Headline Metrics (keep consistent across site + resume)

- 1M+ events a day; operational visibility cut from minutes to **seconds**.
- Standardized Terraform + Lambda pattern is the default across **80+ backend services**; new-service setup cut from days to hours.
- Shared React 19 / MUI / Vite design system behind **15+ React applications** and **15+ real-time operational dashboards**.
- Ingestion fans out to **100+ DynamoDB tables**.
- Fleet analytics dashboard covering **3,500+ devices (and growing)**; idle detection eliminated hours of manual status checks daily.
- Cross-facility view unifying **five sites and nine production lines**.
- Two engineers guided through implementation and review.

## Accuracy Guardrails

- The AI work is **agentic tool-use + NL-to-SQL** (planner-routed, multi-model Claude + Nova agent over operational data). There is **no vector RAG** — do **not** use the term "RAG" anywhere.
- Keep the device count at the real, defensible **3,500+** (never inflate).
- Say **minutes to seconds** — not "sub-second." The resume claims seconds; the site previously overstated this as sub-second and has been corrected.
- Describe the `firmware` work as **IoT device management + OTA delivery** — not "wrote embedded firmware."
- **Never write "founding engineer."** Dev did not found the Automation team — it already existed as mechanical and controls engineers. He was the **first software engineer hired into it**. Use "first software engineer on the Automation team."
- Say **multi-account promotion** (not "multi-environment") — that is the resume's wording.
- Say **Azure AD (Entra)** / **Entra ID (MSAL)** — the resume moved off the bare "Azure AD / MSAL" wording.
- **The site is otherwise a strict subset of the resume.** Do not introduce skills, tools, or projects that are not on `Dev_Patel_Resume.pdf`.
- Deliberate, documented exceptions that go beyond the resume because they are true and add depth: the MES's **19 serverless microservices**, its **IoT-driven Resource Manager**, the data hub's **Timestream for InfluxDB** path and no-code transformer, and the **3D Mesh QC Viewer** project (with three.js in its card meta only — three.js is *not* in the skills toolbox). Everything else must trace to the resume.
- Removed as the resume dropped them: Java, Angular, Kubernetes, Azure, GCP, Greengrass, Kinesis, Timestream (as a standalone AWS skill), Amplify, VPC, D365 / Dataverse, and the whole "Enterprise integrations" skills category. Zendesk and Pega survive only inside the Fleet Analytics card, where the resume still names them. Previously-removed extras: C/C++/C#, "Vanilla-JS SPAs", SiteWise / IoT Events / IoT Analytics / Route 53, the "Secure file ingestion infrastructure" project, and the legacy-JS → React 19 migration bullet.

## Selected Systems (replaces old generic "Projects")

**Ordering principle: sole-ownership first.** The two feature cards are the platforms Dev designed, built, and owns as the **sole engineer**. Everything after is work where he set the architecture and led delivery with the team building alongside him. Card `project-meta` carries this honestly — `Flagship platform · sole engineer` vs. `Platform · architect & lead` — so the ordering is legible rather than implied. Do not relabel a team-delivered system as sole-engineer work.

1. **IoT Device Management & OTA Platform** — the cloud control plane for a CNC milling fleet: automated X.509 provisioning, least-privilege per-device policies, over-the-air firmware/config delivery, self-healing configuration reconciliation (hash-verified config, conflict detection, auto-recovery). AWS IoT, Python, Terraform. *(feature card · sole engineer)*
2. **Unified Real-Time Data Exchange Platform (UDEP)** — the ingestion backbone: topic-routed pub/sub over IoT Core + Kafka/MSK fanning out to webhooks, live WebSocket clients, and a Timestream/InfluxDB time-series store; no-code message transformer, HIPAA-oriented PII hashing; 1M+ events a day into 100+ DynamoDB tables, minutes→seconds. *(feature card · sole engineer)*
3. **Manufacturing Execution System & Workflow Engine** — 19 serverless microservices; digitized a paper-based production process via a configurable workflow engine (ordered steps, state transitions, conditional branching, scripted actions, inventory side-effects) so every step emits structured events, resurfaced as LLM-generated dashboards and real-time KPIs. HTTP/WebSocket APIs, IoT-driven Resource Manager. Python, AWS, Terraform. *(architect & lead)*
4. **AI Agent Platform** — planner-routed, multi-model (Claude + Amazon Nova) tool-use agent embedded in the MES; 10-tool registry (live DynamoDB access, sandboxed code interpreter, NL-to-SQL over Athena, analytics presets, email/SNS/IoT actions), human-in-the-loop gating on writes, structures free-text ticket narratives into queryable records, builds charts/KPIs on demand. Amazon Bedrock, Node.js, DynamoDB, API Gateway WebSockets. *(architect & lead)*
5. **Shared Design System & App Platform** — React 19 / MUI / Vite; token-driven light/dark theming, a layout shell, and a reusable component kit (command palette, data grid, dialogs, status chips, empty states); behind 15+ real-time operational dashboards.
6. **Fleet Analytics Dashboard** — React/MUI + Entra ID; 3,500+ devices, utilization and idle detection over a state engine, per-device 360 view, Zendesk/Pega service-desk integrations, five sites / nine lines; endpoints later moved off full-table scans onto precomputed rollups with async backfill.
7. **Machine Telemetry & Fault Visibility** — the device-side half of ingestion: MQTT topic design across five sites and nine lines, Kafka consumers, and the state engine turning raw machine chatter into alarms and utilization. Deliberately carries **no volume metrics** — those live on UDEP (item 2) so the two cards don't duplicate each other.
8. **Authentication & authorization platform** — single reusable Lambda authorizer validating Cognito + Azure AD (Entra) JWTs plus scoped API keys across HTTP, REST, and WebSocket APIs, with a dynamic RBAC engine rolled out log-then-enforce to zero mismatches.
9. **ChatOps Remediation** — Microsoft Teams Adaptive Cards firing on threshold breaches and failure-rate spikes, with operator buttons calling back into Lambda to remediate the device from chat.
10. **3D Mesh QC Viewer** — in-browser STL/PLY/OBJ rendering with reference-vs-test deviation heatmaps and PDF/zip export (Next.js, React, three.js).

Card layout: items 1–2 are full-width feature cards (`span 6`); items 3–10 are half-width (`span 3`). Keep the half-width count **even** so the grid never orphans a card — currently 8. Feature-card bullet lists render as a 3-column grid above 1020px, so **three bullets** is the natural count for a feature card.

## Skills Toolbox (mirrors the resume's six categories, in order)

Languages · Frontend · AWS · AI & ML · Data & observability · Infrastructure & security. Rendered as a 3-column grid (2 rows).

## Tone

Precise senior engineering language. No inflated claims or unverifiable metrics. Where production details are confidential, frame by problem type, architecture, and capability rather than naming internal systems.

## Calls To Action

Primary: email `devnandol@gmail.com`. Secondary: view resume PDF (`/Dev_Patel_Resume.pdf`), LinkedIn, GitHub.
