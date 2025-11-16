


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Hero from '../ui/Hero';
// FIX: Imported missing `BoltIcon` and `CpuChipIcon` icons.
import { CubeTransparentIcon, BeakerIcon, ChartBarIcon, SparklesIcon, BuildingOffice2Icon, LinkIcon, ScaleIcon, CogIcon, BuildingStorefrontIcon, HeartIcon, SignalIcon, CircleStackIcon, ShieldCheckIcon, ShoppingCartIcon, CloudIcon, UserGroupIcon, EyeIcon, WrenchScrewdriverIcon, RocketLaunchIcon, ArrowTrendingUpIcon, BoltIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import TypingAnimation from '../ui/TypingAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import { Content } from '../../App';
import GraphicElement from '../ui/GraphicElement';
import { useSEO } from '../seo/useSEO';
import StructuredData from '../seo/StructuredData';
import OptimizedImage from '../ui/OptimizedImage';
import InsightCard from '../ui/InsightCard';
import { localInsights, Insight } from '../../data/insights';
import { getFunctionsBaseUrl } from '../../firebase';
import Section, { itemVariants } from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';

const methodologyPhases = [
    { name: 'Vision Architecture', letter: 'V', description: 'Define the Operational Intelligence Blueprint.' },
    { name: 'Engineering the Core', letter: 'E', description: 'Build the Unified Ontology and data foundations.' },
    { name: 'Logic & Cognitive Intelligence', letter: 'L', description: 'Develop Cognitive Agents and reasoning systems.' },
    { name: 'Operationalization at Scale', letter: 'O', description: 'Deploy the architecture into the client’s environment.' },
    { name: 'Collaboration & Co-Ownership', letter: 'C', description: 'Embed with client teams to run the cognitive system.' },
    { name: 'Intelligence Expansion', letter: 'I', description: 'Expand into new domains, ontologies, and agents.' },
    { name: 'Trust & Governance', letter: 'T', description: 'Ensure AI safety, auditability, and compliance.' },
    { name: 'Yield & Value Realization', letter: 'Y', description: 'Measure enterprise-wide impact and compounding ROI.' },
];

const solutionsContent: Record<string, Content> = {
    'manufacturing': {
        id: 'manufacturing',
        category: 'Industry Solution',
        title: 'Intelligent Manufacturing: The Akin Platform',
        content: `
            <h3>Overview: From Factory Floor to Front Office</h3>
            <p>Our bespoke Cognitive Agent Platform for manufacturing creates a unified 'digital twin' of your entire production lifecycle. We connect shop floor machinery (SCADA/MES), supply chain data, and quality control processes into a single, intelligent command center that moves your operation from reactive to predictive.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Unplanned Downtime:</strong> How do we predict equipment failure before it halts production?</li>
                <li><strong>Quality Escapes:</strong> How can we detect product defects in real-time, not at the end of the line?</li>
                <li><strong>Siloed Operations:</strong> How do we synchronize our production schedule with real-time material availability and supply chain disruptions?</li>
            </ul>
            <p><a href="/#/industries/manufacturing" class="font-bold">Learn more about our Manufacturing solutions &rarr;</a></p>
        `
    },
    'logistics': {
        id: 'logistics',
        category: 'Industry Solution',
        title: 'Resilient Supply Chain: The Akin Platform',
        content: `
            <h3>Overview: From Volatility to Velocity</h3>
            <p>Our Cognitive Agent Platform unifies data from carriers, warehouses, and suppliers to give you end-to-end visibility and predictive control. We transform your supply chain from a cost center into a resilient, competitive advantage.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Demand Volatility:</strong> How do we create forecasts that are accurate enough to prevent stockouts and reduce excess inventory?</li>
                <li><strong>Network Inefficiency:</strong> How can we dynamically optimize shipping routes and carrier choices in a constantly changing logistics landscape?</li>
            </ul>
            <p><a href="/#/industries/transportation-mobility" class="font-bold">Learn more about our Transportation & Mobility solutions &rarr;</a></p>
        `
    },
    'finance': {
        id: 'finance',
        category: 'Industry Solution',
        title: 'AI-Driven Finance & Risk: The Akin Platform',
        content: `
            <h3>Overview: From Risk to Real-Time Opportunity</h3>
            <p>Navigate market volatility and complex regulatory landscapes with a Cognitive Agent Platform built for the financial sector. We unify transactional data, market feeds, and internal records to create a real-time, holistic view of risk and opportunity.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Sophisticated Fraud:</strong> How can we detect complex, multi-vector fraud attempts in milliseconds?</li>
                <li><strong>Regulatory Burden:</strong> How do we automate compliance monitoring (AML, KYC) to reduce manual overhead and ensure accuracy?</li>
            </ul>
            <p><a href="/#/industries/financial-services" class="font-bold">Learn more about our Financial Services solutions &rarr;</a></p>
        `
    },
    'energy': {
        id: 'energy',
        category: 'Industry Solution',
        title: 'The Digital Utility: The Akin Platform',
        content: `
            <h3>Overview: From Grid to Edge Intelligence</h3>
            <p>The energy grid is becoming more complex with renewables and distributed resources. Our platform creates a 'digital twin' of your grid and infrastructure, enabling predictive control and optimized energy distribution.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Grid Instability:</strong> How do we balance a volatile grid with fluctuating renewable energy sources and unpredictable demand?</li>
                <li><strong>Aging Infrastructure:</strong> How can we predict failures in critical assets like transformers before they cause outages?</li>
            </ul>
             <p><a href="/#/industries/energy-commodities" class="font-bold">Learn more about our Energy & Commodities solutions &rarr;</a></p>
        `
    },
    'retail-consumer-products': {
        id: 'retail-consumer-products',
        category: 'Industry Solution',
        title: 'Intelligent Retail: The Akin Platform',
        content: `
            <h3>Overview: From Shelf to Customer</h3>
            <p>Our platform for retail unifies customer data, inventory, and supply chain information to create a seamless omnichannel experience. We help you move from mass marketing to 1-to-1 personalization and from inventory guesswork to predictive fulfillment.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Inaccurate Demand Forecasting:</strong> How do we prevent stockouts of bestsellers and reduce excess inventory of slow-moving products?</li>
                <li><strong>Disconnected Customer Journey:</strong> How can we provide a consistent, personalized experience for customers shopping online, on mobile, and in-store?</li>
            </ul>
            <p><a href="/#/industries/retail-consumer-products" class="font-bold">Learn more about our Retail solutions &rarr;</a></p>
        `
    },
    'health-life-sciences': {
        id: 'health-life-sciences',
        category: 'Industry Solution',
        title: 'Accelerated Health & Life Sciences: The Akin Platform',
        content: `
            <h3>Overview: From Data to Discovery</h3>
            <p>We build secure, compliant platforms that unify clinical, genomic, and real-world data. Our solutions accelerate drug discovery, optimize clinical trials, and enable the delivery of personalized medicine at scale.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Slow Clinical Trials:</strong> How do we accelerate patient recruitment and data analysis to bring life-saving therapies to market faster?</li>
                <li><strong>Siloed Research Data:</strong> How can we combine disparate datasets to uncover novel insights and identify new therapeutic targets?</li>
            </ul>
            <p><a href="/#/industries/health-life-sciences" class="font-bold">Learn more about our Health & Life Sciences solutions &rarr;</a></p>
        `
    },
    'telecommunications': {
        id: 'telecommunications',
        category: 'Industry Solution',
        title: 'The Cognitive Network: The Akin Platform',
        content: `
            <h3>Overview: From Connectivity to Intelligence</h3>
            <p>In the 5G era, networks are more complex than ever. Our platform creates a 'digital twin' of your network infrastructure, enabling predictive maintenance, automated resource allocation, and a new level of customer experience management.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Network Complexity:</strong> How do we predict congestion and automate network optimization to ensure service quality?</li>
                <li><strong>Customer Churn:</strong> How can we proactively identify at-risk customers and deliver personalized retention offers?</li>
            </ul>
            <p><a href="/#/industries/telecommunications" class="font-bold">Learn more about our Telecommunications solutions &rarr;</a></p>
        `
    },
    'public-sector': {
        id: 'public-sector',
        category: 'Industry Solution',
        title: 'Smarter Government: The Akin Platform',
        content: `
            <h3>Overview: From Legacy Systems to Intelligent Services</h3>
            <p>We help public sector organizations modernize their operations and deliver better citizen services. Our platforms unify data across agencies to improve resource allocation, enhance public safety, and create seamless digital experiences for citizens.</p>
            <h3>Challenges We Solve:</h3>
            <ul>
                <li><strong>Fragmented Citizen Services:</strong> How do we create a single, intuitive portal for citizens to access all government services?</li>
                <li><strong>Reactive Policymaking:</strong> How can we use data to forecast demand for public services and measure the impact of new policies?</li>
            </ul>
            <p><a href="/#/industries/public-sector" class="font-bold">Learn more about our Public Sector solutions &rarr;</a></p>
        `
    },
    'predictive-maintenance': {
        id: 'predictive-maintenance',
        category: 'Challenge Solution',
        title: 'Challenge: Predictive Maintenance',
        content: `
            <h3>From Reactive to Predictive Operations</h3>
            <p>Move from a reactive to a predictive maintenance strategy. Our platform integrates sensor data (vibration, temperature, etc.) from your critical assets into a unified ontology, allowing AI models to detect subtle anomalies that precede failures.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Asset Health Scoring:</strong> Get a real-time, data-driven health score for every critical piece of equipment in your operation.</li>
                <li><strong>Root Cause Analysis:</strong> Use AI to rapidly analyze historical data and identify the root cause, preventing future occurrences.</li>
            </ul>
            <p><a href="/#/solutions/artificial-intelligence" class="font-bold">Explore our AI Solutions &rarr;</a></p>
        `
    },
    'supply-chain': {
        id: 'supply-chain',
        category: 'Challenge Solution',
        title: 'Challenge: Supply Chain Optimization',
        content: `
            <h3>End-to-End Visibility and Control</h3>
            <p>Traditional forecasting methods based on historical sales are no longer sufficient. Our AI-driven approach integrates external signals—market trends, weather, economic indicators—to create hyper-accurate demand forecasts and optimize your entire logistics network.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Hyper-Accurate Demand Forecasting:</strong> Generate forecasts at any level of granularity, from individual SKUs to entire product categories.</li>
                <li><strong>Logistics Network Optimization:</strong> Use AI to identify the most efficient shipping routes and carrier choices in real-time.</li>
            </ul>
            <p><a href="/#/solutions/supply-chain" class="font-bold">Explore our Supply Chain Solutions &rarr;</a></p>
        `
    },
    'digital-engineering': {
        id: 'digital-engineering',
        category: 'Challenge Solution',
        title: 'Challenge: Digital Engineering',
        content: `
            <h3>Architecting Your Digital Core</h3>
            <p>True transformation isn't about adding an 'AI feature'. It's about architecting your entire operational data flow around a cognitive core. We build the foundational Unified Ontology that connects your siloed systems and makes intelligent action possible.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Unified Ontology Development:</strong> Create the 'digital twin' of your business.</li>
                <li><strong>Legacy System Integration:</strong> Integrate with your existing ERPs, data lakes, and SCADA systems without a costly 'rip-and-replace'.</li>
            </ul>
            <p><a href="/#/solutions/digital-engineering" class="font-bold">Explore our Digital Engineering Solutions &rarr;</a></p>
        `
    },
    'autonomous-operations': {
        id: 'autonomous-operations',
        category: 'Challenge Solution',
        title: 'Challenge: Autonomous Operations',
        content: `
            <h3>Beyond Automation to Autonomy</h3>
            <p>Go beyond simple Robotic Process Automation (RPA). Our Intelligent Automation solutions use AI to automate complex, non-routine tasks that require cognitive decision-making, all powered by your Unified Ontology.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Cognitive Document Processing:</strong> Automatically extract, interpret, and process information from unstructured documents.</li>
                <li><strong>Automated Decision-Making:</strong> Build human-in-the-loop workflows where AI recommends the optimal decision.</li>
            </ul>
            <p><a href="/#/solutions/intelligent-automation" class="font-bold">Explore our Intelligent Automation Solutions &rarr;</a></p>
        `
    },
    'data-analytics': {
        id: 'data-analytics',
        category: 'Challenge Solution',
        title: 'Challenge: Data & Analytics',
        content: `
            <h3>From Data Chaos to a Trusted Asset</h3>
            <p>Your data is your most valuable asset, but it's trapped in silos. We build modern data platforms and lakehouses that serve as the single source of truth for your entire enterprise, powering both BI and advanced AI.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Modern Data Platforms:</strong> Build a scalable data lakehouse that serves as the foundation for all analytics.</li>
                <li><strong>Self-Service Analytics & BI:</strong> Empower your teams with the tools to make faster, data-driven decisions.</li>
            </ul>
            <p><a href="/#/solutions/data-analytics" class="font-bold">Explore our Data & Analytics Solutions &rarr;</a></p>
        `
    },
    'cybersecurity': {
        id: 'cybersecurity',
        category: 'Challenge Solution',
        title: 'Challenge: Cybersecurity',
        content: `
            <h3>Security for the AI-Driven Enterprise</h3>
            <p>In a world of unified data and AI agents, security is paramount. We build data-centric security and AI governance frameworks to protect your most valuable assets from modern threats.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>AI-Powered Threat Detection:</strong> Use AI to detect and respond to advanced threats faster than any human team.</li>
                <li><strong>AI Governance & Trust:</strong> Ensure your AI models are fair, explainable, and secure to prevent data leaks and bad decisions.</li>
            </ul>
            <p><a href="/#/solutions/cybersecurity" class="font-bold">Explore our Cybersecurity Solutions &rarr;</a></p>
        `
    },
    'digital-commerce': {
        id: 'digital-commerce',
        category: 'Challenge Solution',
        title: 'Challenge: Digital Commerce',
        content: `
            <h3>Building Intelligent Commerce</h3>
            <p>Modern commerce requires an intelligent, interconnected ecosystem. We build scalable platforms that optimize the entire journey, from supply chain and inventory to personalized checkout.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Headless & Composable Architecture:</strong> Build flexible platforms that allow you to innovate faster.</li>
                <li><strong>Personalized Recommendation Engines:</strong> Increase conversion with bespoke recommendation engines that understand customer intent.</li>
            </ul>
            <p><a href="/#/solutions/digital-commerce" class="font-bold">Explore our Digital Commerce Solutions &rarr;</a></p>
        `
    },
    'cloud-infrastructure': {
        id: 'cloud-infrastructure',
        category: 'Challenge Solution',
        title: 'Challenge: Cloud & Infrastructure',
        content: `
            <h3>The Foundation for Scalable Intelligence</h3>
            <p>Modern AI runs on modern infrastructure. We build the secure, scalable, and resilient cloud foundations that power mission-critical AI operating systems, optimized for cost and performance.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Multi-Cloud & Hybrid Strategy:</strong> Design and execute cloud strategies that avoid vendor lock-in and provide maximum flexibility.</li>
                <li><strong>MLOps & AI Platform Engineering:</strong> Build the specialized, high-performance infrastructure required to train and deploy ML models at scale.</li>
            </ul>
            <p><a href="/#/solutions/cloud-infrastructure" class="font-bold">Explore our Cloud & Infrastructure Solutions &rarr;</a></p>
        `
    },
};

const industries = [
    { name: 'Intelligent Manufacturing', id: 'manufacturing' },
    { name: 'Resilient Supply Chain', id: 'logistics' },
    { name: 'AI-Driven Finance & Risk', id: 'finance' },
    { name: 'The Digital Utility', id: 'energy' },
    { name: 'Retail & Consumer Products', id: 'retail-consumer-products' },
    { name: 'Health & Life Sciences', id: 'health-life-sciences' },
    { name: 'Telecommunications', id: 'telecommunications' },
    { name: 'Public Sector', id: 'public-sector' },
];

const challenges = [
    { name: 'Predictive Maintenance', id: 'predictive-maintenance' },
    { name: 'Supply Chain Optimization', id: 'supply-chain' },
    { name: 'Digital Engineering', id: 'digital-engineering' },
    { name: 'Autonomous Operations', id: 'autonomous-operations' },
    { name: 'Data & Analytics', id: 'data-analytics' },
    { name: 'Cybersecurity', id: 'cybersecurity' },
    { name: 'Digital Commerce', id: 'digital-commerce' },
    { name: 'Cloud & Infrastructure', id: 'cloud-infrastructure' },
];

const industryIcons: { [key: string]: React.ElementType } = {
    manufacturing: WrenchScrewdriverIcon,
    logistics: CubeTransparentIcon,
    finance: ScaleIcon,
    energy: BoltIcon,
    'retail-consumer-products': BuildingStorefrontIcon,
    'health-life-sciences': HeartIcon,
    'telecommunications': SignalIcon,
    'public-sector': BuildingOffice2Icon,
};

const challengeIcons: { [key: string]: React.ElementType } = {
    'predictive-maintenance': WrenchScrewdriverIcon,
    'supply-chain': CubeTransparentIcon,
    'digital-engineering': CogIcon,
    'autonomous-operations': SparklesIcon,
    'data-analytics': CircleStackIcon,
    'cybersecurity': ShieldCheckIcon,
    'digital-commerce': ShoppingCartIcon,
    'cloud-infrastructure': CloudIcon,
};

const platformPillars = [
    { name: "The Unified Ontology", description: "The 'digital twin' of your business. The single, verifiable source of truth for all data, models, and operations.", icon: CpuChipIcon },
    { name: "Production MLOps Engine", description: "The secure, scalable factory for building, testing, and deploying your bespoke AI and cognitive agents reliably.", icon: CogIcon },
    { name: "Cognitive Agents", description: "The autonomous workforce. AI agents that reason over the Ontology to predict, decide, and act on your behalf 24/7.", icon: SparklesIcon },
    { name: "Operations Command Center", description: "The 'human-in-the-loop' interface for governing, monitoring, and collaborating with your entire fleet of AI agents.", icon: ChartBarIcon }
];

const partnerLogos = [
    { name: 'AWS', src: '/images/partners/aws.png' },
    { name: 'Azure', src: '/images/partners/azure.png' },
    { name: 'Google Cloud', src: '/images/partners/gcp.png' },
    { name: 'Databricks', src: '/images/partners/databricks.png' },
    { name: 'Snowflake', src: '/images/partners/snowflake.png' },
];

const universalPainPoints = [
    { title: "The Leadership Problem", icon: BuildingOffice2Icon, subtitle: "AI strategy is stuck in PowerPoint. No clear path to operational ROI.", link: "/solutions" },
    { title: "The Engineer Problem", icon: LinkIcon, subtitle: "Data is siloed and messy. Impossible to build mission-critical systems on a fragile foundation.", link: "/thrive" },
    { title: "The Operator Problem", icon: UserGroupIcon, subtitle: "Alert fatigue is rampant. No single command center for human-in-the-loop governance.", link: "/platform" },
    { title: "The Risk Problem", icon: ScaleIcon, subtitle: "Uncontrolled GenAI creates data leaks and security liabilities in the enterprise.", link: "/responsible-ai" }
];


interface HomePageProps {
  onSolutionClick: (content: Content) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSolutionClick }) => {
    useSEO({
        title: 'Bespoke Cognitive Agent Platforms',
        description: 'Akin Technology designs, builds, and deploys bespoke Cognitive Agent Platforms to unify data, models, and operations, fulfilling the promise of the Autonomous Enterprise.',
        keywords: 'cognitive agent platforms, bespoke AI, operational AI, unified data platform, manufacturing AI, logistics AI',
        ogImage: '/images/og-home.jpg'
    });

    const [activeTab, setActiveTab] = useState<'industry' | 'challenge'>('industry');
    const [sortedInsights, setSortedInsights] = useState<Insight[]>([]);

    useEffect(() => {
        const fetchAndSortInsights = async () => {
            let insightsData: Insight[] = [];
            try {
                const functionsBaseUrl = getFunctionsBaseUrl();
                const response = await fetch(`${functionsBaseUrl}/getInsights?isFeatured=false&orderBy=createdAt&orderDir=desc&limit=12`);
                if (!response.ok) {
                    throw new Error('Failed to fetch insights');
                }
                insightsData = await response.json();
            } catch (err) {
                console.warn("Could not fetch insights, using local fallback data.", err);
                insightsData = localInsights;
            }

            const availableInsights = insightsData.filter(i => !i.isFeatured);

            try {
                const interests: { [key: string]: number } = JSON.parse(localStorage.getItem('userInterests') || '{}');
                const interestKeys = Object.keys(interests);

                if (interestKeys.length > 0) {
                    const sorted = [...availableInsights].sort((a, b) => {
                        const getScore = (insight: Insight) => {
                            let score = 0;
                            const topic = insight.topic.toLowerCase();
                            for (const interest of interestKeys) {
                                if (topic.includes(interest.replace(/-/g, ' '))) {
                                    score += interests[interest];
                                }
                            }
                            return score;
                        };
                        return getScore(b) - getScore(a);
                    });
                    setSortedInsights(sorted.slice(0, 3));
                } else {
                    setSortedInsights(availableInsights.slice(0, 3));
                }
            } catch (sortError) {
                console.error("Error sorting insights, using default.", sortError);
                setSortedInsights(availableInsights.slice(0, 3));
            }
        };

        fetchAndSortInsights();
    }, []);

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Akin Technology',
        'url': 'https://www.akintechnology.com',
        'logo': 'https://www.akintechnology.com/images/logo-dark.png',
        'sameAs': [
            'https://www.linkedin.com/company/akin-technology',
            'https://twitter.com/AkinTechnology'
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "contact@akintechnology.com",
            "url": "https://www.akintechnology.com/#/contact"
        }
    };
    
    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut' as const,
          when: 'beforeChildren',
          staggerChildren: 0.2,
        },
      },
    };

  return (
    <>
      <StructuredData schema={organizationSchema} />
      <div className="space-y-24 md:space-y-32 lg:space-y-40 overflow-x-hidden">
        <Hero
          title={
            <>
              Intelligence, <span className="text-electric-blue">Architected.</span>
              <br />
              <TypingAnimation text="The Cognitive Era is Here." />
            </>
          }
          subtitle={<>We design, build, and deploy the bespoke <span className="text-electric-blue">Cognitive Agent Platform</span> that unifies your data, models, and operations—fulfilling the promise of the <span className="text-electric-blue">Autonomous Enterprise.</span></>}
          showGlobe={true}
        >
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact">Talk to an Architect</Button>
              <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
          </div>
        </Hero>

        {/* Universal Pain Points */}
        <Section tone="soft" align="center">
            <SectionHeader
                eyebrow="The Fragmentation Problem"
                title="The problem is universal. The solution is bespoke."
                description="We address the core frustration points faced by every leader, engineer, and operator—the fragmentation that traps AI potential."
                align="center"
                maxWidth="md"
            />
            <motion.div
                className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={itemVariants}
            >
                {universalPainPoints.map((point) => (
                    <motion.div variants={itemVariants} key={point.title}>
                        <Link to={point.link} className="block group h-full">
                            <Card className="h-full cursor-pointer">
                                <point.icon className="h-10 w-10 text-electric-blue mb-3" />
                                <h3 className="text-xl font-bold mb-1 text-charcoal">{point.title}</h3>
                                <p className="text-gray-500">{point.subtitle}</p>
                                <span className="mt-3 inline-block text-electric-blue font-semibold group-hover:underline transition-colors">Find Your Solution &rarr;</span>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
        
        <div className="relative">
          <GraphicElement type="wave" className="absolute -top-40 left-0 w-full h-auto text-electric-blue/10 z-0 transform -translate-x-1/4" />

          {/* The Solution */}
          <Section tone="light">
              <div className="grid md:grid-cols-5 gap-12 items-center">
                  <div className="md:col-span-2">
                      <SectionHeader
                          eyebrow="Platform"
                          title="The Cognitive Agent Platform: your four pillars of intelligence."
                          description="We don't build features; we architect a foundational environment. Every solution we deliver is built on these four integrated components."
                          maxWidth="md"
                      />
                      <motion.div
                          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
                          variants={itemVariants}
                      >
                          {platformPillars.map(pillar => (
                              <div key={pillar.name} className="flex items-start gap-3">
                                  <pillar.icon className="h-6 w-6 text-electric-blue flex-shrink-0 mt-1" />
                                  <div>
                                      <h4 className="font-bold text-charcoal">{pillar.name}</h4>
                                      <p className="text-sm text-charcoal-light">{pillar.description}</p>
                                  </div>
                              </div>
                          ))}
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <Button to="/platform" className="mt-8">Explore the Architecture</Button>
                      </motion.div>
                  </div>
                  <motion.div className="md:col-span-3 relative" variants={itemVariants}>
                      <GraphicElement type="grid" className="absolute -top-12 -left-12 w-full h-auto text-yellow/80 z-0" />
                      <OptimizedImage
                          src="/images/platform-ui.jpg"
                          alt="Akin Platform UI showing a complex network graph of operational data."
                          width={800}
                          height={500}
                          className="w-full rounded-lg shadow-2xl relative z-10"
                      />
                  </motion.div>
              </div>
          </Section>

          {/* Partner / Integration Section */}
          <motion.section
            className="pb-20 md:pb-32 overflow-hidden relative"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={sectionVariants}
          >
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">Architected for Your Stack</motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-lg text-charcoal-light max-w-3xl mx-auto">Our Cognitive Agent Platform is built to be open and interoperable, integrating seamlessly with your existing data platforms, cloud infrastructure, and legacy systems.</motion.p>
                <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {partnerLogos.map(logo => (
                        <img key={logo.name} src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                    ))}
                </motion.div>
            </div>
          </motion.section>

          {/* Our Solutions Section */}
          <motion.section
            className="max-w-7xl mx-auto px-4 text-center relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
          >
            <GraphicElement type="dots" className="absolute -top-20 -right-40 w-96 h-96 text-electric-blue/10 z-0" />
            <div className="relative z-10">
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">Your industry. Your challenges. Architected Intelligence.</motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-lg text-charcoal-light max-w-3xl mx-auto">Explore how our bespoke Cognitive Agent Platform delivers targeted, operational solutions for your specific context.</motion.p>
                
                <motion.div variants={itemVariants} className="mt-12 flex justify-center border border-gray-200 rounded-full p-1.5 bg-gray-100 max-w-sm mx-auto">
                    <button onClick={() => setActiveTab('industry')} className={`w-1/2 px-4 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none ${activeTab === 'industry' ? 'bg-white text-charcoal shadow' : 'text-charcoal-light hover:text-charcoal'}`}>
                        By Industry
                    </button>
                    <button onClick={() => setActiveTab('challenge')} className={`w-1/2 px-4 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none ${activeTab === 'challenge' ? 'bg-white text-charcoal shadow' : 'text-charcoal-light hover:text-charcoal'}`}>
                        By Challenge
                    </button>
                </motion.div>

                <div className="mt-12 min-h-[340px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {(activeTab === 'industry' ? industries : challenges).map(item => {
                                const Icon = activeTab === 'industry' ? industryIcons[item.id] : challengeIcons[item.id];
                                return (
                                    <motion.div
                                        key={item.id}
                                        whileTap={{ scale: 0.98 }}
                                        className="h-full"
                                    >
                                        <button 
                                            onClick={() => onSolutionClick(solutionsContent[item.id])} 
                                            className="w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-blue rounded-lg"
                                        >
                                            <Card className="h-full flex flex-col items-center justify-center text-center gap-4">
                                                <Icon className="h-10 w-10 text-electric-blue flex-shrink-0" />
                                                <h3 className="text-lg font-semibold text-charcoal">{item.name}</h3>
                                            </Card>
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
          </motion.section>
        </div>

        {/* Architects and Engineers Section */}
        <motion.section
          className="py-20 md:py-32 relative bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
        >
          <GraphicElement type="dots" className="absolute top-0 left-0 w-96 h-96 text-gray-200/50 z-0" />
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-extrabold">Akin: <span className="text-electric-blue">Architects & Engineers.</span> Our Core Difference.</h2>
              <div className="mt-6 text-lg text-charcoal-light max-w-4xl mx-auto space-y-4">
                <p>We saw a fundamental flaw in the market: strategy firms that deliver slide decks but never build, and engineering firms that lack deep strategic vision.</p>
                <p className="font-semibold text-charcoal">Akin bridges that gap. We are a single team that provides the C-suite vision of a consultancy and the hands-on-keyboard capability of a world-class engineering firm.</p>
              </div>
              <Button to="/about" className="mt-10">Learn About Our Mission</Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Methodology Teaser */}
        <Section tone="soft" align="center">
            <SectionHeader
                eyebrow="Methodology"
                title="The VELOCITY™ Operating Model"
                description={<>Our proprietary methodology engine for designing, building, deploying, and governing Cognitive Agent Platforms at enterprise scale.</>}
                align="center"
                maxWidth="lg"
            />
            <motion.div
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
                variants={itemVariants}
            >
                {methodologyPhases.map((phase) => (
                    <motion.div key={phase.name} variants={itemVariants}>
                        <Card className="h-full">
                            <div className="flex items-start gap-4">
                                <span className="text-5xl font-extrabold text-electric-blue/80">{phase.letter}</span>
                                <div>
                                    <h3 className="text-lg font-semibold tracking-wider text-charcoal">{phase.name}</h3>
                                    <p className="mt-1 text-sm text-charcoal-light">{phase.description}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={itemVariants}>
                <Button to="/velocity-approach" className="mt-10">Explore the VELOCITY Model</Button>
            </motion.div>
        </Section>
        
        {/* Proof in Action */}
        <motion.section
          className="py-20 md:py-32 bg-charcoal text-white bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/proof-in-action-bg.jpg')" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
        >
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">See the Platform in Action.</motion.h2>
              <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                  <motion.div variants={itemVariants} className="h-full">
                      <Card className="bg-white/5 border-white/10 h-full text-gray-300 hover:bg-white/10">
                          <span className="text-sm font-bold uppercase text-electric-blue">Manufacturing</span>
                          <h3 className="text-xl font-bold mt-2 text-white">Problem: Unplanned factory downtime.</h3>
                          <p className="mt-2"><strong>Solution:</strong> Deployed predictive maintenance models on a unified 'Factory Floor' Ontology.</p>
                          <p className="mt-2 text-2xl font-bold text-green-400"><strong>Outcome:</strong> 28% reduction in equipment failure.</p>
                      </Card>
                  </motion.div>
                   <motion.div variants={itemVariants} className="h-full">
                      <Card className="bg-white/5 border-white/10 h-full text-gray-300 hover:bg-white/10">
                          <span className="text-sm font-bold uppercase text-electric-blue">Logistics</span>
                          <h3 className="text-xl font-bold mt-2 text-white">Problem: Siloed supply chain data.</h3>
                          <p className="mt-2"><strong>Solution:</strong> Integrated 30+ carrier/warehouse feeds into a single 'Inventory' Ontology.</p>
                          <p className="mt-2 text-2xl font-bold text-green-400"><strong>Outcome:</strong> 15% reduction in stockouts.</p>
                      </Card>
                  </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <Button to="/client-stories" className="mt-12 !bg-electric-blue !text-charcoal hover:!bg-white">View All Client Stories</Button>
              </motion.div>
          </div>
        </motion.section>

        {/* Authority Hub */}
        <motion.section
          className="max-w-7xl mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold">Insights on Real-World AI.</motion.h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left min-h-[250px]">
                {sortedInsights.length > 0 ? (
                    sortedInsights.map(insight => (
                        <motion.div variants={itemVariants} key={insight.id} className="flex">
                            <InsightCard insight={insight} onInsightClick={onSolutionClick} />
                        </motion.div>
                    ))
                ) : (
                    [1,2,3].map(i => (
                        <motion.div variants={itemVariants} key={i} className="flex">
                            <Card className="h-full w-full">
                                <div className="animate-pulse space-y-4">
                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-12 bg-gray-200 rounded w-full"></div>
                                </div>
                            </Card>
                        </motion.div>
                    ))
                )}
            </div>
            <motion.div variants={itemVariants}>
                <Button to="/insights" className="mt-12">Explore All Insights</Button>
            </motion.div>
        </motion.section>
        
        {/* New CTA Section */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-charcoal">
                  Architect Your Competitive Edge.
                </h2>
                <p className="mt-6 text-lg text-charcoal-light">
                  Move beyond incremental improvements. Our bespoke Cognitive Agent Platforms fuse with your team's expertise to unlock transformative growth and operational efficiency. We deliver a unified intelligent core that turns your data into your most powerful asset.
                </p>
                <div className="mt-8">
                  <Button to="/contact">Talk to an Architect</Button>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                    <svg className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] text-electric-blue/20 opacity-50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.75" strokeLinecap="round">
                        <path d="M-10 90 C 10 90, 30 70, 50 50 S 70 10, 90 10" stroke="currentColor"/>
                        <path d="M-10 100 C 10 100, 30 80, 50 60 S 70 20, 90 20" stroke="currentColor"/>
                        <path d="M-10 110 C 10 110, 30 90, 50 70 S 70 30, 90 30" stroke="currentColor"/>
                    </svg>
                    <OptimizedImage 
                      src="/images/cta-impact.jpg" 
                      alt="Akin technology creating business impact with AI" 
                      width={512}
                      height={512}
                      className="relative z-10 w-full"
                    />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
