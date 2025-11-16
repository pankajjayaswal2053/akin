import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
    ShieldCheckIcon,
    MagnifyingGlassIcon,
    ClipboardDocumentCheckIcon,
    CpuChipIcon,
    SparklesIcon,
    KeyIcon,
    EyeIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';

const capabilities = [
    { name: 'Agent Behavior Logging', description: 'Maintain a complete, immutable audit trail of every query, decision, and action taken by every Cognitive Agent.', icon: ClipboardDocumentCheckIcon },
    { name: 'Model Governance & Validation', description: 'Implement automated checks for model bias, drift, and performance, ensuring your AI remains fair and accurate over time.', icon: MagnifyingGlassIcon },
    { name: 'Policy-as-Code Enforcement', description: 'Translate your corporate and regulatory policies into automated rules that are enforced at the data layer by the ontology.', icon: ShieldCheckIcon },
    { name: 'AI Red Teaming & Adversarial Testing', description: 'Proactively test your AI systems for vulnerabilities like data poisoning, model evasion, and prompt injection attacks.', icon: SparklesIcon },
    { name: 'Explainable AI (XAI)', description: 'Build systems that can explain their decisions in human-understandable terms, tracing every action back to the data in the ontology.', icon: EyeIcon },
];

const outcomes = [
    { metric: '100%', description: 'Auditable AI decision-making for regulatory compliance', industry: 'Compliance' },
    { metric: '99.9%', description: 'Prevention of sensitive data leakage via GenAI', industry: 'Data Security' },
    { metric: '50%+', description: 'Reduction in false positives for security alerts', industry: 'Security Operations' },
];

const industries = [
    { name: 'CISO / Security Office', description: 'Building a proactive, intelligent security posture for the entire enterprise.' },
    { name: 'Risk & Compliance', description: 'Ensuring AI systems are fair, auditable, and compliant with global regulations.' },
    { name: 'Data Governance', description: 'Protecting the integrity and security of the enterprise\'s most valuable data assets.' },
];

const CybersecurityPage: React.FC = () => {
    useSEO({
        title: 'Cybersecurity & AI Trust Solutions',
        description: 'Protect your AI-driven enterprise with an intelligent, data-centric approach to security, governance, and trust for your data, models, and Unified Ontology.',
        keywords: 'cybersecurity, digital trust, AI governance, responsible AI, data security, DevSecOps'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: CYBERSECURITY & AI TRUST"
                title="From Point Security to Cognitive-Grade Trust."
                subtitle="We architect and build the governance and security frameworks required to deploy AI with confidence. Our approach embeds security, governance, and auditability into the core of your ontology and agents, protecting you from a new generation of AI-driven risks."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: AI Introduces a New Class of Risk"
                    description="Generative AI and autonomous systems create unprecedented opportunities, but they also introduce novel risks: sensitive data leakage, algorithmic bias, opaque 'black box' decisions, and new attack vectors. Traditional cybersecurity tools are blind to these AI-specific threats."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Perimeter Security is Obsolete in an AI World"
                    description="Traditional security focuses on protecting the network perimeter. This approach is useless when the biggest threat is an un-governed AI agent inside your network making a biased decision or a developer accidentally leaking your entire customer list to a public Large Language Model (LLM)."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="Security and Governance, Embedded Into Your Ontology & Agents"
                    description="We build security and trust into the fabric of your cognitive system. By grounding every agent action in the Unified Ontology, we create a 'single source of truth' that is secure, auditable, and governed by design. Your data policies are not just documents; they are code, automatically enforced at every layer of the platform."
                    align='center'
maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Cybersecurity & AI Trust System Does"
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
                    <p>Trust is an emergent property of our platform's architecture. The **Unified Ontology** acts as the secure, governed data core. The **MLOps Engine** includes pipelines for bias and security testing. **Cognitive Agents** operate within strict, policy-defined boundaries. The **Command Center** provides the complete, auditable log of every action.</p>
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
                    description="AI Trust is not an IT problem; it is a board-level business imperative for any organization deploying AI."
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
                        <h4 className="mt-2 font-bold">Ontology-Aware Security</h4>
                        <p className="text-sm text-charcoal-light">Our security understands business context, not just IP addresses.</p>
                    </div>
                    <div className="p-4">
                        <SparklesIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">AI for AI Security</h4>
                        <p className="text-sm text-charcoal-light">We use AI to proactively test and defend your AI systems from novel threats.</p>
                    </div>
                     <div className="p-4">
                        <KeyIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Governance-as-Code</h4>
                        <p className="text-sm text-charcoal-light">We build compliance into your platform's code, making you 'compliant by default'.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Cognitive-Grade Trust."
                    description="Let’s design the secure, governed, and auditable AI foundation your enterprise needs to innovate with confidence."
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

export default CybersecurityPage;
