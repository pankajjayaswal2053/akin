
import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { useSEO } from '../../seo/useSEO';
import {
    WrenchScrewdriverIcon,
    CpuChipIcon,
    SparklesIcon,
    ChartBarIcon,
    EyeIcon,
    ClockIcon,
    ScaleIcon,
    BoltIcon,
    ShieldCheckIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'Real-time Anomaly Detection', icon: EyeIcon },
    { name: 'Asset-level Health Scoring', icon: ChartBarIcon },
    { name: 'Failure Mode Prediction', icon: ClockIcon },
    { name: 'Root-cause Reasoning', icon: ScaleIcon },
    { name: 'Maintenance Scheduling & Orchestration', icon: WrenchScrewdriverIcon },
    { name: 'Operator-in-the-loop Governance', icon: ShieldCheckIcon }
];

const outcomes = [
    { value: '20-40%', label: 'Reduction in equipment failures' },
    { value: '15-30%', label: 'Lower maintenance overhead' },
    { value: '5-10%', label: 'Longer asset lifespan' },
    { value: '3-7%', label: 'Higher production yield' }
];

const platformPillars = [
    { name: 'Operational Ontology', description: 'Creates a real-time digital twin of every asset, fusing telemetry with operational context.' },
    { name: 'MLOps Engine', description: 'Builds, deploys, and monitors the bespoke AI models that predict degradation patterns.' },
    { name: 'Cognitive Agents', description: 'Reason over the ontology to detect anomalies, predict failures, and orchestrate action.' },
    { name: 'Command Center', description: 'Provides your operators with governed, human-in-the-loop control over maintenance workflows.' }
];

const PredictiveMaintenancePage: React.FC = () => {
    useSEO({
        title: 'Predictive Maintenance Solutions',
        description: 'We unify telemetry, asset history, and operational context into a real-time ontology that enables Cognitive Agents to predict failures and orchestrate preventive action.',
        keywords: 'predictive maintenance, asset management, unplanned downtime, operational AI, industrial AI'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: PREDICTIVE MAINTENANCE"
                title="From Unexpected Failures to Predictive Control."
                subtitle="We unify telemetry, asset history, and operational context into a real-time ontology that enables Cognitive Agents to detect anomalies, predict failures, and orchestrate preventive action."
            />

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The High Cost of Reactive Operations"
                    description="Enterprises lose millions to unplanned downtime, blind maintenance cycles, and siloed asset data spread across SCADA, MES, ERP, and field logs. The inability to anticipate failures creates a state of constant firefighting, eroding margins and operational stability."
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Isolated Models Lack Context and Trust"
                    description="Most 'predictive maintenance' solutions rely on isolated ML models with poor context, limited governance, and no operational integration. They generate a high volume of false positives and cannot be trusted for mission-critical decisions, making them unreliable at scale."
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="An Intelligent System for Asset Lifecycle Governance"
                    description="Akin builds an asset-level Operational Ontology that fuses vibration data, temperature, load patterns, lifecycle events, and environmental context. Cognitive Agents continuously reason over this ontology to detect weak signals that precede failure, model degradation patterns based on real-world conditions, and autonomously trigger maintenance workflows through your existing systems (e.g., SAP, Maximo)."
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Capabilities"
                    title="What the System Does"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
                    {capabilities.map((item) => (
                        <Card key={item.name}>
                             <item.icon className="h-8 w-8 text-electric-blue mb-3" />
                             <h3 className="text-lg font-bold text-charcoal">{item.name}</h3>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="Architecture Overview"
                    title="Powered by the Akin Platform"
                    description="Our predictive maintenance solution is not a standalone tool; it's an integrated capability of the Akin platform, ensuring full explainability, governance, and reliability."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-4 gap-8">
                    {platformPillars.map(pillar => (
                        <Card key={pillar.name}>
                            <h4 className="font-bold text-electric-blue">{pillar.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{pillar.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="dark">
                <SectionHeader
                    eyebrow="Outcomes"
                    title="Measurable Impact on Your Operations"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.label} className="text-center bg-white/5 border-white/10 text-stone">
                            <p className="text-4xl font-extrabold text-green">{item.value}</p>
                            <p className="mt-2 text-gray-300">{item.label}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="light">
                <SectionHeader
                    eyebrow="Applicability"
                    title="Where This Applies"
                    description="Our predictive maintenance solution is designed for asset-intensive industries where the cost of downtime is high."
                />
                <div className="mt-8 flex flex-wrap gap-4">
                    {['Manufacturing', 'Energy', 'Utilities', 'Aviation', 'Automotive', 'Logistics'].map(industry => (
                        <span key={industry} className="px-4 py-2 bg-stone text-charcoal font-semibold rounded-full">{industry}</span>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Akin"
                    title="We don’t build models. We architect a cognitive system that governs the entire asset lifecycle."
                />
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="Final CTA"
                    title="Ready to Eliminate Unplanned Downtime?"
                    description="Let's design the cognitive system that puts you in predictive control of your most critical assets."
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
