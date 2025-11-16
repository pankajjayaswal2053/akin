import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  ShieldCheckIcon,
  ScaleIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  BanknotesIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: ShieldCheckIcon,
        title: 'Sophisticated Fraud',
        description: 'Complex, multi-vector fraud attempts are increasingly difficult to detect with traditional rule-based systems, leading to significant financial losses.'
    },
    {
        icon: ScaleIcon,
        title: 'Regulatory Burden',
        description: 'Manual compliance monitoring (AML, KYC) is costly, error-prone, and struggles to keep pace with the constant evolution of global regulations.'
    },
    {
        icon: ChartBarIcon,
        title: 'Market Volatility',
        description: 'Static trading and risk models are too slow to adapt to real-time market volatility, leading to missed opportunities and increased exposure.'
    },
    {
        icon: UserGroupIcon,
        title: 'Disconnected Customer Data',
        description: 'Customer data is siloed across banking, investment, and insurance products, preventing a unified view for personalized service and risk management.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const financeOntology = [
    {
        icon: BanknotesIcon,
        name: 'Transaction & Payments Ontology',
        description: 'A real-time graph of all transactions, connecting counterparties, payment rails, and instruments to detect anomalies.'
    },
    {
        icon: UserGroupIcon,
        name: 'Customer & Counterparty Ontology',
        description: 'A unified "Know Your Customer" (KYC) model, linking individuals, entities, and their relationships across all business lines.'
    },
    {
        icon: ChartBarIcon,
        name: 'Market & Risk Ontology',
        description: 'A live model of market data, risk factors, and financial instruments, providing context for trading and portfolio management.'
    },
    {
        icon: ScaleIcon,
        name: 'Regulatory & Compliance Ontology',
        description: 'A knowledge graph of financial regulations, mapped to your internal policies, controls, and transactional data.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'Real-Time Fraud Detection',
        whatItDoes: 'AI agents that analyze the Transaction Ontology in milliseconds to identify and block sophisticated fraud patterns.',
        valueItDelivers: 'Dramatically reduces fraud losses, lowers false positives, and protects customer accounts without impacting user experience.'
    },
    {
        name: 'Automated Compliance Monitoring',
        whatItDoes: 'Cognitive agents that continuously monitor transactions against the Regulatory Ontology for AML and sanctions violations.',
        valueItDelivers: 'Reduces manual compliance overhead by over 60% and provides a fully auditable trail for regulators.'
    },
    {
        name: 'Dynamic Risk Modeling',
        whatItDoes: 'Bespoke AI models for more accurate and adaptive credit, market, and operational risk assessment.',
        valueItDelivers: 'Improves lending decisions, optimizes capital allocation, and provides an early warning system for emerging risks.'
    },
    {
        name: 'Algorithmic Trading & Asset Management',
        whatItDoes: 'AI-driven models that identify complex market patterns, execute high-frequency strategies, and optimize portfolios.',
        valueItDelivers: 'Increases alpha and enhances returns by capitalizing on market opportunities faster than human traders.'
    },
    {
        name: 'Personalized Wealth Management',
        whatItDoes: 'Leverages the Customer Ontology to deliver hyper-personalized financial advice and product recommendations.',
        valueItDelivers: 'Increases client assets under management (AUM) and builds long-term loyalty.'
    },
    {
        name: 'Intelligent Document Processing',
        whatItDoes: 'Automates the extraction and analysis of data from complex financial documents like loan applications and prospectuses.',
        valueItDelivers: 'Accelerates client onboarding and reduces manual processing costs.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Global Investment Bank',
        headline: 'Manual Compliance Checks → Automated AML Monitoring',
        description: 'Deployed cognitive agents to monitor cross-border transactions in real-time against our Regulatory Ontology.',
        outcome: '60% reduction in manual compliance tasks'
    },
    {
        eyebrow: 'Regional Retail Bank',
        headline: 'Rule-Based Fraud Systems → AI-Powered Anomaly Detection',
        description: 'Integrated a real-time anomaly detection model that analyzes customer transaction graphs.',
        outcome: '40% reduction in fraud false-positives'
    },
];

// --- Helper Components for Diagrams ---

const DiagramPlaceholder = ({ title, description }: { title: string, description: string }) => (
  <div className="aspect-square bg-charcoal/5 border-2 border-dashed border-charcoal/20 rounded-lg flex items-center justify-center p-8 h-full">
    <div className="text-center text-charcoal">
      <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-white">
          <ShareIcon className="h-10 w-10 text-electric-blue" />
      </div>
      <p className="mt-4 font-semibold text-sm uppercase tracking-wider">Architectural Diagram</p>
      <p className="mt-1 font-bold">{title}</p>
      <p className="mt-1 text-xs text-charcoal-light">{description}</p>
    </div>
  </div>
);

