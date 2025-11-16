
import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon,
  EyeIcon,
  ShareIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  CircleStackIcon,
  TruckIcon,
  UsersIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ServerStackIcon,
  // FIX: Imported missing icons.
  CogIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import OptimizedImage from '../../ui/OptimizedImage';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: WrenchScrewdriverIcon,
        title: 'Unplanned Downtime',
        description: 'Unexpected equipment failure halts production, causing costly delays and disrupting the entire supply chain.'
    },
    {
        icon: EyeIcon,
        title: 'Quality Drift',
        description: 'Product defects that are missed by manual inspection lead to waste, recalls, and damage to your brand reputation.'
    },
    {
        icon: ShareIcon,
        title: 'Inventory Blind Spots',
        description: "Production schedules are disconnected from real-time material availability, leading to inefficiencies and stockouts."
    },
    {
        icon: UsersIcon,
        title: 'Operator Overload',
        description: 'Operators are overwhelmed with alerts from dozens of disconnected systems, leading to fatigue and critical missed events.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const manufacturingOntology = [
    {
        icon: CogIcon,
        name: 'Production Line Ontology',
        description: 'A digital twin of your physical assembly line, modeling each station, process, and dependency in real time.'
    },
    {
        icon: CpuChipIcon,
        name: 'Equipment & Asset Ontology',
        description: 'A complete model of every critical piece of machinery, its components, maintenance history, and real-time sensor data.'
    },
    {
        icon: TruckIcon,
        name: 'Material Flow Ontology',
        description: 'A unified view of your inventory, from raw materials to work-in-progress, mapped to suppliers and logistics.'
    },
    {
        icon: CircleStackIcon,
        name: 'Quality Control Ontology',
        description: 'A knowledge graph of all quality parameters, inspection results, and defect data, linked to specific products and production runs.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'Real-Time Telemetry Ingestion',
        whatItDoes: 'Integrates high-frequency data from SCADA, MES, and IoT sensors into the Unified Ontology.',
        valueItDelivers: 'Provides the real-time, granular data needed for accurate digital twins and predictive models.'
    },
    {
        name: 'Predictive Maintenance Agents',
        whatItDoes: 'AI agents that reason over the Asset Ontology to predict equipment failures before they happen.',
        valueItDelivers: 'Reduces unplanned downtime, cuts maintenance costs, and extends asset lifespan.'
    },
    {
        name: 'Digital Twin of Asset Health',
        whatItDoes: 'A living, dynamic model of every machine, providing a real-time health score and root-cause analysis.',
        valueItDelivers: 'Empowers operators with the precise information needed to transition from reactive to predictive maintenance.'
    },
    {
        name: 'Automated Scheduling',
        whatItDoes: 'Cognitive agents that optimize production schedules based on material availability, asset health, and demand.',
        valueItDelivers: 'Increases factory throughput and resilience by dynamically adapting to real-world disruptions.'
    },
    {
        name: 'AI Anomaly Detection for Quality',
        whatItDoes: 'Computer vision and data analysis models that identify micro-defects and process deviations in real time.',
        valueItDelivers: 'Drives near-zero defect rates, reduces waste, and protects brand reputation.'
    },
    {
        name: 'Supply Chain Synchronization',
        whatItDoes: 'Connects the Material Flow Ontology to supplier and logistics data for end-to-end visibility.',
        valueItDelivers: 'Eliminates inventory blind spots and ensures production is always aligned with your supply chain.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Global Automotive OEM',
        headline: 'Unplanned Factory Downtime → Predictive Maintenance',
        description: 'Deployed predictive maintenance agents on a unified "Factory Floor" Ontology.',
        outcome: '28% reduction in equipment downtime'
    },
    {
        eyebrow: 'Aerospace & Defense',
        headline: 'Manual Quality Inspection → AI-Powered Anomaly Detection',
        description: 'Integrated computer vision models to detect micro-fractures in composite materials.',
        outcome: '99.9% accuracy in defect detection'
    },
];

// --- Helper Components for Diagrams ---

const DiagramPlaceholder = ({ title, description }: { title: string, description: string }) => (
  <div className="aspect-square bg-charcoal/5 border-2 border-dashed border-charcoal/20 rounded-lg flex items-center justify-center p-8 h-full">
    <div className="text-center text-charcoal">
      <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-white">
          <CpuChipIcon className="h-10 w-10 text-electric-blue" />
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">SCADA / ERP / MES</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Data Lakes</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Operations</p></div>
    </div>
);


const ManufacturingPage: React.FC = () => {
    useSEO({
        title: 'Intelligent Manufacturing Solutions',
        description: 'Discover how Akin\'s Cognitive Agent Platform creates a digital twin of your factory, enabling predictive maintenance, automated quality control, and a resilient supply chain.',
        keywords: 'intelligent manufacturing, smart factory, industry 4.0, predictive maintenance, digital twin, manufacturing AI',
        ogImage: '/images/industries/manufacturing-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Intelligent Manufacturing"
                subtitle="Where the entire production lifecycle becomes predictable, resilient, and autonomous."
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
                        description="The promise of Industry 4.0 is a fully connected, intelligent factory. However, this vision is stalled by the reality of fragmented data. Information from legacy MES, SCADA, and ERP systems is trapped in silos, preventing a holistic view of operations. This fragmentation makes it impossible to move from reactive firefighting to the predictive, autonomous operations required to compete."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems Require a Systems-Based Solution"
                    description="We solve the most critical pain points that prevent manufacturers from achieving operational excellence."
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
                            title="From Siloed Processes to a Unified Operating System."
                            description="We don't build dashboards or point solutions; we architect a single, intelligent system that acts as the central nervous system for your entire manufacturing operation. By building your Unified Ontology first, we create the foundational 'digital twin' that enables real-time decisioning and true human-in-the-loop control."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Manufacturing Operations Flow"
                        description="Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Manufacturing Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire operation, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {manufacturingOntology.map((pillar) => (
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
                    title="Platform Capabilities for Manufacturing"
                    description="Discover how the Akin Platform transforms every facet of your production lifecycle, from telemetry to quality control."
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
                    description="Our platforms deliver quantifiable improvements to operational efficiency, quality, and resilience."
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
                <div className="mt-12">
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
            {/* FIX: Changed `tone` from "charcoal" to "dark" to match allowed types. */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Factory."
                    description="We work with leaders who want to unify their operations, data, and AI. Let's build the blueprint for your autonomous factory."
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

export default ManufacturingPage;