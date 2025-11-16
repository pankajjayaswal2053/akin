
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { 
    EyeIcon, 
    WrenchScrewdriverIcon, 
    BeakerIcon, 
    RocketLaunchIcon, 
    UserGroupIcon, 
    SparklesIcon,
    ShieldCheckIcon,
    ChartPieIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const velocityPhases = [
    {
        letter: 'V',
        name: 'Vision Architecture',
        description: 'Define the Operational Intelligence Blueprint for the enterprise. Not strategy. Architecture.',
        icon: EyeIcon,
        href: '/velocity/vision',
    },
    {
        letter: 'E',
        name: 'Engineering the Core',
        description: 'Build the Unified Ontology, foundational pipelines, and real-time data structures.',
        icon: WrenchScrewdriverIcon,
        href: '/velocity/engineering',
    },
    {
        letter: 'L',
        name: 'Logic & Cognitive Intelligence',
        description: 'Develop Cognitive Agents, reasoning systems, ML models, and decision policies.',
        icon: BeakerIcon,
        href: '/velocity/logic',
    },
    {
        letter: 'O',
        name: 'Operationalization at Scale',
        description: 'Deploy the entire architecture into the client’s operational environment.',
        icon: RocketLaunchIcon,
        href: '/velocity/operationalization',
    },
    {
        letter: 'C',
        name: 'Collaboration & Co-Ownership',
        description: 'Akin embeds with client teams to run the new cognitive system.',
        icon: UserGroupIcon,
        href: '/velocity/collaboration',
    },
    {
        letter: 'I',
        name: 'Intelligence Expansion',
        description: 'The system expands into new domains, new ontologies, and new agents.',
        icon: SparklesIcon,
        href: '/velocity/intelligence',
    },
    {
        letter: 'T',
        name: 'Trust & Governance',
        description: 'Ensures AI safety, auditability, compliance, and policy integrity.',
        icon: ShieldCheckIcon,
        href: '/velocity/trust',
    },
    {
        letter: 'Y',
        name: 'Yield & Value Realization',
        description: 'Measure enterprise-wide impact + ensure long-term compounding ROI.',
        icon: ChartPieIcon,
        href: '/velocity/yield',
    },
];

const VelocityApproachPage: React.FC = () => {
  return (
    <div className="bg-white">
        <Hero
            breadcrumb='How We Do It'
            title='The VELOCITY™ Operating Model'
            subtitle="Our proprietary methodology engine for designing, building, deploying, and governing Cognitive Agent Platforms at enterprise scale."
        />
        
        <Section tone="soft">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    eyebrow="Architectural Rigor"
                    title="This is not a delivery cycle — this is an enterprise cognitive operating model."
                    description="VELOCITY™ is a unified system for designing, building, deploying, and governing Cognitive Agent Platforms. It elevates a simple process into a proprietary methodology, combining architectural rigor, cognitive systems engineering, and enterprise lifecycle governance into one cohesive framework."
                    align="center"
                    maxWidth="lg"
                />
            </div>
        </Section>

        <Section tone="light">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {velocityPhases.map((phase) => (
                    <motion.div
                        key={phase.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to={phase.href} className="block h-full group">
                            <Card className="h-full flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center">
                                    <phase.icon className="h-10 w-10 text-electric-blue" />
                                </div>
                                <p className="mt-4 text-6xl font-extrabold text-charcoal/10">{phase.letter}</p>
                                <h3 className="text-xl font-bold text-charcoal -mt-4">{phase.name}</h3>
                                <p className="mt-2 text-charcoal-light flex-grow">{phase.description}</p>
                                <span className="mt-4 font-semibold text-electric-blue transition-transform group-hover:translate-x-1">
                                    Explore Phase &rarr;
                                </span>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Section>

        <CallToActionSection
            title="Ready to Build with VELOCITY™?"
            subtitle="Our approach is designed to deliver compounding value at every stage. Let's discuss how we can apply this operating model to your most critical business challenges."
            buttonText="Architect Your VELOCITY™ Plan"
            buttonLink="/contact"
        />
    </div>
  );
};

export default VelocityApproachPage;
