import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
    TruckIcon,
    CpuChipIcon,
    SparklesIcon,
    ShieldCheckIcon,
    CubeTransparentIcon,
    MapIcon,
    ShareIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';

const capabilities = [
    { name: 'Multi-echelon Inventory Optimization', description: 'AI agents that determine the optimal inventory levels for every node in your network, from central warehouses to retail stores.', icon: CubeTransparentIcon },
    { name: 'Routing & Logistics Intelligence', description: 'Dynamically optimize shipping routes, carrier selection, and load consolidation based on real-time costs, constraints, and ETAs.', icon: TruckIcon },
    { name: 'Supplier Risk Reasoning', description: 'Cognitive agents that monitor geopolitical, financial, and climate data to predict and quantify risks with Tier-1 and Tier-N suppliers.', icon: ShieldCheckIcon },
    { name: 'Predictive Demand Forecasting', description: 'Fuse historical sales data with real-time market signals to create hyper-accurate demand forecasts that drive your entire S&OP process.', icon: ChartBarIcon },
    { name: 'Supply Chain Digital Twin', description: 'A living, real-time model of your entire supply chain, providing end-to-end visibility and a platform for simulation.', icon: ShareIcon },
];

const outcomes = [
    { metric: '15-30%', description: 'Reduction in stockouts and safety stock levels', industry: 'Inventory Management' },
    { metric: '5-10%', description: 'Reduction in total logistics and freight costs', industry: 'Logistics' },
    { metric: 'Up to 50%', description: 'Faster response time to supply chain disruptions', industry: 'Resilience' },
];

const industries = [
    { name: 'Supply Chain Planning', description: 'Transforming S&OP from a static, monthly exercise to a continuous, intelligent process.' },
    { name: 'Logistics & Operations', description: 'Building a resilient, cost-effective, and predictive logistics network.' },
    { name: 'Procurement', description: 'Gaining deep visibility into supplier risk and performance.' },
];

const SupplyChainPage: React.FC = () => {
    useSEO({
        title: 'Supply Chain Optimization Solutions',
        description: 'Building resilient, predictive supply chains with an intelligent digital twin that provides the visibility and foresight to navigate uncertainty.',
        keywords: 'supply chain, logistics, digital twin, demand forecasting, supply chain visibility, control tower, inventory optimization'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: SUPPLY CHAIN OPTIMIZATION"
                title="From Forecast Guesswork to Cognitive Orchestration."
                subtitle="We architect a 'digital twin' of your entire supply chain, unifying data from suppliers, carriers, and warehouses. This enables cross-network Cognitive Agents to coordinate supply, demand, and logistics with predictive, autonomous precision."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: Your Supply Chain is Flying Blind"
                    description="In a world of constant disruption, your supply chain is a major source of risk. Demand volatility, inventory imbalances, and slow planning cycles are driven by a single root cause: fragmented data. You cannot see, predict, or act on disruptions when your data is trapped in siloed ERPs, WMSs, and spreadsheets."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Static Forecasts and Siloed Tools Cannot Adapt"
                    description="Traditional supply chain planning is a static, monthly exercise based on historical forecasts. Siloed planning tools for inventory, logistics, and procurement cannot make holistic, optimal decisions. This legacy approach is too slow and rigid to compete in a volatile, real-time world."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="A Digital Twin that Senses, Reasons, and Acts"
                    description="We build your Supply Chain Digital Twin on a Unified Ontology, creating a living, real-time model of your entire network. This becomes the 'single source of truth' that allows Cognitive Agents to sense demand shifts, reason about the impact of disruptions, and autonomously orchestrate a coordinated response across your planning, logistics, and procurement functions."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Supply Chain Optimization System Does"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {capabilities.map((item) => (
                        <Card key={item.name}>
                             <item.icon className="h-8 w-8 text-electric-blue mb-3" />
                             <h3 className="text-lg font-bold text-charcoal">{item.name}</h3>
                             <p className="mt-1 text-sm text-charcoal-light">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                 <SectionHeader
                    eyebrow="Architecture"
                    title="Powered by the Akin Platform"
                    align="center"
                    maxWidth="lg"
                />
                <ArchitectureDiagram />
                <div className="max-w-4xl mx-auto mt-8 text-center text-charcoal-light">
                    <p>This solution leverages the Akin platform to create a cognitive network. The **Unified Ontology** builds the digital twin. The **MLOps Engine** develops the forecasting and optimization models. **Cognitive Agents** orchestrate the network. The **Command Center** provides the 'control tower' for human-in-the-loop governance.</p>
                </div>
            </Section>

            <Section tone="dark">
                <SectionHeader
                    eyebrow="Outcomes"
                    title="Operational Impact That Scales"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.description} className="text-center bg-white/5 border-white/10 text-stone">
                            <p className="text-5xl font-extrabold text-green">{item.metric}</p>
                            <p className="mt-2 font-semibold text-white">{item.description}</p>
                             <p className="mt-1 text-sm text-gray-400">Context: {item.industry}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="light">
                <SectionHeader
                    eyebrow="Applicability"
                    title="Where This Applies"
                    description="A resilient, predictive supply chain is a critical capability for any company that makes, moves, or sells physical goods."
                    align='center'
                    maxWidth='lg'
                />
                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map(industry => (
                        <Card key={industry.name}>
                            <h4 className="font-bold text-charcoal">{industry.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{industry.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Akin"
                    title="Our Differentiation: Architectural DNA"
                    align='center'
                    maxWidth='lg'
                />
                <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <CpuChipIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Digital Twin First</h4>
                        <p className="text-sm text-charcoal-light">We build a true, operational model of your network, not just another dashboard.</p>
                    </div>
                    <div className="p-4">
                        <SparklesIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Predictive & Prescriptive</h4>
                        <p className="text-sm text-charcoal-light">Our AI recommends the optimal decision, moving you from visibility to action.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Resilience & Simulation</h4>
                        <p className="text-sm text-charcoal-light">Our platform allows you to stress-test your network to prepare for the next disruption.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Cognitive Orchestration."
                    description="Let’s design the intelligent digital twin that will power a new era of resilience and efficiency for your supply chain."
                    align="center"
                    maxWidth="md"
                />
                <div className="mt-8">
                    <Button to="/contact">Talk to an Architect</Button>
                </div>
            </Section>
        </div>
    );
};

export default SupplyChainPage;