const IntegrationDiagram = () => (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center text-charcoal">
        <div className="flex flex-wrap justify-center gap-2">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Core Banking / CRM</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Market Data Feeds</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Risk & Trading Ops</p></div>
    </div>
);


const FinancePage: React.FC = () => {
    useSEO({
        title: 'AI in Financial Services',
        description: 'Architecting resilient finance with AI operating systems that provide a decisive advantage in speed, risk management, and regulatory compliance.',
        keywords: 'financial services, fintech, ai in finance, algorithmic trading, fraud detection, compliance automation, risk management',
        ogImage: '/images/industries/finance-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Predictive Finance & Risk"
                subtitle="Where financial risk is modelled, monitored, and managed in real time by intelligent, autonomous systems."
                showGlobe={true}
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>
            
            {/* 2. THE TRANSFORMATION NARRATIVE */}
            <Section tone="soft">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="THE INDUSTRY IS CHANGING"
                        title="Legacy Systems Can't Keep Up with Modern Demand."
                        description="The financial sector operates at the speed of light, yet most institutions are running on fragmented, legacy technology. This architectural debt makes it impossible to manage risk in real-time, combat sophisticated fraud, and meet the demands of modern regulation. Bolting on AI 'features' is a recipe for failure. The future requires rebuilding operations around a unified, intelligent core."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of a Modern Financial Institution"
                    description="We engineer solutions to solve the most critical challenges in finance, from real-time risk assessment to automated regulatory compliance."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreChallenges.map((challenge) => (
                        <Card key={challenge.title} className="text-center h-full">
                            <challenge.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-charcoal">{challenge.title}</h3>
                            <p className="mt-2 text-charcoal-light">{challenge.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 4. WHAT AKIN DOES DIFFERENTLY */}
            <Section tone="soft">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeader
                            eyebrow="THE AKIN APPROACH"
                            title="From Siloed Data to a Unified Risk & Trading Engine."
                            description="We don't sell another compliance tool or analytics dashboard. We build your central nervous system for risk, trading, and compliance. By unifying your transaction, customer, and market data into a single Ontology, we enable cognitive agents to reason and act on your behalf with unparalleled speed and accuracy."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Financial Operations Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Financial Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire financial ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {financeOntology.map((pillar) => (
                        <Card key={pillar.name} className="h-full">
                            <pillar.icon className="h-8 w-8 text-electric-blue mb-3" />
                            <h3 className="text-lg font-bold text-charcoal">{pillar.name}</h3>
                            <p className="mt-1 text-sm text-charcoal-light">{pillar.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 6. PLATFORM CAPABILITIES */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="CAPABILITIES"
                    title="Platform Capabilities for Financial Services"
                    description="Discover how the Akin Platform transforms every facet of your operation, from fraud detection to asset management."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {platformCapabilities.map((cap) => (
                        <Card key={cap.name} className="h-full">
                            <h3 className="text-lg font-bold text-charcoal">{cap.name}</h3>
                            <p className="mt-2 text-sm text-charcoal-light">{cap.whatItDoes}</p>
                            <p className="mt-3 text-sm font-semibold text-charcoal">Value: <span className="font-normal text-charcoal-light">{cap.valueItDelivers}</span></p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 7. PROOF IN ACTION */}
            <Section tone="dark">
                <SectionHeader
                    eyebrow="PROOF IN ACTION"
                    title="From Theory to Tangible Results"
                    description="Our platforms deliver measurable improvements to security, efficiency, and risk management."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                    {proofPoints.map((proof) => (
                        <Card key={proof.headline} className="bg-white/5 border-white/10 text-stone hover:bg-white/10">
                            <span className="text-sm font-bold uppercase text-electric-blue">{proof.eyebrow}</span>
                            <h3 className="text-xl font-bold mt-2 text-white">{proof.headline}</h3>
                            <p className="mt-2 text-gray-300">{proof.description}</p>
                            <p className="mt-4 text-2xl font-bold text-green">{proof.outcome}</p>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <Button to="/client-stories">See More Client Stories</Button>
                </div>
            </Section>
            
            {/* 8. HOW IT INTEGRATES */}
            <Section tone="light">
                 <SectionHeader
                    eyebrow="INTEGRATION"
                    title="Architected for Your Stack"
                    description="Our platform is designed to unify your existing core banking, trading, and compliance systems, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Financial Institution."
                    description="We work with leaders who want to build a resilient, predictive, and secure operational core. Let's build your blueprint."
                    align="center"
                    maxWidth="md"
                />
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Section>
        </div>
    );
};

export default FinancePage;
