# Akin Product Discovery

## Product context
Akin is a multi page marketing site that explains the company platform, industries, solutions, and thought leadership initiatives. The experience needs to demonstrate credibility for enterprise buyers evaluating AI consulting, expose proof points like the Velocity methodology, and invite prospects to request workshops or pilots.

## Primary personas
| Persona | Description | Key needs | Primary entry points | Moments of value |
| --- | --- | --- | --- | --- |
| Visionary executive | CIO or CDO researching partners that can accelerate AI transformation across multiple business units. | Wants clarity on Velocity framework, client stories, and governance posture. Needs frictionless access to sales and the ability to share content with peers. | Homepage hero CTA, Solutions overview, Velocity approach, Contact form. | Understands how Akin structures programs, sees relevant case studies, books a meeting. |
| Functional lead | Director within an industry segment such as retail or energy searching for targeted solutions. | Needs industry specific examples, quantified impact, and proof that Akin understands unique constraints. | Industries navigation, solution sub pages, Insight articles tied to the sector. | Finds an industry solution stack, downloads a brief, subscribes to insights. |
| Technical champion | Lead architect evaluating whether Akin can integrate with existing stack. | Needs technical architecture diagrams, security posture, and developer resources. | Technology page, Platform overview, documentation downloads. | Validates compatibility, requests a workshop, receives sandbox access. |
| Talent prospect | Potential hire evaluating culture, values, and inclusion programs. | Needs to see careers content, leadership bios, and social impact initiatives. | About, Careers, Inclusion, Thrive pages. | Applies for a role or joins talent community. |

## User flows
### Visionary executive research flow
1. Land on homepage via referral or search.
2. Scroll hero to view differentiators and click into Velocity approach.
3. Scan Velocity pillars, open Insight modal for relevant article, and note proof points.
4. Jump to Solutions overview and filter by business outcome.
5. Open Contact modal and submit a request for executive workshop.

### Functional lead solution discovery
1. Navigate to Industries from global navigation.
2. Select their industry such as Retail.
3. Review problem statements, success metrics, and carousel of case studies.
4. Click CTA to explore recommended solutions like Intelligent Automation.
5. Download solution brief from Insights section or start chat with sales.

### Technical champion validation
1. Enter through Technology or Platform page from organic search.
2. Review architecture diagrams, integrations, and security assurances.
3. Toggle accordions to view stack components and governance model.
4. Follow link to Responsible AI and Compliance pages.
5. Use footer Contact link to request a technical discovery session.

### Talent prospect journey
1. From social share arrives at Careers page.
2. Filters open roles by location and practice.
3. Reads Leadership bios and Inclusion commitments.
4. Views Sustainability or AI for Good initiative to assess mission alignment.
5. Applies through embedded ATS or joins mailing list.

## Success metrics
| Goal | Metric | Target state |
| --- | --- | --- |
| Pipeline impact | Qualified contact requests per month | 25 percent increase vs current baseline |
| Engagement depth | Average time on solution or industry detail pages | Greater than 2 minutes |
| Thought leadership | Insight downloads or modal opens | 30 percent of sessions interact with insights |
| Talent | Completed career applications started onsite | 15 percent lift |
| Trust | Consent opt in rate for functional cookies | Above 70 percent |

## Wireframes (text outlines)
### Homepage wireframe
1. Hero: statement, CTA buttons for Talk to experts and Explore Velocity, background animation.
2. Proof ribbon: marquee of industries and logos.
3. Three value cards: Velocity, Thrive, Solutions.
4. Featured insights grid with modal triggers.
5. Industries slider with cards per sector.
6. Solutions matrix grouped by outcomes.
7. Client stories section with video tile and quote carousel.
8. Footer with mega navigation, consent controls, and contact CTA.

### Industry detail page wireframe
1. Header with sector specific hero statement and metric callout.
2. Tabs for Challenges, Solutions, Proof.
3. Scroll section that pairs problem statements with recommended accelerators.
4. Case study cards with KPIs.
5. CTA band for workshop and download.
6. Related insights list plus newsletter signup.

### Technology or Platform page wireframe
1. Overview hero describing platform architecture.
2. Diagram block using cards for Data, Intelligence, Experience layers.
3. Accordion for integrations and compliance badges.
4. Velocity methodology timeline with icons.
5. CTA area for demo or sandbox access.

## UI guidelines
### Brand foundations
- Color palette: deep charcoal for primary text, electric blue for actions, warm gradient backgrounds, light gray for surfaces.
- Typography: sans serif pairing such as Inter for body and Space Grotesk for display headings. Maintain consistent scale (H1 56px, H2 40px, H3 28px, body 18px) for readability.
- Imagery: geometric patterns with subtle motion plus photography featuring collaborative teams.

### Layout and components
- Use a twelve column grid with generous 80px gutters on desktop, stacking to four columns on mobile.
- Navigation: sticky transparent header that gains background on scroll. Include mega menu for Industries and Solutions with two column layout.
- Cards: include eyebrow label, heading, supporting copy, CTA arrow icon, and optional stat. Maintain 16px internal padding.
- Modals: search modal, insight modal, cookie consent, and contact overlay should have 64px rounded corners on desktop with focus trapping and escape support.
- Buttons: primary filled electric blue, secondary outlined, tertiary text link with arrow icon.

### Motion and interaction
- Scroll progress bar indicates reading depth on long form pages.
- On hover, cards elevate with 8px shadow and subtle scale to 1.02.
- Insight modal loads asynchronously yet should display skeleton shimmer to preserve perceived performance.

### Accessibility
- Minimum color contrast ratio 4.5:1 for text. Provide focus outlines with high contrast ring.
- Ensure keyboard navigation for mega menus, accordions, and sliders.
- Provide alt text for imagery, transcripts for videos, and clear consent messaging for cookies.
