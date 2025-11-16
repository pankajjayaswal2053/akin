import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import CallToActionSection from '../../ui/CallToActionSection';
import ThriveBar from '../../ui/ThriveBar';
import { useSEO } from '../../seo/useSEO';
import { CpuChipIcon, ShareIcon, ShieldCheckIcon, RocketLaunchIcon, CodeBracketSquareIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../../ui/OptimizedImage';

const howWeApplyIt = [
    { name: 'Ontology-Driven System Design', description: 'Every system is designed around a core, contextual model of your business, ensuring technology serves the operational reality.', icon: CpuChipIcon },
    { name: 'Real-Time Data Planes', description: 'We architect high-performance, streaming data infrastructure that enables real-time reasoning and action.', icon: CodeBracketSquareIcon },
    { name: 'API-First Integration', description: 'Our platforms are built with a composable, API-first mindset, allowing seamless integration with your existing and future technology stack.', icon: ShareIcon },
    { name: 'Security & Trust Engineering', description: 'Security is not an afterthought; it is architected into the core of the platform, from data encryption to agent governance.', icon: ShieldCheckIcon },
];

const inPractice = [
    'We choose reliable, proven technology over fleeting trends.',
    'We treat "infrastructure-as-code" as a non-negotiable for repeatability and governance.',
    'Every component is designed for failure, ensuring the system as a whole is resilient.'
];

const outcomes = [
    { name: 'Lower Total Cost of Ownership', description: 'Well-architected systems are more efficient, easier to maintain, and less costly to evolve over time.' },
    { name: 'Scalable, Future-Proof Systems', description: 'Our architectures are designed to grow with your business and adapt to new technologies.' },
    { name: 'Faster Deployment Velocity', description: 'A solid foundation allows new capabilities and agents to be developed and deployed faster.' },
];

const TechnologyPage: React.FC = () => {
    useSEO({
        title: 'THRIVE: Technology — Engineered Intelligence That Endures',
        description: 'Technology at Akin is not tooling — it is architecture. Our systems are built to last, scale, and reason with enduring intelligence.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb={
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <img src="/images/icons/technology.png" alt="Technology Icon" className="h-6 w-6" />
                        </div>
                        <span>THRIVE Philosophy / Technology</span>
                    </div>
                }
                title="Technology — Engineered Intelligence That Endures"
                subtitle="Technology at Akin is not tooling — it is architecture. Our systems are built to last, scale, and reason."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/thrive" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">The THRIVE Philosophy</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <ThriveBar activePhase="T" />
                <p className="max-w-3xl mx-auto mt-8 text-center text-charcoal-light">Technology is one of six THRIVE pillars — the philosophy that guides how we design world-class systems.</p>
            </Section>

            <Section tone="light">
                 <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                         <div className="p-8 bg-stone rounded-lg">
                            <OptimizedImage src="/images/icons/technology.png" alt="Technology Icon" width={512} height={512} className="w-full" />
                         </div>
                    </div>
                    <div className="md:col-span-7">
                        <SectionHeader eyebrow="Definition" title="What 'Technology' Means in THRIVE." />
                        <p className="mt-4 text-lg text-charcoal-light">Technology is the disciplined engineering of ontologies, data platforms, agents, and secure infrastructures that enable resilient, real-time intelligence.</p>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Why It Matters" title="Foundations Determine What Becomes Possible." description="In the cognitive era, your technology architecture is your business architecture. A weak, brittle, or siloed foundation limits your ability to adapt, innovate, and compete. Strong architecture is not a 'nice-to-have'; it is the fundamental enabler of stability, velocity, and trust in an AI-driven world." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Apply It" title="Our Commitments to Technology" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howWeApplyIt.map(item => (
                        <Card key={item.name} className="text-center">
                            <item.icon className="h-8 w-8 text-electric-blue mb-3 mx-auto" />
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader eyebrow="In Practice" title="What Technology Looks Like Day-to-Day" align="center" maxWidth="lg" />
                 <div className="mt-12 max-w-2xl mx-auto space-y-4">
                    {inPractice.map(item => (
                        <Card key={item} className="text-center">
                            <p className="font-semibold text-charcoal">{item}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Impact of Architectural Excellence" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.name} className="text-center">
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-charcoal-light mt-1 text-sm">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
             <Section tone="soft">
                <SectionHeader eyebrow="Connection to the Akin OS" title="How 'Technology' Influences Platform & VELOCITY™" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card>
                        <h4 className="font-bold text-charcoal">Platform</h4>
                        <p className="text-charcoal-light mt-1">Defines the 'best-of-breed' technology stack and architectural patterns used to build the Cognitive Agent Platform.</p>
                    </Card>
                     <Card>
                        <h4 className="font-bold text-charcoal">VELOCITY™</h4>
                        <p className="text-charcoal-light mt-1">Sets the non-functional requirements in the Vision phase and guides the build patterns in the Engineering phase.</p>
                    </Card>
                </div>
            </Section>

            <CallToActionSection title="Ready to Build an Enduring Architecture?" subtitle="Let's design the resilient, scalable technology foundation your enterprise needs to thrive in the cognitive era." buttonText="Talk to an Architect" />
        </div>
    );
};

export default TechnologyPage;