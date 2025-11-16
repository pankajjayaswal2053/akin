import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  LightBulbIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: BoltIcon,
        title: 'Grid Instability',
        description: 'Volatile renewable energy sources and unpredictable demand make it difficult to balance the grid, increasing the risk of costly outages.'
    },
    {
        icon: WrenchScrewdriverIcon,
        title: 'Aging Infrastructure',
        description: 'Critical assets like transformers and turbines fail unexpectedly, causing service disruptions and significant repair expenses.'
    },
    {
        icon: ChartBarIcon,
        title: 'Market Volatility',
        description: '24/7 energy markets with complex variables make it nearly impossible for human traders to consistently identify and act on optimal opportunities.'
    },
    {
        icon: LightBulbIcon,
        title: 'Inefficient Energy Consumption',
        description: 'Lack of real-time data and predictive analytics prevents optimization of energy usage across industrial sites and commercial buildings.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const energyOntology = [
    {
        icon: BoltIcon,
        name: 'Grid & Network Ontology',
        description: 'A digital twin of the electrical grid, modeling substations, transformers, and the real-time flow of energy.'
    },
    {
        icon: WrenchScrewdriverIcon,
        name: 'Asset & Maintenance Ontology',
        description: 'A complete model of every critical asset, including its operational history, sensor data, and maintenance records.'
    },
    {
        icon: ScaleIcon,
        name: 'Commodities & Market Ontology',
        description: 'A real-time map of market prices, weather data, geopolitical signals, and other variables that impact energy trading.'
    },
    {
        icon: CpuChipIcon,
        name: 'Generation & Supply Ontology',
        description: 'A unified view of all energy sources, from traditional power plants to renewable assets like wind and solar farms.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'AI-Powered Grid Balancing',
        whatItDoes: 'Cognitive agents that forecast demand and renewable generation with high accuracy to automate load balancing.',
        valueItDelivers: 'Increases grid stability, reduces reliance on peaker plants, and maximizes the integration of renewable energy.'
    },
    {
        name: 'Predictive Asset Management',
        whatItDoes: 'Uses sensor data from the Asset Ontology to predict equipment failures before they happen.',
        valueItDelivers: 'Minimizes unplanned downtime, reduces maintenance costs, and extends the life of critical infrastructure.'
    },
    {
        name: 'Algorithmic Energy Trading',
        whatItDoes: 'AI agents that analyze the Market Ontology to identify trading opportunities and execute strategies automatically.',
        valueItDelivers: 'Maximizes profitability by capitalizing on market volatility 24/7, far beyond human capacity.'
    },
    {
        name: 'Renewable Energy Integration',
        whatItDoes: 'Optimizes the dispatch of energy from volatile sources like wind and solar, coordinated with energy storage systems.',
        valueItDelivers: 'Accelerates the transition to clean energy by making renewables a more reliable and profitable part of the grid.'
    },
    {
        name: 'Energy Consumption Optimization',
        whatItDoes: 'Provides real-time insights and automated controls for large industrial and commercial users to reduce energy waste.',
        valueItDelivers: 'Lowers operational costs and reduces the carbon footprint for energy consumers.'
    },
    {
        name: 'Regulatory & Compliance Automation',
        whatItDoes: 'Automates the tracking and reporting of emissions, grid performance, and market compliance data.',
        valueItDelivers: 'Reduces the administrative burden of regulatory reporting and ensures auditable compliance.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'National Utility Provider',
        headline: 'Reactive Grid Management → Predictive Grid Balancing',
        description: 'Deployed an AI-powered digital twin of the grid to forecast demand and renewable output.',
        outcome: '15% improvement in grid forecast accuracy'
    },
    {
        eyebrow: 'Global Energy Trading Firm',
        headline: 'Manual Trading → Algorithmic Market Engine',
        description: 'Built an autonomous trading platform that analyzes real-time market signals to execute profitable strategies.',
        outcome: '+8% profit margin lift'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">SCADA / Market Data</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Weather Feeds</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Grid Operations</p></div>
    </div>
);


const EnergyPage: React.FC = () => {
    useSEO({
        title: 'Energy & Commodities AI Solutions',
        description: 'Powering the digital utility with AI operating systems that enable grid resilience, predictive asset management, and algorithmic energy trading.',
        keywords: 'energy, utilities, commodities, smart grid, predictive maintenance, algorithmic trading, renewable energy',
        ogImage: '/images/industries/energy-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="The Cognitive Utility"
                subtitle="Where grid operations are predictive, assets are self-healing, and market opportunities are captured autonomously."
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
                        description="The energy landscape is undergoing a radical transformation. The rise of renewables, distributed energy resources, and volatile 24/7 markets requires a new level of intelligence. Traditional, siloed SCADA and management systems cannot cope. We build the intelligent operating systems that create a more resilient, efficient, and profitable energy future."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of a Modern Energy Enterprise"
                    description="We solve the most critical challenges facing the energy landscape, from grid stability to market volatility."
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
                            title="A Unified Digital Twin for the Entire Energy Value Chain."
                            description="We don't build isolated tools for grid management or trading. We architect a single, intelligent system that models your entire operation—from generation assets to market positions. This Unified Ontology provides the context for AI agents to optimize your business holistically."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Energy Operations Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Energy Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire energy ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {energyOntology.map((pillar) => (
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
                    title="Platform Capabilities for Energy & Commodities"
                    description="Discover how the Akin Platform transforms every part of your operation, from asset management to energy trading."
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
                    description="Our platforms deliver measurable improvements to efficiency, reliability, and profitability."
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
                    description="Our platform is designed to unify your existing SCADA, ETRM, and asset management systems, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Energy Future."
                    description="We work with leaders who want to build resilient, predictive, and autonomous energy operations. Let's build your blueprint."
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

export default EnergyPage;
