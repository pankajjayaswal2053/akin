
export interface SearchIndexItem {
  path: string;
  title: string;
  keywords: string;
  breadcrumb: string;
}

export const searchIndex: SearchIndexItem[] = [
  // Core Pages
  { path: '/', title: 'Home', keywords: 'akin, home, ai, operating system, intelligent', breadcrumb: 'Home' },
  { path: '/platform', title: 'Akin AI Platform', keywords: 'platform, ontology, architecture, mission-critical, mobility', breadcrumb: 'Platform' },
  { path: '/industries', title: 'Industries', keywords: 'industries, retail, transport, energy, finance, health, public sector', breadcrumb: 'Industries' },
  { path: '/solutions', title: 'Solutions', keywords: 'solutions, ai, digital engineering, cloud, experience, commerce, supply chain', breadcrumb: 'Solutions' },
  { path: '/how-we-do-it', title: 'How We Do It: Our Operating System', keywords: 'how we do it, operating system, platform, velocity, thrive', breadcrumb: 'How We Do It' },
  { path: '/velocity-approach', title: 'The VELOCITY™ Operating Model', keywords: 'velocity, operating model, methodology, process, vision architecture, engineering, cognitive intelligence, operationalization, collaboration, intelligence expansion, trust, governance, yield', breadcrumb: 'How We Do It' },
  { path: '/client-stories', title: 'Client Stories', keywords: 'proof, case studies, success, results', breadcrumb: 'Client Stories' },
  { path: '/insights', title: 'Insights Hub', keywords: 'insights, blog, reports, whitepapers, thrive index', breadcrumb: 'Our Thinking' },
  { path: '/about', title: 'About Akin', keywords: 'about, mission, purpose, values, team', breadcrumb: 'Who We Are' },
  { path: '/careers', title: 'Careers', keywords: 'careers, jobs, hiring, roles, engineering', breadcrumb: 'Who We Are' },
  { path: '/contact', title: 'Contact Us', keywords: 'contact, email, phone, address, inquiry', breadcrumb: 'Contact' },
  { path: '/faq', title: 'FAQ', keywords: 'faq, questions, answers, support', breadcrumb: 'How We Do It' },
  { path: '/generative-ai', title: 'Generative AI', keywords: 'generative ai, genai, llm, large language models, agents', breadcrumb: 'Platform' },
  { path: '/inclusion', title: 'Inclusion & Diversity', keywords: 'inclusion, diversity, culture, deib', breadcrumb: 'Who We Are' },
  { path: '/sustainability', title: 'Sustainability', keywords: 'sustainability, esg, environment, impact', breadcrumb: 'Who We Are' },
  { path: '/ai-for-good', title: 'AI for Good', keywords: 'ai for good, social impact, non-profit', breadcrumb: 'Who We Are' },
  { path: '/privacy-policy', title: 'Privacy Policy', keywords: 'privacy, data, policy, legal', breadcrumb: 'Legal' },
  { path: '/cookie-policy', title: 'Cookie Policy', keywords: 'cookies, tracking, consent, policy', breadcrumb: 'Legal' },
  { path: '/responsible-ai', title: 'Responsible AI & Trust', keywords: 'responsible ai, ethics, trust, governance, fairness', breadcrumb: 'Who We Are' },
  { path: '/sitemap', title: 'Sitemap', keywords: 'sitemap, navigation, pages, structure', breadcrumb: 'Sitemap' },
  // New Pages
  { path: '/leadership', title: 'Leadership', keywords: 'leadership, team, executives, ceo, cto', breadcrumb: 'Who We Are' },
  { path: '/partners', title: 'Partners', keywords: 'partners, ecosystem, aws, gcp, azure, nvidia', breadcrumb: 'Platform' },
  { path: '/values', title: 'Our Values', keywords: 'values, principles, culture, excellence', breadcrumb: 'Who We Are' },
  { path: '/technology', title: 'Our Technology Philosophy', keywords: 'technology, stack, architecture, principles, cloud, data, mlops', breadcrumb: 'Our Platform' },
  // THRIVE Pages
  { path: '/thrive', title: 'THRIVE Philosophy', keywords: 'thrive, philosophy, principles, architecture, design, governance, technology, humanity, results, innovation, valiant, exceptional', breadcrumb: 'How We Do It > THRIVE' },
  { path: '/thrive/technology', title: 'THRIVE: Technology', keywords: 'thrive, technology, engineered intelligence, resilient foundations, architecture', breadcrumb: 'How We Do It > THRIVE' },
  { path: '/thrive/humanity', title: 'THRIVE: Humanity', keywords: 'thrive, humanity, human-aligned, human-in-the-loop, cognitive systems', breadcrumb: 'How We Do It > THRIVE' },
  { path: '/thrive/results', title: 'THRIVE: Results', keywords: 'thrive, results, value, impact, enterprise, compounding', breadcrumb: 'How We Do It > THRIVE' },
  { path: '/thrive/innovation', title: 'THRIVE: Innovation', keywords: 'thrive, innovation, reinvention, disciplined exploration, continuous', breadcrumb: 'How We Do It > THRIVE' },
  { path: '/thrive/valiant', title: 'THRIVE: Valiant', keywords: 'thrive, valiant, bold, ethical, responsible, leadership, courage', breadcrumb: 'How We Do It > THRIVE' },
  { path: '/thrive/exceptional', title: 'THRIVE: Exceptional', keywords: 'thrive, exceptional, excellence, quality, standard, precision', breadcrumb: 'How We Do It > THRIVE' },
  // VELOCITY™ Pages
  { path: '/velocity/vision', title: 'VELOCITY™: Vision Architecture', keywords: 'velocity, vision, architecture, strategy, blueprint, ontology map', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/engineering', title: 'VELOCITY™: Engineering the Core', keywords: 'velocity, engineering, data plane, integration, mloops', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/logic', title: 'VELOCITY™: Logic & Cognitive Intelligence', keywords: 'velocity, logic, cognitive agents, models, reasoning', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/operationalization', title: 'VELOCITY™: Operationalization at Scale', keywords: 'velocity, operationalization, deployment, sre, governance', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/collaboration', title: 'VELOCITY™: Collaboration & Co-Ownership', keywords: 'velocity, collaboration, ownership, training, playbooks', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/intelligence', title: 'VELOCITY™: Intelligence Expansion', keywords: 'velocity, intelligence, expansion, scaling, cross-domain', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/trust', title: 'VELOCITY™: Trust & Governance', keywords: 'velocity, trust, governance, safety, audit, compliance, explainability', breadcrumb: 'How We Do It > VELOCITY™' },
  { path: '/velocity/yield', title: 'VELOCITY™: Yield & Value Realization', keywords: 'velocity, yield, value, roi, metrics, kpi', breadcrumb: 'How We Do It > VELOCITY™' },
  // Industries
  { path: '/industries/manufacturing', title: 'Manufacturing', keywords: 'manufacturing, factory, production, predictive maintenance, quality control', breadcrumb: 'Industries' },
  { path: '/industries/retail-consumer-products', title: 'Retail & Consumer Products', keywords: 'retail, consumer, products, commerce, forecasting', breadcrumb: 'Industries' },
  { path: '/industries/transportation-mobility', title: 'Transportation & Mobility', keywords: 'transport, mobility, logistics, fleet, route optimization', breadcrumb: 'Industries' },
  { path: '/industries/energy-commodities', title: 'Energy & Commodities', keywords: 'energy, commodities, utility, grid, trading', breadcrumb: 'Industries' },
  { path: '/industries/financial-services', title: 'Financial Services', keywords: 'finance, banking, insurance, risk, fraud', breadcrumb: 'Industries' },
  { path: '/industries/health-life-sciences', title: 'Health & Life Sciences', keywords: 'health, life sciences, pharma, clinical trials', breadcrumb: 'Industries' },
  { path: '/industries/telecommunications', title: 'Telecommunications', keywords: 'telecom, 5g, network, churn, infrastructure', breadcrumb: 'Industries' },
  { path: '/industries/media', title: 'Media', keywords: 'media, content, streaming, audience, monetization', breadcrumb: 'Industries' },
  { path: '/industries/travel-hospitality', title: 'Travel & Hospitality', keywords: 'travel, hospitality, hotel, airline, guest experience, revenue', breadcrumb: 'Industries' },
  { path: '/industries/public-sector', title: 'Public Sector', keywords: 'public sector, government, civic, services', breadcrumb: 'Industries' },
  // Solutions (Rewritten)
  { path: '/solutions/ai-cognitive-intelligence', title: 'AI & Cognitive Intelligence', keywords: 'ai, cognitive intelligence, bespoke models, mlops, generative ai', breadcrumb: 'Solutions' },
  { path: '/solutions/digital-engineering', title: 'Digital Engineering', keywords: 'digital engineering, legacy modernization, cloud-native, microservices, api', breadcrumb: 'Solutions' },
  { path: '/solutions/cloud-infrastructure', title: 'Cloud & Infrastructure Engineering', keywords: 'cloud, infrastructure, multi-cloud, mlops, devsecops, finops', breadcrumb: 'Solutions' },
  { path: '/solutions/predictive-maintenance', title: 'Predictive Maintenance', keywords: 'predictive maintenance, asset management, downtime, industrial ai', breadcrumb: 'Solutions' },
  { path: '/solutions/digital-commerce', title: 'Digital Commerce Intelligence', keywords: 'digital commerce, composable, headless, ecommerce ai, personalization', breadcrumb: 'Solutions' },
  { path: '/solutions/supply-chain', title: 'Supply Chain Optimization', keywords: 'supply chain, logistics, digital twin, demand forecasting, visibility', breadcrumb: 'Solutions' },
  { path: '/solutions/intelligent-automation', title: 'Intelligent Automation', keywords: 'intelligent automation, rpa, process automation, workflow, generative ai agents', breadcrumb: 'Solutions' },
  { path: '/solutions/data-analytics', title: 'Data & Analytics Modernization', keywords: 'data platform, analytics, data lakehouse, governance, business intelligence', breadcrumb: 'Solutions' },
  { path: '/solutions/cybersecurity', title: 'Cybersecurity & AI Trust', keywords: 'cybersecurity, digital trust, ai governance, responsible ai, data security', breadcrumb: 'Solutions' },
  { path: '/solutions/autonomous-operations', title: 'Autonomous Operations', keywords: 'autonomous operations, intelligent automation, cognitive agents, business process automation', breadcrumb: 'Solutions' },
  // Insights
  { path: '/insights/thrive-index', title: 'The Thrive Index', keywords: 'thrive index, report, scoring, maturity', breadcrumb: 'Our Thinking > Insights' },
  { path: '/insights/state-of-ai-supply-chain', title: 'State of AI in Supply Chain', keywords: 'supply chain, report, state of, trends', breadcrumb: 'Our Thinking > Insights' },
  { path: '/insights/digital-utility-transformation', title: 'Digital Utility Transformation', keywords: 'utility, energy, transformation, analysis', breadcrumb: 'Our Thinking > Insights' },
  { path: '/insights/ai-in-financial-services', title: 'AI in Financial Services', keywords: 'finance, viewpoint, trends, architecture', breadcrumb: 'Our Thinking > Insights' },
];