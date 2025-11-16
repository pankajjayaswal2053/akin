
import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';
import {
    BoltIcon,
    ShareIcon,
    SparklesIcon,
    UserGroupIcon,
    PuzzlePieceIcon,
    ClockIcon,
    CpuChipIcon,
    ShieldCheckIcon,
    CodeBracketIcon,
} from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'End-to-End Process Orchestration', description: 'Agents manage entire value streams, from "procure-to-pay" to "order-to-cash," across multiple systems.', icon: ShareIcon },
    { name: 'AI-Powered Decision Making', description: 'Agents use AI to handle exceptions, make judgments, and route complex cases that simple bots cannot.', icon: SparklesIcon },
    { name: 'Cross-System Action & Integration', description: 'Agents interact with any system via APIs, databases, or other protocols, acting as a universal integration layer.', icon: PuzzlePieceIcon },
    { name: 'Human-in-the-Loop Governance', description: 'Your team is always in control, with the ability to monitor, approve, or override any agent action via the Command Center.', icon: UserGroupIcon },
    { name: 'Continuous Process Optimization', description: 'The system continuously learns, identifying new bottlenecks and opportunities for automation.', icon: ClockIcon },
    { name: 'Real-time Anomaly Response', description: 'Agents can detect operational anomalies (like a supply chain disruption) and trigger autonomous response workflows.', icon: BoltIcon }
];

const outcomes = [
    { metric: '30-50%', description: 'Reduction in manual process costs', industry: 'Financial Services' },
    { metric: 'Up to 70%', description: 'Faster process cycle times', industry: 'Logistics' },
    { metric: '99.9%', description: 'Improvement in process accuracy', industry: 'All' },
];

const industries = [
    { name: 'Finance & Accounting', description: 'Automating AP/AR, financial close, and regulatory reporting.' },
    { name: 'Supply Chain', description: 'Orchestrating order management, logistics, and inventory replenishment.' },
    { name: 'Customer Service', description: 'Automating ticket triage, resolution, and proactive customer communication.' },
    { name: 'IT Operations', description: 'Enabling self-healing infrastructure and automating incident response.' },
    { name: 'HR', description: 'Streamlining employee onboarding, payroll, and benefits administration.' },
];

const AutonomousOperationsPage: React.FC = () => {
    useSEO({
        title: 'Autonomous Operations Solutions',
        description: 'Move beyond simple automation to a state of autonomous operations, where cognitive agents reason and act to run your core business processes 24/7.',
        keywords: 'autonomous operations, intelligent automation, cognitive agents, business process automation, autonomous enterprise'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO */}
            <Hero
                breadcrumb="SOLUTION: AUTONOMOUS OPERATIONS"
                title="From Manual Processes to Autonomous Workflows."
                subtitle="We build and deploy fleets of Cognitive Agents that reason over your operational ontology to run core business processes with minimal human intervention, 24/7, creating a truly autonomous enterprise."
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
                    title="The Enterprise Problem: The 'Swivel Chair' Enterprise is Broken"
                    description="Critical business processes like 'order-to-cash' or 'incident response' are still run by humans copying data between disconnected systems. This 'swivel-chair' work is slow, expensive, error-prone, and impossible to scale. It drains your best talent and puts a hard ceiling on your operational efficiency."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            {/* 3. WHY TRADITIONAL APPROACHES FAIL */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Brittle Bots Cannot Handle Complexity"
                    description="Traditional RPA (Robotic Process Automation) is just screen-scraping. It's fragile and breaks at the first exception. It cannot handle unstructured data or make complex judgments, automating only the simplest 10% of the problem while creating a massive maintenance burden."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            {/* 4. THE AKIN SOLUTION */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="A Cognitive Workforce, Governed by Your Ontology"
                    description="Akin deploys a workforce of Cognitive Agents that operate on a completely different paradigm. They don't mimic clicks; they reason over your Unified Ontology—the digital twin of your business. This allows them to understand context, handle ambiguity, and orchestrate complex, multi-system workflows from end to end, escalating to a human only when necessary for true human-in-the-loop governance."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            {/* 5. CORE CAPABILITIES */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Autonomous System Does"
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
                    <p>Autonomous Operations is the ultimate expression of our platform. The **Unified Ontology** provides the real-time business context. The **MLOps Engine** builds the decision-making logic. **Cognitive Agents** execute the workflows. The **Command Center** provides the critical human-in-the-loop governance layer.</p>
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
                    description="Autonomous Operations can transform any process-intensive function within the enterprise, turning cost centers into engines of efficiency."
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
                        <h4 className="mt-2 font-bold">Ontology-Grounded</h4>
                        <p className="text-sm text-charcoal-light">Our agents understand your business context, enabling them to handle complex exceptions.</p>
                    </div>
                    <div className="p-4">
                        <CodeBracketIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">API-First, Not UI-First</h4>
                        <p className="text-sm text-charcoal-light">Our automation is resilient and integrates at the data layer, not fragile screen-scraping.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Enterprise-Grade Governance</h4>
                        <p className="text-sm text-charcoal-light">We build fully auditable systems with robust human-in-the-loop controls from day one.</p>
                    </div>
                </div>
            </Section>

            {/* 10. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Autonomous Enterprise."
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
