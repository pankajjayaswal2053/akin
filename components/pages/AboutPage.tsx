import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import Button from '../ui/Button';
import { 
    CpuChipIcon, 
    SparklesIcon, 
    CogIcon, 
    ChartBarIcon, 
    AcademicCapIcon, 
    ChartPieIcon,
    ShieldCheckIcon,
    HandRaisedIcon,
    UserGroupIcon,
    KeyIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import { useSEO } from '../seo/useSEO';
import { Link } from 'react-router-dom';
import VelocityBar from '../ui/VelocityBar';
import ThriveBar from '../ui/ThriveBar';
import OptimizedImage from '../ui/OptimizedImage';

const identityPillars = [
    { name: 'Architectural Thinking', description: 'Precision frameworks, system maps, and executive alignment.' , icon: AcademicCapIcon },
    { name: 'Deep Engineering', description: 'Ontologies, data platforms, models, and cognitive agents.', icon: CogIcon },
    { name: 'Outcome Obsession', description: 'Financial, operational, and strategic results, not just experiments.', icon: ChartPieIcon },
];

const platformPillars = [
    { name: "Unified Ontology", icon: CpuChipIcon },
    { name: "MLOps Engine", icon: CogIcon },
    { name: "Cognitive Agents", icon: SparklesIcon },
    { name: "Operations Command Center", icon: ChartBarIcon }
];

const newValues = [
    { name: 'Clarity', description: 'Simplicity in architecture.', icon: KeyIcon },
    { name: 'Discipline', description: 'Precision in execution.', icon: ShieldCheckIcon },
    { name: 'Stewardship', description: 'We treat client systems as our own.', icon: HandRaisedIcon },
    { name: 'Courage', description: 'Bold, evidence-based decisions.', icon: UserGroupIcon },
];

const offices = [
    { name: 'Singapore (HQ)', flag: '🇸🇬' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Nepal', flag: '🇳🇵' },
];

const AboutPage: React.FC = () => {
    useSEO({
        title: 'About Akin: Architects of Intelligence',
        description: 'Akin is a global architectural intelligence firm. We design and engineer the cognitive systems that power the next generation of enterprises.'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="WHO WE ARE"
                title="We Are Architects of Intelligence."
                subtitle="Akin is a global architectural intelligence firm. We design and engineer the cognitive systems that power the next generation of enterprises."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/how-we-do-it" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore How We Work</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Who We Are"
                    title="A New Breed of Firm: Consulting Precision, Engineering Depth, Cognitive Intelligence."
                    description="Akin was created to fill the gap between traditional strategy firms that don’t build, and engineering firms that lack strategic clarity. We combine architecture, AI, engineering, ontology, and design into a single, integrated discipline — one built specifically for the Cognitive Era."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {identityPillars.map(pillar => (
                        <Card key={pillar.name} className="text-center">
                            <pillar.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-charcoal">{pillar.name}</h3>
                            <p className="mt-2 text-charcoal-light">{pillar.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="Purpose"
                    title="To Enable Enterprises to Think, Decide, and Act With Intelligence."
                    description="We believe intelligence should run through an enterprise the way electricity runs through a city: Predictive. Coordinated. Available everywhere. Our purpose is to architect the systems — and the philosophy — that make this possible."
                    align="center"
                    maxWidth="lg"
                />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Our Philosophy" title="THRIVE — Our Guiding Principles for Enduring Intelligence." align="center" maxWidth="lg" />
                <div className="mt-8"><ThriveBar activePhase={'T'} /></div>
                <div className="mt-8 text-center"><Button to="/thrive">Explore THRIVE</Button></div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Deliver" title="A Disciplined Operating Model for Building Cognitive Systems." description="VELOCITY™ is our end-to-end system for architecting, engineering, deploying, and evolving AI-driven platforms inside the enterprise." align="center" maxWidth="lg" />
                <div className="mt-8"><VelocityBar activePhase={'V'} /></div>
                <div className="mt-8 text-center"><Button to="/velocity-approach">Explore VELOCITY™</Button></div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader eyebrow="What We Build" title="The Akin Platform — Architecture for the Cognitive Enterprise." align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-4 gap-8">
                    {platformPillars.map(pillar => (
                        <Card key={pillar.name} className="text-center">
                            <pillar.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-charcoal">{pillar.name}</h3>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 text-center"><Button to="/platform">Explore the Platform</Button></div>
            </Section>
            
            {/* Founder Spotlight Section */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="Founder"
                    title="Leadership Rooted in Architectural Thinking"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <OptimizedImage src="/images/suren.jpg" alt="Portrait of Suren Amarasekera" width={200} height={200} className="w-48 h-48 rounded-full object-cover grayscale" />
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <p className="text-charcoal-light">Akin was founded by Suren Amarasekera, a technologist and strategist with more than 30 years of experience leading large technology organizations across Asia. His career at companies such as SingTel, Axiata, and the Usaha Tegas Group revealed a consistent problem: businesses were adapting to technology, instead of technology being architected around the business. Akin exists to change that.</p>
                        <div className="mt-4">
                            <Link to="/leadership" className="font-semibold text-electric-blue inline-flex items-center gap-2 group">
                                View Leadership <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Stand For" title="Values That Shape Our Work." align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-4 gap-8">
                    {newValues.map(value => (
                         <Card key={value.name} className="text-center">
                            <value.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-charcoal">{value.name}</h3>
                            <p className="mt-2 text-charcoal-light">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Global Presence" title="A Global Network, Architected for Scale." align="center" maxWidth="lg" />
                <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
                    {offices.map(office => (
                        <div key={office.name} className="flex items-center gap-3">
                            <span className="text-3xl" aria-hidden="true">{office.flag}</span>
                            <span className="text-lg font-semibold text-charcoal">{office.name}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="Let's Build Something Transformational"
                    title="Partner With the Architects of Intelligence."
                    description="Let's discuss how we can architect the cognitive system that will power your enterprise's next decade of growth."
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

export default AboutPage;
