# Content Model

## Positioning

Dev Patel is presented as a **Senior Software Engineer · Cloud Platform, Event-Driven & AI Systems** with 5 years building cloud-native, event-driven platforms for high-volume dental manufacturing. The portfolio leads with **first-engineer-in ownership** and measurable outcomes rather than a generic full-stack label. Strongest themes:

- First software engineer on the Automation team — joined mechanical and controls engineers piloting IoT on the shop floor, independently built the AWS telemetry backend and platform around it, and now owns the infrastructure other engineers build on.
- AWS serverless architecture and reusable Terraform/Lambda delivery patterns.
- Real-time IoT telemetry and event-driven pipelines (IoT Core, Kafka/MSK, WebSockets).
- IoT device management + OTA (provisioning, firmware/config delivery, device-shadow reconciliation).
- Manufacturing analytics dashboards and fleet monitoring.
- A production Amazon Bedrock **AI agent platform** — planner-routed, multi-model tool-use with NL-to-SQL over operational data.
- Centralized authentication (Cognito + Azure AD / MSAL).

## Resume-Aligned Facts

- Name: Dev Patel.
- Headline: Senior Software Engineer · Cloud Platform · Event-Driven Systems · AI / Agent Platforms.
- Location: Irvine, California.
- Email: `devnandol@gmail.com`. Phone: `(551) 234-1189`.
- LinkedIn: `https://www.linkedin.com/in/devv3899/`. GitHub: `https://github.com/devv3899`.
- Current role (factual title in Experience): Software Engineer III at Glidewell Dental, September 2021 to present. The "Senior Software Engineer" headline is positioning/brand; the Experience section keeps the factual title.
- Education: B.S. in Computer Science, Rutgers University – New Brunswick, 2017–2021.

## Headline Metrics (keep consistent across site + resume)

- 1M+ daily telemetry events; operational visibility latency cut from minutes to sub-second.
- Standardized Terraform + Lambda pattern is the default across **40+ services and 13+ applications**; new-service setup cut from days to hours.
- Fleet analytics dashboard monitoring **3,500+ machines (and growing)**; idle-detection alerting eliminated hours of manual status checks daily.
- Cross-facility view unifying **five facilities and nine production lines**.
- Production Amazon Bedrock AI agent platform cut manual analyst and triage time.

## Accuracy Guardrails

- The AI work is **agentic tool-use + NL-to-SQL** (planner-routed, multi-model Claude + Nova agent over operational data). There is **no vector RAG** — do **not** use the term "RAG" anywhere.
- Keep the machine count at the real, defensible **3,500+** (never inflate).
- Describe the `firmware` work as **IoT device management + OTA delivery** — not "wrote embedded firmware."
- **Never write "founding engineer."** Dev did not found the Automation team — it already existed as mechanical and controls engineers. He was the **first software engineer hired into it**. Use "first software engineer on the Automation team."
- Say **multi-account promotion** (not "multi-environment") — that is the resume's wording.
- Two site details deliberately go beyond the resume because they are true and add depth: the MES's **19 serverless microservices** and its **IoT-driven Resource Manager**. Everything else must trace to the resume.
- **The site is otherwise a strict subset of the resume.** Do not introduce skills, tools, or projects that are not on `Dev_Patel_Resume.pdf`. Previously-removed extras: C/C++/C#, "Vanilla-JS SPAs", SiteWise / IoT Events / IoT Analytics / RDS / EC2 / Route 53, the "Secure file ingestion infrastructure" project, and the legacy-JS → React 19 migration bullet.

## Selected Systems (replaces old generic "Projects")

1. **Manufacturing Execution System (MES)** — 19 serverless microservices; digitizes physical, flow-based production so every step emits structured data, then turns it into real-time KPIs and AI-generated charts for plant leadership. HTTP/WebSocket APIs, IoT-driven Resource Manager. Python, AWS, Terraform. *(feature card)*
2. **AI Agent Platform** — planner-routed, multi-model (Claude + Amazon Nova) tool-use agent embedded in the MES; 10-tool registry (live DynamoDB access, sandboxed code interpreter, NL-to-SQL, analytics presets, email/SNS/IoT actions), structures free-text ticket narratives into queryable records, builds charts/KPIs on demand. Amazon Bedrock, Node.js, DynamoDB, API Gateway WebSockets. *(feature card)*
3. **IoT Device Management & OTA Platform** — zero-touch X.509 provisioning, least-privilege per-device policies, over-the-air firmware/config delivery, device-shadow reconciliation (hash-verified config, conflict detection, auto-recovery).
4. **Unified Real-Time Data Exchange Platform** — central hub over WebSockets + IoT Core; topic routing, webhook forwarding, no-code message transformer, HIPAA-oriented PII protection, Timestream/InfluxDB time-series path.
5. **Fleet Analytics Dashboard** — React/MUI + Azure AD; 3,500+ machines, idle detection, Entity Hub 360, Zendesk/Pega field-service integrations; plus a cross-facility view (five facilities / nine lines).
6. **Real-time telemetry pipelines** — AWS IoT + Kafka/MSK, 1M+ daily events, minutes→sub-second.
7. **Centralized authentication platform** — single reusable Lambda authorizer validating dual Cognito + Azure AD (MSAL) tokens plus API keys across HTTP, REST, and WebSocket APIs.
8. **3D Mesh QC Viewer** — in-browser STL/PLY/OBJ rendering with reference-vs-test deviation heatmaps and PDF/zip export (Next.js, React, three.js).

Card layout: items 1–2 are full-width feature cards (`span 6`); items 3–8 are half-width (`span 3`). Keep the half-width count **even** so the grid never orphans a card.

## Skills Toolbox (mirrors the resume's six categories, in order)

Languages · AWS · AI & ML · Frontend · Infrastructure & security · Enterprise integrations. Rendered as a 3-column grid (2 rows).

## Tone

Precise senior engineering language. No inflated claims or unverifiable metrics. Where production details are confidential, frame by problem type, architecture, and capability rather than naming internal systems.

## Calls To Action

Primary: email `devnandol@gmail.com`. Secondary: view resume PDF (`/Dev_Patel_Resume.pdf`), LinkedIn, GitHub.
