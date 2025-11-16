# Comprehensive Image Asset Guide

This document is the single source of truth for all required image assets for the Akin Technology website. Please ensure all images are high-quality, optimized for the web, and match the provided descriptions to maintain a consistent, modern, and trustworthy aesthetic.

---

## 🎨 Color Palette & Aesthetic Guidelines

To ensure brand consistency, all images should align with our core color palette and visual aesthetic.

**Primary Palette:**
-   **Electric Blue (`#00D7FF`):** The primary accent color. Use for highlights, data visualizations, UI elements, and to draw attention.
-   **Charcoal (`#323232`):** The primary dark color. Use for backgrounds, text, and creating contrast.
-   **Stone (`#F0F0F0`) & White (`#FFFFFF`):** Primary light colors for backgrounds and clean spaces.

**Secondary Accents:**
-   **Yellow (`#FFE100`)**
-   **Green (`#00DC82`)**

**Aesthetic:**
-   **Grounded & Professional:** The goal is to look advanced and intelligent, not like science fiction. Visuals should be clean, clear, and communicate a specific concept (e.g., data unification, security, process optimization).
-   **Data-Informed:** Use abstract data visualizations, clean UI mockups, and architectural diagrams that look like real, functional systems.
-   **Authentic:** Avoid generic stock photos. Focus on the technology, the process, or authentic collaborative environments. The `life-at-akin` photos are a good example.
-   **Integrated Tones:** Images should feel native to the site. Use color grading or overlays to subtly incorporate the charcoal and blue tones, especially in photographic assets.

---

> ✅ **PERFORMANCE BEST PRACTICES:**
> 1.  **Provide WebP Versions:** For every `.jpg` or `.png` image listed, you **MUST** also provide an optimized `.webp` version with the same filename (e.g., `platform-ui.jpg` and `platform-ui.webp`). The website automatically serves the smaller WebP file to compatible browsers. This is a critical performance requirement.
> 2.  **Compress Images:** Use tools like TinyPNG/TinyJPG or Squoosh to compress all images before adding them to the project.
> 3.  **Correct Paths:** All image assets must be located in the `/public` directory as specified below. When referencing an image, use an absolute path like `<img src="/images/logo.png" />`.

---

## 1. Root Level & Logo Files (`/public/`)

