
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useSEO } from '../seo/useSEO';
import { Link } from 'react-router-dom';
import { CpuChipIcon, UserGroupIcon, ChartPieIcon, LightBulbIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const thrivePrinciples = [
    { letter: 'T', name: 'Technology', summary: 'Engineered intelligence built on resilient foundations.', href: '/thrive/technology' },
    { letter: 'H', name: 'Humanity', summary: 'People at the center of every cognitive system.', href: '/thrive/humanity' },
    { letter: 'R', name: 'Results', summary: 'Impact that compounds across the enterprise.', href: '/thrive/results' },
    { letter: 'I', name: 'Innovation', summary: 'A disciplined engine of continuous reinvention.', href: '/thrive/innovation' },
    { letter: 'V', name: 'Valiant', summary: 'Bold, responsible, ethical leadership.', href: '/thrive/valiant' },
    { letter: 'E', name: 'Exceptional', summary: 'Excellence as the non-negotiable standard.', href: '/thrive/exceptional' },
];

const thriveDeepDive = [
    { name: 'Technology', description: 'The disciplined engineering of ontologies, data platforms, agents, and secure infrastructures that enable resilient, real-time intelligence.', icon: CpuChipIcon, href: '/thrive/technology' },
    { name: 'Humanity', description: 'Ensures cognitive systems remain aligned with human judgment, culture, and enterprise values.', icon: UserGroupIcon, href: '/thrive/humanity' },
    { name: 'Results', description: 'Our principle of designing systems that create financial, operational, and strategic value.', icon: ChartPieIcon, href: '/thrive/results' },
    { name: 'Innovation', description: 'Our philosophy of structured experimentation ensures the enterprise continually evolves.', icon: LightBulbIcon, href: '/thrive/innovation' },
    { name: 'Valiant', description: 'The principle of leading with integrity, foresight, and moral clarity in the age of AI.', icon: ShieldCheckIcon, href: '/thrive/valiant' },
    { name: 'Exceptional', description: 'The non-negotiable standard of world-class quality across every interface, system, and experience.', icon: SparklesIcon, href: '/thrive/exceptional' },
];

const ThrivePhilosophyPage: React.FC = () => {
    useSEO({
        title: 'THRIVE — Our Philosophy for Enduring Intelligence',
        description: 'THRIVE is Akin’s philosophy for designing world-class systems. It ensures every architecture we build is truthful, human-aligned, rigorously simple, intelligently crafted, valuable, and enduring.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="Philosophy"
                title="THRIVE — Our Philosophy for Enduring Intelligence"
                subtitle="Akin’s philosophy describes how world-class systems should be imagined, designed, and governed. THRIVE ensures every architecture we build is truthful, human-aligned, rigorously simple, intelligently crafted, valuable, and enduring."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore VELOCITY™</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why THRIVE Exists"
                    title="Philosophy Drives Architecture"
                    description="Technology alone doesn’t create excellence. Methodology alone doesn’t guarantee quality. Enterprises become extraordinary when they operate from a philosophy that shapes every decision, every pattern, every line of architecture. THRIVE is that philosophy — our lens for building intelligent systems that last."
                    align="center"
                    maxWidth="lg"
                />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The THRIVE Model" title="Six Principles for Enduring Intelligence" align="center" maxWidth="lg" />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {thrivePrinciples.map(p => (
                        <Link to={p.href} key={p.name} className="group">
                            <div className="text-5xl font-extrabold text-electric-blue">{p.letter}</div>
                            <h3 className="mt-2 text-lg font-bold text-charcoal">{p.name}</h3>
                            <p className="mt-1 text-sm text-charcoal-light">{p.summary}</p>
                            <div className="mt-2 h-0.5 bg-electric-blue/20 mx-auto w-8 group-hover:w-16 transition-all duration-300"></div>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Deep Dive" title="Exploring the THRIVE Principles" align="center" maxWidth="lg" />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {thriveDeepDive.map(item => (
                        <Link to={item.href} key={item.name} className="block group">
                            <Card className="h-full border border-stone hover:border-electric-blue/50 transition-colors">
                                <item.icon className="h-8 w-8 text-electric-blue mb-4" />
                                <h3 className="text-xl font-bold text-charcoal">{item.name}</h3>
                                <p className="mt-2 text-charcoal-light">{item.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Alignment" title="The Philosophy Behind Our Operating System" description="VELOCITY™ is our operating model — the way we build. THRIVE is our philosophy — the way we think. Together, they power how Akin designs and deploys enterprise-grade intelligence." align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto space-y-4">
                    <div className="p-6 bg-stone rounded-lg text-center">
                        <p className="text-sm font-bold uppercase tracking-wider text-charcoal-light">Why we build this way</p>
                        <p className="text-2xl font-bold text-charcoal">THRIVE Philosophy</p>
                    </div>
                     <div className="p-6 bg-stone rounded-lg text-center">
                        <p className="text-sm font-bold uppercase tracking-wider text-charcoal-light">How we build</p>
                        <p className="text-2xl font-bold text-charcoal">VELOCITY™ Operating Model</p>
                    </div>
                     <div className="p-6 bg-stone rounded-lg text-center">
                        <p className="text-sm font-bold uppercase tracking-wider text-charcoal-light">What we build</p>
                        <p className="text-2xl font-bold text-charcoal">The Akin Platform</p>
                    </div>
                </div>
            </Section>
            
            <Section tone="dark" align="center">
                <SectionHeader
                    title="Architect With Us"
                    description="Build systems grounded in truth, humanity, rigor, innovation, courage, and excellence."
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

export default ThrivePhilosophyPage;
