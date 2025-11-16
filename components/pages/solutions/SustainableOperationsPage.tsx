
import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { useSEO } from '../../seo/useSEO';
import {
    BoltIcon,
    CpuChipIcon,
    SparklesIcon,
    ChartBarIcon,
    ClockIcon,
    PuzzlePieceIcon,
    UserGroupIcon,
    ShareIcon,
    ScaleIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'End-to-End Process Orchestration', icon: ShareIcon },
    { name: 'AI-Powered Decision Making', icon: SparklesIcon },
    { name: 'Cross-System Action & Integration', icon: PuzzlePieceIcon },
    { name: 'Human-in-the-Loop Governance', icon: UserGroupIcon },
    { name: 'Continuous Process Optimization', icon: ClockIcon },
    { name: 'Real-time Anomaly Response', icon: BoltIcon }
];

const outcomes = [
    { value: '30-50%', label: 'Reduction in manual process costs' },
    { value: 'Up to 70%', label: 'Faster process cycle times' },
    { value: '99.9%', label: 'Improvement in process accuracy' },
    { value: '24/7', label: 'Continuous, intelligent operation' }
];

const platformPillars = [
    { name: 'Operational Ontology', description: 'Provides the real-time, contextual understanding of the business process that agents need to reason effectively.' },
    { name: 'MLOps Engine', description: 'Builds and deploys the decision-making models and logic that power the cognitive agents.' },
    { name: 'Cognitive Agents', description: 'The autonomous workforce that executes tasks, makes decisions, and orchestrates workflows across multiple systems.' },
    { name: 'Command Center', description: 'Enables your team to govern, monitor, and collaborate with the agent workforce, ensuring full control and auditability.' }
];

const AutonomousOperationsPage: React.FC = () => {
    useSEO({
        title: 'Autonomous Operations Solutions',
        description: 'Move beyond simple automation to a state of autonomous operations, where cognitive agents reason and act to run your core business processes 24/7.',
        keywords: 'autonomous operations, intelligent automation, cognitive agents, business process automation, autonomous enterprise'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: AUTONOMOUS OPERATIONS"
                title="From Manual Processes to Autonomous Workflows."
                subtitle="We build and deploy fleets of Cognitive Agents that reason over your operational ontology to run core business processes with minimal human intervention, 24/7."
            />

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Manual Enterprise is Slow and Brittle"
                    description="Critical business processes like 'order-to-cash' or 'incident response' are still run by humans copying data between disconnected systems. This 'swivel-chair' work is slow, expensive, error-prone, and impossible to scale."
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Simple Bots Cannot Handle Complexity"
                    description="Traditional RPA (Robotic Process Automation) is just screen-scraping. It's fragile and breaks at the first exception. It cannot handle unstructured data or make complex judgments, automating only the simplest 10% of the problem."
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="A Cognitive Workforce, Governed by Your Ontology"
                    description="Akin deploys a workforce of Cognitive Agents that operate on a completely different paradigm. They don't mimic clicks; they reason over your Unified Ontology—the digital twin of your business. This allows them to understand context, handle ambiguity, and orchestrate complex, multi-system workflows from end to end, escalating to a human only when necessary."
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
                    description="Autonomous Operations is the ultimate expression of our platform, where all four pillars work in concert to create a self-running system."
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
                    title="Measurable Impact on Efficiency and Scale"
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
                    description="Autonomous Operations can transform any process-intensive function within the enterprise."
                />
                <div className="mt-8 flex flex-wrap gap-4">
                    {['Finance (AP/AR)', 'Supply Chain', 'Customer Service', 'IT Operations', 'HR Onboarding'].map(industry => (
                        <span key={industry} className="px-4 py-2 bg-stone text-charcoal font-semibold rounded-full">{industry}</span>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Akin"
                    title="We don't sell bots. We architect and deploy a governed, intelligent workforce that runs your business."
                />
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="Final CTA"
                    title="Ready to Build Your Autonomous Enterprise?"
                    description="Let’s identify and architect the high-value processes that can be run by your new cognitive workforce."
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

export default AutonomousOperationsPage;