-   `favicon.svg`: An SVG version of the Akin "A" mark for modern browsers.
-   `favicon.ico`: A standard `.ico` file (16x16, 32x32) for legacy browsers.
-   `apple-touch-icon.png`: A 180x180px PNG icon for iOS home screens.
-   `/images/logo.png`: The official Akin Technology logo with **charcoal (#323232) text**, for use on light backgrounds. Transparent PNG.
-   `/images/logo-dark.png`: The official Akin Technology logo with **stone (#F0F0F0) or white text**, for use on dark backgrounds. Transparent PNG.

---

## 2. General & Page-Specific Images (`/public/images/`)

-   `platform-ui.jpg` / `.webp`: A clean, professional mockup of the Akin Platform UI, perhaps showing a dashboard with a network graph or key performance indicators. It should look like a real, functional enterprise tool.
-   `ontology-concept.jpg` / `.webp`: A clear architectural diagram illustrating the Unified Ontology. It should show a central hub labeled "Ontology" connecting to various data source icons (e.g., ERP, CRM, SCADA), visually explaining data unification.
-   `future-vision.jpg` / `.webp`: A professional and abstract image representing an autonomous enterprise. This could be a visualization of an automated process flow or a "digital twin" of a business operation, looking efficient and intelligent.
-   `cta-impact.jpg` / `.webp`: An image conveying business impact and growth. This could be an upward-trending chart or a visualization of operational efficiency, grounded in a professional business context.
-   `proof-in-action-bg.jpg` / `.webp`: A background image for the "Proof in Action" section. A subtly blurred image of a high-tech control room or an engineering environment would work well. It should be dark enough for white text to be legible.
-   `suren.jpg` / `.webp`: A professional headshot of the founder, Suren Amarasekera.
-   `gen-ai-solution.jpg` / `.webp`: A diagram showing a Generative AI model (represented by a brain or chip icon) securely interacting with a central data ontology, visually explaining the concept of "ontology-grounded AI."
-   `world-map-offices.jpg` / `.webp`: A stylized world map graphic. The countries where Akin has offices should be highlighted in `electric-blue`. This provides a clear visual for the "Our Global Presence" section.

---

## 3. Hero Section Backgrounds (`/public/images/hero/`)

These images are used as backgrounds for the main hero sections and should be high-quality, atmospheric, and suitable for text overlay.

-   `careers.jpg` / `.webp`: An authentic, collaborative modern office environment.
-   `responsible-ai.jpg` / `.webp`: An abstract image representing trust and security, perhaps a digital shield or a transparent, explainable data process.
-   `ai-for-good.jpg` / `.webp`: An inspiring image that represents positive global impact, such as a data visualization of environmental or social improvement.
-   `values.jpg` / `.webp`: An image of a well-architected structure or a team collaborating on a blueprint, representing our core engineering principles.
-   `sustainability.jpg` / `.webp`: A clean, modern image blending nature with technology, such as solar panels on a futuristic building or a digital visualization of a green supply chain.
-   `inclusion.jpg` / `.webp`: An abstract image representing diverse elements coming together to form a cohesive whole.
-   `partners.jpg` / `.webp`: A visual representation of a network or ecosystem, showing interconnected nodes.

---

## 4. Partner Logos (`/public/images/partners/`)

Use high-resolution, transparent PNGs for all partner logos.

-   `aws.png`, `gcp.png`, `azure.png`
-   `databricks.png`, `snowflake.png`, `nvidia.png`, `mongodb.png`
-   `mit.png`

---

## 5. Icon Assets (`/public/images/icons/`)

PNG icons for the six "Thrive" pillars.

-   `technology.png`, `humanity.png`, `results.png`, `innovation.png`, `valiant.png`, `exceptional.png`

---

## 6. Life at Akin (`/public/images/life/`)

Authentic photos showcasing the company culture and team collaboration.

-   `life-1.jpg`, `life-2.jpg`, `life-3.jpg`, `life-4.jpg`

---

## 7. Client Stories (`/public/images/client-stories/`)

Each client story requires a corresponding image that visually represents the successful outcome.

-   `story-1.jpg` / `.webp`: **(Logistics)** A UI mockup of a logistics "control tower" dashboard. In the foreground, a chart clearly shows a downward trend labeled "Logistics Costs," with a highlighted "-15%" metric. In the background, a map displays optimized shipping routes.
-   `story-2.jpg` / `.webp`: **(Manufacturing)** An image of a modern, clean automotive assembly line. An augmented reality-style overlay is focused on a specific component, displaying a "98% Prediction Accuracy" metric with a green checkmark, conveying precision and quality.
-   `story-3.jpg` / `.webp`: **(Manufacturing)** An engineer on a factory floor looking at a tablet. The tablet screen shows a "digital twin" of a large piece of machinery with a specific part highlighted in red, along with a "Failure Risk: High" alert and a "-32% Downtime" KPI.
-   `story-4.jpg` / `.webp`: **(Retail/Logistics)** A retail analytics dashboard focused on demand forecasting. It should show two graphs: one labeled "Previous Model" with a spiky, inaccurate line, and another labeled "Akin AI Model" with a line that closely tracks actual sales data, highlighted with a "+20% Accuracy" badge.
-   `story-5.jpg` / `.webp`: **(Finance)** A UI mockup of a financial compliance dashboard. It should visualize an automated audit trail, showing a process flow that is completed in half the time of a "manual process" flow, with a clear "50% Faster Audit" metric displayed.

---

## 8. Industry Pages (`/public/images/industries/`)

Each industry page requires two primary images: a `[name]-main.jpg` and a `[name]-solutions.jpg`. A corresponding `.webp` version for each is also required.

-   **Manufacturing**
    -   `manufacturing-main.jpg`: A clean, modern factory floor with robotic arms in motion, suggesting efficiency and advanced automation.
    -   `manufacturing-solutions.jpg`: An architectural diagram of a "digital twin" of a factory, showing data streams from machinery (SCADA, MES) feeding into a central AI core that outputs predictive maintenance alerts.

-   **Retail & Consumer Products**
    -   `retail-main.jpg`: A modern, stylish retail store interior. It could show a customer using a self-checkout kiosk or interacting with a personalized digital display.
    -   `retail-solutions.jpg`: A UI mockup of an intelligent commerce platform, showing a unified customer profile on one side and AI-powered product recommendations on the other.

-   **Transportation & Mobility**
    -   `transportation-main.jpg`: A dynamic shot of a logistics hub (e.g., port or distribution center) with trucks, ships, or planes in motion, conveying scale and activity.
    -   `transportation-solutions.jpg`: A digital "control tower" interface showing a map with an optimized logistics network, connecting vehicles, warehouses, and ports with real-time data points.

-   **Energy & Commodities**
    -   `energy-main.jpg`: A modern energy grid visualization, showing power flowing from diverse sources (wind turbines, solar panels) to a city.
    -   `energy-solutions.jpg`: An abstract visualization of an intelligent energy platform, showing market data graphs, asset health indicators, and grid load forecasts on a single dashboard.

-   **Financial Services**
    -   `finance-main.jpg`: A secure, abstract digital vault or a visualization of high-speed, secure data transactions, conveying trust and professionalism.
    -   `finance-solutions.jpg`: A UI mockup of a real-time fraud detection dashboard, showing transaction anomalies being flagged on a world map.

-   **Health & Life Sciences**
    -   `health-main.jpg`: A clean, high-tech laboratory setting with a researcher examining a data visualization of a molecule or DNA strand on a large screen.
    -   `health-solutions.jpg`: An abstract visualization of a clinical data platform, showing data from EHRs, wearables, and clinical trials being unified to create a holistic patient view.

-   **Telecommunications**
    -   `telecom-main.jpg`: A futuristic visualization of a 5G network covering a city, with abstract lines representing data flow between devices and cell towers.
    -   `telecom-solutions.jpg`: A UI mockup of a "cognitive network operations" platform, showing a map of network health, predictive alerts for potential outages, and automated resource allocation.

-   **Media**
    -   `media-main.jpg`: A person streaming content on a futuristic transparent screen or a multi-device view showing a seamless media experience.
    -   `media-solutions.jpg`: A visualization of a media content platform, showing a unified audience profile on one side and an AI-powered content recommendation engine on the other.

-   **Travel & Hospitality**
    -   `travel-main.jpg`: A modern, luxury hotel lobby with a guest using a digital check-in kiosk or their phone to access their room.
    -   `travel-solutions.jpg`: A UI mockup of a guest data platform, showing a personalized itinerary, real-time offers, and dynamic pricing models.

-   **Public Sector**
    -   `public-sector-main.jpg`: A modern city hall building or a clean, digital interface representing efficient government services.
    -   `public-sector-solutions.jpg`: An abstract visualization of a "smart city" data platform, showing data from traffic, utilities, and public services being integrated for urban planning.

---

## 9. Solution Pages (`/public/images/`)

These images illustrate the core concept for each solution page.

-   `operational-ai-expert.jpg`: An AI specialist analyzing complex data visualizations on a screen, representing expertise and insight.
-   `solution-engineering.jpg`: Engineers collaborating around a whiteboard with architectural diagrams, representing the planning and building process.
-   `solution-cloud.jpg`: An abstract visualization of a secure multi-cloud architecture.
-   `solution-cloud-ontology.jpg`: A diagram showing how a data platform powers a central "brain" or ontology.
-   `solution-automation-ontology.jpg`: A diagram showing an AI agent accessing the Unified Ontology to automate a business process.
-   `solution-data-ontology.jpg`: A visualization of data pipelines from various sources feeding into an intelligent, unified data core.
-   `solution-security-ontology.jpg`: An abstract image of a digital shield protecting a central data ontology, conveying security and governance.
-   `solution-esg-ontology.jpg`: A "digital twin" of a supply chain with icons and data points related to ESG metrics (e.g., carbon footprint, ethical sourcing).
-   `solution-experience.jpg`: A person seamlessly interacting with a service across multiple devices (phone, tablet, desktop).
-   `solution-commerce.jpg`: A visualization of an omnichannel commerce ecosystem, connecting online, mobile, and physical stores with inventory and customer data.
-   `solution-supply-chain.jpg`: A digital representation of a global supply chain map, showing real-time tracking and predictive alerts.

---

## 10. Insight Modals (`/public/images/insights/`)

Images for modal pop-ups. Each should visually represent the core topic of the insight. The primary file must be a `.jpg`, and a corresponding `.webp` version **must** also be provided for performance.

### Home Page Modals
-   `manufacturing.jpg`: A clean, modern factory floor with robotic arms, suggesting precision and automation. A subtle data overlay can hint at the "digital twin" concept.
-   `logistics.jpg`: A digital map showing interconnected logistics routes, clearly communicating the concept of a global, connected supply chain.
-   `finance.jpg`: An abstract image representing secure digital transactions, conveying professionalism and trust.
-   `energy.jpg`: A modern energy grid visualization, showing power flowing from diverse sources (wind, solar) to a city, with data points on key infrastructure.
-   `predictive-maintenance.jpg`: A close-up of industrial machinery with a UI overlay highlighting a component and displaying sensor data (e.g., temperature graph) with a predictive alert.
-   `supply-chain.jpg`: A logistics command center view with a large map showing optimized routes and charts displaying accurate demand forecasts.
-   `digital-engineering.jpg`: An architectural diagram illustrating a Unified Ontology, showing a central hub connecting to various data source icons (ERP, Data Lake).
-   `autonomous-operations.jpg`: A robotic arm handling an object, with a transparent UI in front displaying a workflow with automated decision points, overseen by a human operator.
-   `retail-consumer-products.jpg`: A modern retail environment with a customer using a self-checkout kiosk or interacting with a personalized digital display.
-   `health-life-sciences.jpg`: A clean, high-tech lab setting with a researcher examining a data visualization of a molecule or DNA strand.
-   `telecommunications.jpg`: An abstract visualization of a 5G network covering a city, with lines representing data flow between devices.
-   `public-sector.jpg`: A digital interface for citizen services or a data visualization of a smart city's operations, conveying efficiency and organization.
-   `data-analytics.jpg`: An abstract image of raw data streams flowing into a central point and emerging as clear charts and graphs, representing clarity from complexity.
-   `cybersecurity.jpg`: A digital shield protecting a core data structure, representing security and threat detection.
-   `digital-commerce.jpg`: A visualization of a seamless omnichannel shopping journey, with data points connecting a mobile device, a website, and an in-store pickup.
-   `cloud-infrastructure.jpg`: An abstract representation of a multi-cloud environment, showing different cloud provider icons connected in a resilient network.

### Insights Hub Specific Images
-   `thrive-index.jpg`: A professional and clean graphic representing a balanced scorecard or a compass. It should visually incorporate icons or labels for the six pillars (Technology, Humanity, Results, etc.) to convey a holistic business assessment.
-   `llm-fail.jpg`: A conceptual diagram. On one side, show a "black box" LLM with a red question mark, leading to a "hallucinated" (incorrect) output. On the other side, show a transparent LLM connected to a Unified Ontology (like a database icon), leading to a correct, verified output with a green checkmark.
-   `data-lake.jpg`: A visual metaphor. The image could show a transformation from a murky, chaotic "data swamp" on the left into a clean, structured, and organized "data lakehouse" or ontology on the right, representing clarity from chaos.
-   `operational-genai.jpg`: A process diagram showing a Generative AI agent (represented by a brain/chip icon) receiving an input (e.g., "Alert: Supply shortage"), querying an ontology, and then performing an action (e.g., automatically creating a new purchase order in an ERP system UI).
-   `supply-chain-2025.jpg`: An infographic-style image featuring a key statistic from the report in large, bold text (e.g., "72% AI Adoption"). The background could be a stylized visualization of a supply chain network.
-   `digital-utility.jpg`: A sophisticated visualization of a "smart grid," showing data flowing from renewable sources (wind turbines, solar panels) and traditional power plants into a central control system that intelligently distributes energy to a city.
-   `ai-finance-viewpoint.jpg`: An abstract, professional image representing secure, high-speed digital finance. This could be a visualization of secure data packets moving through a network or an AI analyzing complex market data graphs.
-   `roi-ontology.jpg`: A simple, clear business diagram. On the left, show inputs like "Siloed Data" and "Manual Processes" leading to high costs. On the right, show how a "Unified Ontology" leads to outputs like "Reduced Costs," "Faster Decisions," and "Lower Risk," clearly communicating a positive ROI.