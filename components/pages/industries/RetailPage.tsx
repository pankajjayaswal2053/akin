import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  ShoppingCartIcon,
  UsersIcon,
  TruckIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: ChartBarIcon,
        title: 'Forecast Inaccuracy',
        description: 'Relying on historical averages leads to stockouts of bestsellers and excess inventory of slow-moving products, hurting both revenue and margins.'
    },
    {
        icon: UsersIcon,
        title: 'Disconnected Customer Journeys',
        description: 'Siloed data from online, mobile, and in-store touchpoints creates a fragmented view of the customer, preventing true personalization.'
    },
    {
        icon: ShoppingCartIcon,
        title: 'Inefficient Fulfillment',
        description: 'Rigid fulfillment logic cannot adapt to inventory levels, shipping costs, and customer locations in real-time, leading to high costs and slow delivery.'
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Margin Pressure',
        description: 'Manual pricing strategies and promotions are slow to react to market changes, leaving significant revenue and margin opportunities on the table.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const retailOntology = [
    {
        icon: UsersIcon,
        name: 'Customer 360 Ontology',
        description: 'A unified, real-time profile of every customer, connecting browsing history, purchase data, and loyalty information.'
    },
    {
        icon: ShoppingCartIcon,
        name: 'Product & Catalog Ontology',
        description: 'A rich, semantic model of your product catalog, including attributes, taxonomies, and relationships between items.'
    },
    {
        icon: CircleStackIcon,
        name: 'Inventory & Fulfillment Ontology',
        description: 'A single source of truth for inventory levels across all stores and warehouses, connected to fulfillment and logistics data.'
    },
    {
        icon: TruckIcon,
        name: 'Supply Chain Ontology',
        description: 'A model of your supply chain, linking products to suppliers, carriers, and real-time shipment data for end-to-end visibility.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'AI-Powered Demand Forecasting',
        whatItDoes: 'Integrates sales data with external signals (market trends, weather) to predict demand with unparalleled accuracy.',
        valueItDelivers: 'Minimizes stockouts and overstock situations, optimizing working capital and maximizing revenue.'
    },
    {
        name: 'Inventory Optimization Agents',
        whatItDoes: 'Cognitive agents that reason over the ontology to automate replenishment, rebalancing, and allocation across your network.',
        valueItDelivers: 'Ensures the right product is in the right place at the right time, reducing carrying costs and lost sales.'
    },
    {
        name: 'Dynamic Pricing Intelligence',
        whatItDoes: 'AI models that analyze market demand, competitor pricing, and inventory levels to recommend optimal pricing strategies.',
        valueItDelivers: 'Maximizes margins and revenue without manual intervention, adapting instantly to market dynamics.'
    },
    {
        name: 'Customer 360 & Personalization',
        whatItDoes: 'Leverages the Customer 360 Ontology to power hyper-personalized marketing, recommendations, and loyalty programs.',
        valueItDelivers: 'Increases customer lifetime value, conversion rates, and brand loyalty through relevant experiences.'
    },
    {
        name: 'Intelligent Order Management',
        whatItDoes: 'Automates order routing to the optimal fulfillment location based on inventory, shipping costs, and delivery speed.',
        valueItDelivers: 'Lowers fulfillment costs and improves the customer experience with faster, more reliable delivery.'
    },
    {
        name: 'Supply Chain Visibility',
        whatItDoes: 'Provides an end-to-end view of your supply chain, tracking inventory from supplier to warehouse to store shelf.',
        valueItDelivers: 'Builds resilience by enabling proactive responses to supply chain disruptions.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Global Apparel Brand',
        headline: 'Inventory Guesswork → Predictive Demand Sensing',
        description: 'Deployed AI agents to analyze POS data and social trends, unifying inventory and demand signals.',
        outcome: '20% reduction in stockouts'
    },
    {
        eyebrow: 'Major Supermarket Chain',
        headline: 'Manual Promotions → Dynamic Pricing Engine',
        description: 'Integrated a dynamic pricing model that responds to competitor pricing and spoilage risk in real time.',
        outcome: '5% margin improvement'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><UsersIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">CRM / POS</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">E-commerce / ERP</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Operations</p></div>
    </div>
);


const RetailPage: React.FC = () => {
    useSEO({
        title: 'Cognitive Retail & Consumer Products Solutions',
        description: 'Discover how Akin\'s Cognitive Agent Platform unifies customer data, inventory, and supply chain information to create predictive, personalized retail experiences.',
        keywords: 'cognitive retail, retail AI, demand forecasting, inventory optimization, customer 360, CPG',
        ogImage: '/images/industries/retail-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="The Cognitive Retail Enterprise"
                subtitle="Where customer demand, supply, and inventory operate as one intelligent system."
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
                        title="Data Fragmentation Defines the Industry."
                        description="The promise of omnichannel retail is a seamless customer experience. The reality is a tangle of disconnected systems. Data from e-commerce platforms, point-of-sale systems, supply chain software, and marketing tools are trapped in silos. This fragmentation makes it impossible to anticipate customer needs, prevent stockouts, and operate efficiently in a hyper-competitive market."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of a Modern Retailer"
                    description="We solve the most critical pain points that prevent retail and CPG companies from achieving profitable growth."
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
                            title="A Single Cognitive Core for Every Retail Function."
                            description="We don't build separate tools for marketing, supply chain, and merchandising. We architect a single, intelligent system that acts as the central nervous system for your entire retail operation. By building your Unified Ontology first, we create the foundational 'digital twin' that enables real-time decisioning across every part of your business."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Retail Operations Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Retail Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire retail ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {retailOntology.map((pillar) => (
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
                    title="Platform Capabilities for Retail"
                    description="Discover how the Akin Platform transforms every facet of your retail operation, from demand planning to customer checkout."
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
                    description="Our platforms deliver quantifiable improvements to inventory efficiency, customer loyalty, and profitability."
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
                    description="Enterprise leaders always ask: “Can you integrate with my legacy systems?” Our answer is yes. Our platform is designed to unify your existing stack, not replace it."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Retail Enterprise."
                    description="We work with leaders who want to unify their operations, data, and AI. Let's build the blueprint for your cognitive retail operation."
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

export default RetailPage;
