import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import CallToActionSection from '../../ui/CallToActionSection';
import ThriveBar from '../../ui/ThriveBar';
import { useSEO } from '../../seo/useSEO';
import { SparklesIcon, EyeIcon, ServerStackIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../../ui/OptimizedImage';

const howWeApplyIt = [
    { name: 'High-Performance UX', description: 'Designing intuitive, beautiful, and highly performant interfaces that make complex systems a delight to use.', icon: EyeIcon },
    { name: 'High-Reliability Systems', description: 'Engineering for mission-critical resilience, with a focus on uptime, security, and scalability from day one.', icon: ServerStackIcon },
    { name: 'Brand and Experience Consistency', description: 'Ensuring every touchpoint, from the UI to the documentation, reflects a single, unified standard of quality and professionalism.', icon: SparklesIcon },
    { name: 'Quality Assurance at Every Layer', description: 'Implementing rigorous automated and manual testing throughout the entire lifecycle, from infrastructure to the final pixel.', icon: ShieldCheckIcon },
];

const inPractice = [
    'We decline patterns that add complexity without adding value.',
    'We review not just if a system works, but if it feels coherent and considered.',
    'We treat naming, defaults, and error states as first-class design problems.'
];

const outcomes = [
    { name: 'Stronger Reputation & Brand', description: 'A reputation for quality and reliability that becomes a competitive advantage.' },
    { name: 'Delightful User Experience', description: 'Higher user adoption and satisfaction, driven by interfaces that are both powerful and easy to use.' },
    { name: 'System Resilience', description: 'Fewer errors, less downtime, and a more stable operational environment.' },
    { name: 'Long-Term Confidence', description: 'The confidence to bet on a platform that is built to the highest standards of engineering excellence.' },
];

const ExceptionalPage: React.FC = () => {
    useSEO({
        title: 'THRIVE: Exceptional — Excellence as the Standard',
        description: 'World-class quality across every interface, system, and experience. Our Exceptional principle means nothing we build is average — everything is engineered with precision.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb={
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <img src="/images/icons/exceptional.png" alt="Exceptional Icon" className="h-6 w-6" />
                        </div>
                        <span>THRIVE Philosophy / Exceptional</span>
                    </div>
                }
                title="Exceptional — Excellence as the Standard"
                subtitle="World-class quality across every interface, system, and experience."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/thrive" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">The THRIVE Philosophy</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <ThriveBar activePhase="E" />
                <p className="max-w-3xl mx-auto mt-8 text-center text-charcoal-light">Exceptional is one of six THRIVE pillars — the philosophy that guides how we design world-class systems.</p>
            </Section>

            <Section tone="light">
                 <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                         <div className="p-8 bg-stone rounded-lg">
                            <OptimizedImage src="/images/icons/exceptional.png" alt="Exceptional Icon" width={512} height={512} className="w-full" />
                         </div>
                    </div>
                    <div className="md:col-span-7">
                        <SectionHeader eyebrow="Definition" title="What 'Exceptional' Means in THRIVE." />
                        <p className="mt-4 text-lg text-charcoal-light">Exceptional is our non-negotiable standard of quality. It is the principle that nothing we build is merely 'good enough.' Every line of code, every interface, and every interaction is engineered with precision, care, and a relentless focus on world-class craftsmanship.</p>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Why It Matters" title="Enterprise Trust is Built on Excellence." description="In mission-critical environments, every detail matters. A poorly designed interface erodes user trust. A non-performant system creates operational risk. A sloppy architecture accumulates technical debt. Excellence is not a luxury; it is the prerequisite for building systems that are trusted to run the core of an enterprise." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Apply It" title="Our Commitments to Quality" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {howWeApplyIt.map(item => (
                        <Card key={item.name}>
                            <item.icon className="h-8 w-8 text-electric-blue mb-3" />
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader eyebrow="In Practice" title="What Exceptional Looks Like Day-to-Day" align="center" maxWidth="lg" />
                 <div className="mt-12 max-w-2xl mx-auto space-y-4">
                    {inPractice.map(item => (
                        <Card key={item} className="text-center">
                            <p className="font-semibold text-charcoal">{item}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Impact of Uncompromising Excellence" align="center" maxWidth="lg" />
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
                <SectionHeader eyebrow="Connection to the Akin OS" title="How 'Exceptional' Influences Platform & VELOCITY™" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card>
                        <h4 className="font-bold text-charcoal">Platform</h4>
                        <p className="text-charcoal-light mt-1">Sets the quality thresholds for the platform's architecture, resilience, performance, and the final user experience of the Command Center.</p>
                    </Card>
                     <Card>
                        <h4 className="font-bold text-charcoal">VELOCITY™</h4>
                        <p className="text-charcoal-light mt-1">Shapes the review gates, acceptance criteria, and non-functional requirements in each phase, especially in Operationalization.</p>
                    </Card>
                </div>
            </Section>

            <CallToActionSection title="Ready to Build Exceptional Systems?" subtitle="Let's architect an intelligent platform that reflects your commitment to quality, reliability, and world-class user experience." buttonText="Talk to an Architect" />
        </div>
    );
};

export default ExceptionalPage;