import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';
import {
    CpuChipIcon,
    SparklesIcon,
    ShieldCheckIcon,
    BeakerIcon,
    RocketLaunchIcon,
    ShareIcon,
    KeyIcon,
    CubeTransparentIcon,
    Square3Stack3DIcon
} from '@heroicons/react/24/outline';

const capabilities = [
    { name: 'Enterprise Reasoning Layer', description: 'Build a central cognitive engine that can answer complex, cross-functional questions by reasoning over your entire business ontology.', icon: CpuChipIcon },
    { name: 'Knowledge & Data Fusion', description: 'Unify structured data with unstructured knowledge from documents and reports into a single, queryable graph.', icon: ShareIcon },
    { name: 'Cognitive Agent Orchestration', description: 'Design, deploy, and govern fleets of intelligent agents that can execute complex, multi-step business processes autonomously.', icon: SparklesIcon },
    { name: 'Bespoke Model Development', description: 'Go beyond off-the-shelf models to build custom AI solutions that capture the unique nuances of your operation.', icon: BeakerIcon },
    { name: 'Production MLOps Engine', description: 'Implement robust, automated pipelines to test, deploy, and monitor your AI, ensuring reliability and governance at scale.', icon: RocketLaunchIcon },
    // FIX: Corrected a syntax error in the string by using double quotes to enclose a string containing single quotes.
    { name: 'Generative AI Governance', description: "Deploy generative AI safely with 'ontology-grounding' to prevent hallucinations and protect your sensitive data.", icon: KeyIcon }
];

const outcomes = [
    { metric: '30-50%', description: 'Faster time-to-insight for complex business questions', industry: 'Cross-Industry' },
    { metric: 'Up to 60%', description: 'Reduction in model deployment time via MLOps', industry: 'Technology & R&D' },
    { metric: '25%', description: 'Improvement in decision accuracy for AI-augmented workflows', industry: 'Operations' },
];

const industries = [
    { name: 'Strategic Planning', description: 'Simulate market scenarios and model the impact of strategic decisions.' },
    { name: 'Operations', description: 'Enable autonomous decision-making for processes like supply chain and logistics.' },
    { name: 'Product Development', description: 'Analyze market feedback and technical data to guide R&D efforts.' },
    { name: 'Risk & Compliance', description: 'Build intelligent systems to monitor for risk and ensure regulatory adherence.' },
    { name: 'Customer Experience', description: 'Power personalization engines and intelligent customer service agents.' },
];

const AiPage: React.FC = () => {
    useSEO({
        title: 'AI & Cognitive Intelligence Solutions',
        description: 'Move AI from isolated models to a cognitive operating system. We architect and build the foundational platform for enterprise-wide, governed intelligence.',
        keywords: 'ai, cognitive intelligence, bespoke models, mlops, generative ai, cognitive operating system'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: AI & COGNITIVE INTELLIGENCE"
                title="From Isolated Models to a Cognitive Operating System."
                subtitle="We architect and build the foundational platform that moves AI from siloed 'science projects' to a governed, enterprise-wide cognitive capability. This system enables Cognitive Agents and your teams to reason over a unified model of your business in real time."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: 'Prototype Purgatory' Stalls Innovation"
                    description="Your data scientists are building promising models, but they're stuck in 'prototype purgatory.' ML POCs are everywhere, but there is no clear path to productionized, governed, and operational intelligence. The lack of a unified architecture means AI's potential remains trapped in PowerPoint decks and Jupyter notebooks."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Model-First, Not Architecture-First"
                    description="Traditional AI projects focus on building an isolated model, not an integrated system. This model-first approach fails at scale because it ignores the foundational needs of the enterprise: a unified data context (ontology), real-time reasoning capabilities, and robust governance for mission-critical use."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="A Cognitive Operating System for the Enterprise"
                    description="We don't just build models; we architect your enterprise's cognitive operating system. By establishing the Unified Ontology first, we create the 'single source of truth' that allows Cognitive Agents to reason and act across the entire business. Our Production MLOps Engine ensures this intelligence is reliable, scalable, and fully governed within your Operations Command Center."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the AI & Cognitive Intelligence System Does"
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
                    <p>This solution is powered by our four core platform pillars. The **Unified Ontology** provides the trusted business context. The **MLOps Engine** builds and governs the bespoke models. **Cognitive Agents** orchestrate intelligent action. The **Command Center** provides the critical human-in-the-loop governance.</p>
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
                    description="A central cognitive operating system transforms decision-making across every function of the enterprise."
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
                        <h4 className="mt-2 font-bold">Ontology-Grounded</h4>
                        <p className="text-sm text-charcoal-light">Our AI is built on a foundation of your business context, ensuring relevance and trust.</p>
                    </div>
                    <div className="p-4">
                        <Square3Stack3DIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Holistic System Architecture</h4>
                        <p className="text-sm text-charcoal-light">We don't just build models; we build the entire operational system, from data to action.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Enterprise-Grade Governance</h4>
                        <p className="text-sm text-charcoal-light">Our platforms are designed for mission-critical reliability, security, and human oversight.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Cognitive Operating System."
                    description="Let’s design the foundational AI system that will power your next decade of growth and innovation."
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

export default AiPage;
