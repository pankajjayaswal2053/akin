
import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';
import {
    WrenchScrewdriverIcon,
    ClockIcon,
    ScaleIcon,
    EyeIcon,
    ChartBarIcon,
    ShieldCheckIcon,
    PuzzlePieceIcon,
    BeakerIcon,
    QuestionMarkCircleIcon,
    CpuChipIcon,
    Square3Stack3DIcon
} from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'Real-Time Anomaly Detection', description: 'AI agents monitor high-frequency telemetry to detect subtle deviations that precede failures.', icon: EyeIcon },
    { name: 'Asset-level Health Scoring', description: 'A continuously updated health score for every critical asset, enabling prioritized, risk-based maintenance.', icon: ChartBarIcon },
    { name: 'Failure Mode Prediction', description: 'Bespoke models predict not just *if* an asset will fail, but *how* it will fail, guiding precise preventive action.', icon: ClockIcon },
    { name: 'Root-cause Reasoning', description: 'Cognitive agents trace failures back to their source by analyzing the full operational context within the ontology.', icon: ScaleIcon },
    { name: 'Maintenance Orchestration', description: 'Agents autonomously create work orders, check spare part inventory, and schedule technicians via your existing EAM/CMMS.', icon: WrenchScrewdriverIcon },
    { name: 'Operator-in-the-loop Governance', description: 'A central command center provides your team with full visibility and control over all AI-driven maintenance recommendations.', icon: ShieldCheckIcon }
];

const outcomes = [
    { metric: '20-40%', description: 'Reduction in equipment failures', industry: 'Heavy Manufacturing' },
    { metric: '15-30%', description: 'Lower maintenance overhead', industry: 'Energy & Utilities' },
    { metric: '5-10%', description: 'Longer asset lifespan', industry: 'Aviation & Automotive' },
];

const industries = [
    { name: 'Manufacturing', description: 'Predicting failures in robotics, CNC machines, and assembly line equipment.' },
    { name: 'Energy & Utilities', description: 'Monitoring the health of turbines, transformers, and grid infrastructure.' },
    { name: 'Transportation', description: 'Forecasting maintenance needs for vehicle fleets, rail assets, and aircraft.' },
    { name: 'Aviation', description: 'Enabling condition-based maintenance for engines and critical components.' },
    { name: 'Automotive', description: 'Ensuring uptime for stamping presses, paint shops, and robotic welders.' },
];

const PredictiveMaintenancePage: React.FC = () => {
    useSEO({
        title: 'Predictive Maintenance Solutions',
        description: 'We unify telemetry, asset history, and operational context into a real-time ontology that enables Cognitive Agents to predict failures and orchestrate preventive action.',
        keywords: 'predictive maintenance, asset management, unplanned downtime, operational AI, industrial AI'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <Hero
                breadcrumb="SOLUTION: PREDICTIVE MAINTENANCE"
                title="From Unexpected Failures to Predictive Control."
                subtitle="We architect a cognitive system that unifies telemetry, asset history, and operational context into a real-time ontology, enabling agents to detect anomalies, predict failures, and orchestrate preventive action."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            {/* 2. THE CHALLENGE */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: Unplanned Downtime is an Architectural Failure"
                    description="Enterprises lose millions to unplanned downtime, blind maintenance cycles, and siloed asset data spread across SCADA, MES, ERP, and field logs. This fragmentation makes it impossible to anticipate failures, creating a state of constant firefighting that erodes margins and operational stability."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            {/* 3. WHY TRADITIONAL APPROACHES FAIL */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Isolated Models Lack Context and Trust"
                    description="Most 'predictive maintenance' solutions are just isolated ML models. They lack deep operational context, have no integration with maintenance workflows, and generate a high volume of false positives. They are treated as academic 'science projects' because they cannot be trusted for mission-critical decisions."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            {/* 4. THE AKIN SOLUTION */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="An Intelligent System for Asset Lifecycle Governance"
                    description="Akin architects an asset-level Operational Ontology that fuses vibration data, temperature, load patterns, lifecycle events, and environmental context into a single 'digital twin'. Cognitive Agents continuously reason over this ontology to detect weak signals that precede failure, model degradation patterns based on real-world conditions, and autonomously trigger maintenance workflows through your existing systems (e.g., SAP, Maximo). This is not a model; it's a cognitive system."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            {/* 5. CORE CAPABILITIES */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Predictive Maintenance System Does"
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

            {/* 6. ARCHITECTURE DIAGRAM */}
            <Section tone="light">
                 <SectionHeader
                    eyebrow="Architecture"
                    title="Powered by the Akin Platform"
                    align="center"
                    maxWidth="lg"
                />
                <ArchitectureDiagram />
                <div className="max-w-4xl mx-auto mt-8 text-center text-charcoal-light">
                    <p>Our predictive maintenance solution is an integrated capability of the Akin platform. The **Unified Ontology** creates the digital twin of every asset. The **MLOps Engine** builds and deploys the bespoke failure models. **Cognitive Agents** reason over the ontology to predict failures and orchestrate action. The **Command Center** provides your operators with governed, human-in-the-loop control.</p>
                </div>
            </Section>

            {/* 7. OUTCOMES */}
            <Section tone="dark">
                <SectionHeader
                    eyebrow="Outcomes"
                    title="Operational Impact That Scales"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {outcomes.map(item => (
                        // FIX: Corrected the key from `item.label` to `item.description` since the `label` property does not exist on the item object.
                        <Card key={item.description} className="text-center bg-white/5 border-white/10 text-stone">
                            <p className="text-5xl font-extrabold text-green">{item.metric}</p>
                            <p className="mt-2 font-semibold text-white">{item.description}</p>
                             <p className="mt-1 text-sm text-gray-400">Context: {item.industry}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            {/* 8. WHERE THIS APPLIES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="Applicability"
                    title="Where This Applies"
                    description="Our predictive maintenance solution is designed for asset-intensive industries where the cost of downtime is high."
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
            
            {/* 9. WHY AKIN */}
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
                        <h4 className="mt-2 font-bold">Ontology-First Engineering</h4>
                        <p className="text-sm text-charcoal-light">We model the physics and operational context of your assets first.</p>
                    </div>
                    <div className="p-4">
                        <Square3Stack3DIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Deep Integration</h4>
                        <p className="text-sm text-charcoal-light">We integrate with your EAM/CMMS to automate workflows, not just send alerts.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Enterprise-Grade Governance</h4>
                        <p className="text-sm text-charcoal-light">Our systems are built for mission-critical reliability and human-in-the-loop control.</p>
                    </div>
                </div>
            </Section>

            {/* 10. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Intelligence Into Your Enterprise."
                    description="Let’s design the cognitive system that transforms your operations from reactive to predictive."
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

export default PredictiveMaintenancePage;
