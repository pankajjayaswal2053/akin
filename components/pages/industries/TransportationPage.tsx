import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  TruckIcon,
  MapIcon,
  WrenchScrewdriverIcon,
  ShareIcon,
  CpuChipIcon,
  SparklesIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  UsersIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: MapIcon,
        title: 'Network Inefficiency',
        description: 'Static routes and siloed data from carriers, warehouses, and TMS platforms prevent dynamic optimization in a constantly changing logistics landscape.'
    },
    {
        icon: WrenchScrewdriverIcon,
        title: 'Unplanned Fleet Downtime',
        description: 'Reactive maintenance models lead to unexpected vehicle downtime, causing cascading delays and significant operational and repair expenses.'
    },
    {
        icon: ShareIcon,
        title: 'Lack of End-to-End Visibility',
        description: 'Fragmented data makes true end-to-end shipment tracking impossible, leading to inefficiencies, poor customer communication, and an inability to proactively manage disruptions.'
    },
    {
        icon: ChartBarIcon,
        title: 'Demand Volatility',
        description: 'Inaccurate forecasting leads to inefficient carrier booking, suboptimal warehouse staffing, and an inability to position assets for future demand.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const transportationOntology = [
    {
        icon: TruckIcon,
        name: 'Fleet & Asset Ontology',
        description: 'A digital twin of every vehicle, trailer, and container, including maintenance history, real-time telematics, and operational status.'
    },
    {
        icon: CubeTransparentIcon,
        name: 'Shipment & Freight Ontology',
        description: 'A unified model of every shipment, connecting order data, bills of lading, customs information, and real-time location data.'
    },
    {
        icon: ShareIcon,
        name: 'Logistics Network Ontology',
        description: 'A complete map of your network, including carriers, routes, warehouses, and distribution centers, modeled with their capabilities and constraints.'
    },
    {
        icon: UsersIcon,
        name: 'Customer & Partner Ontology',
        description: 'A single view of shippers, consignees, and logistics partners, linking them to their shipments, contracts, and communication history.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'Dynamic Route Optimization',
        whatItDoes: 'AI agents that analyze real-time traffic, weather, and fuel costs to dynamically optimize routes for entire fleets.',
        valueItDelivers: 'Reduces fuel consumption, lowers carbon emissions, and improves on-time delivery performance.'
    },
    {
        name: 'Predictive Fleet Maintenance',
        whatItDoes: 'Uses sensor data and the Asset Ontology to create a health score for every vehicle, predicting failures before they happen.',
        valueItDelivers: 'Maximizes asset uptime, reduces costly unplanned repairs, and extends the operational life of your fleet.'
    },
    {
        name: 'End-to-End Shipment Visibility',
        whatItDoes: 'Provides a single "control tower" view for tracking every shipment in real-time, from origin to final destination.',
        valueItDelivers: 'Enables proactive disruption management and enhances customer communication and trust.'
    },
    {
        name: 'AI-Powered Load & Capacity Planning',
        whatItDoes: 'Cognitive agents that forecast demand and analyze network capacity to optimize load consolidation and carrier booking.',
        valueItDelivers: 'Maximizes asset utilization, reduces empty miles, and lowers overall transportation costs.'
    },
    {
        name: 'Automated Freight Auditing',
        whatItDoes: 'Uses AI to automatically audit freight invoices against shipment data and contracts, flagging discrepancies instantly.',
        valueItDelivers: 'Eliminates revenue leakage from billing errors and dramatically reduces manual auditing overhead.'
    },
    {
        name: 'Logistics Simulation',
        whatItDoes: 'Allows you to run "what-if" scenarios on your digital twin to test network resilience against potential disruptions.',
        valueItDelivers: 'Builds a more robust and agile supply chain by identifying vulnerabilities before they become crises.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Global Logistics Provider',
        headline: 'Siloed Shipment Data → Unified Control Tower',
        description: 'Integrated 30+ carrier and warehouse feeds into a single Logistics Ontology for end-to-end visibility.',
        outcome: '15% reduction in stockouts'
    },
    {
        eyebrow: 'National Freight Carrier',
        headline: 'Reactive Maintenance → Predictive Fleet Uptime',
        description: 'Deployed predictive maintenance agents across a fleet of 5,000 trucks, analyzing real-time telematics.',
        outcome: '30% reduction in asset downtime'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">TMS / ERP</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Telematics</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Operations</p></div>
    </div>
);


const TransportationPage: React.FC = () => {
    useSEO({
        title: 'Resilient Supply Chain & Mobility Solutions',
        description: 'Architecting intelligent mobility with AI operating systems that power the next generation of logistics and resilient supply chain networks.',
        keywords: 'transportation, mobility, logistics, supply chain, fleet management, route optimization, predictive maintenance',
        ogImage: '/images/industries/transportation-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Resilient Supply Chain Intelligence"
                subtitle="Where volatility is met with predictive foresight and the entire logistics network operates as a single, cognitive system."
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
                        title="Volatility Outpaces Traditional Operations."
                        description="In a world of constant disruption, static routes and fragmented data are a liability. Supply chains are breaking because they are reactive, not predictive. We transform your supply chain from a series of disconnected steps into a single, intelligent network by creating a 'digital twin' of your entire logistics operation, enabling you to anticipate and act."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of Modern Logistics"
                    description="We solve the most pressing challenges in logistics and mobility, turning your network into a competitive advantage."
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
                            title="From a Disconnected Chain to a Cognitive Network."
                            description="We don't sell another TMS or visibility dashboard. We build your central nervous system. Our Unified Ontology creates the single source of truth that connects your fleet, shipments, and network partners, enabling cognitive agents to optimize your entire operation in real-time."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Logistics Network Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Logistics Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire logistics ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {transportationOntology.map((pillar) => (
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
                    title="Platform Capabilities for Transportation"
                    description="Discover how the Akin Platform transforms every aspect of your logistics operation, from fleet management to final-mile delivery."
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
                    description="Our platforms deliver measurable reductions in cost and significant improvements in operational performance."
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
                    description="Our platform is designed to unify your existing TMS, WMS, and telematics stack, not replace it."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Supply Chain."
                    description="We work with leaders who want to build resilient, predictive, and autonomous logistics networks. Let's build your blueprint."
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

export default TransportationPage;
