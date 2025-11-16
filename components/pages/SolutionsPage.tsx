
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useSEO } from '../seo/useSEO';
import { Link } from 'react-router-dom';
import {
    WrenchScrewdriverIcon,
    TruckIcon,
    ShoppingCartIcon,
    BoltIcon,
    CodeBracketSquareIcon,
    CircleStackIcon,
    CloudIcon,
    ShieldCheckIcon,
    ArrowRightIcon,
    CpuChipIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

const solutionGroups = [
    {
        category: 'Operational Intelligence',
        solutions: [
            { name: 'Predictive Maintenance', href: '/solutions/predictive-maintenance', description: 'From unexpected failures to predictive control of your most critical assets.', icon: WrenchScrewdriverIcon },
            { name: 'Supply Chain Optimization', href: '/solutions/supply-chain', description: 'Build a resilient, predictive supply chain with an intelligent digital twin.', icon: TruckIcon },
            { name: 'Digital Commerce Intelligence', href: '/solutions/digital-commerce', description: 'Architect intelligent, scalable commerce platforms from supply chain to checkout.', icon: ShoppingCartIcon },
            { name: 'Autonomous Operations', href: '/solutions/autonomous-operations', description: 'Deploy cognitive agents to run core business processes with minimal human intervention.', icon: BoltIcon },
        ]
    },
    {
        category: 'Enterprise Architecture',
        solutions: [
            { name: 'Digital Engineering', href: '/solutions/digital-engineering', description: 'Architect and build the robust, scalable software platforms that form your digital core.', icon: CodeBracketSquareIcon },
            { name: 'Data & Analytics Modernization', href: '/solutions/data-analytics', description: 'Turn fragmented data into a high-performance, trusted asset ready for AI.', icon: CircleStackIcon },
            { name: 'Cloud & Infrastructure Engineering', href: '/solutions/cloud-infrastructure', description: 'Build the secure, scalable cloud foundations that power mission-critical AI systems.', icon: CloudIcon },
            { name: 'Cybersecurity & AI Trust', href: '/solutions/cybersecurity', description: 'Protect your AI-driven enterprise with an intelligent, data-centric approach to security.', icon: ShieldCheckIcon },
        ]
    },
    {
        category: 'Intelligence Systems',
        solutions: [
            { name: 'AI & Cognitive Intelligence', href: '/solutions/ai-cognitive-intelligence', description: 'Move AI from experimental to operational with mission-critical systems.', icon: CpuChipIcon },
            { name: 'Intelligent Automation', href: '/solutions/intelligent-automation', description: 'Automate complex, end-to-end business operations with AI and a Unified Ontology.', icon: SparklesIcon },
        ]
    }
];

const SolutionsPage: React.FC = () => {
    useSEO({
        title: 'Architected Solutions for the Cognitive Enterprise',
        description: 'Ten interoperable solutions, one unified cognitive architecture. Explore Akin\'s architected solutions for modern enterprise complexity.',
        keywords: 'cognitive agent solutions, enterprise ai, operational intelligence, ai architecture, autonomous operations'
    });

  return (
    <div className="bg-white">
        <Hero
            breadcrumb="SOLUTIONS"
            title="Architected Solutions for the Cognitive Enterprise."
            subtitle="Ten interoperable solutions, one unified cognitive architecture."
        />
        
        <Section tone="soft">
            <div className="max-w-4xl mx-auto text-center">
                <SectionHeader
                    eyebrow="THE PROPOSITION"
                    title="Operational transformation, delivered through architecture."
                    description="Each Akin solution is powered by the Cognitive Agent Platform — the unified ontology, MLOps engine, cognitive agents, and command center that bring intelligence into real operations."
                    align="center"
                    maxWidth="lg"
                />
            </div>
        </Section>
        
        <Section tone="light">
            {solutionGroups.map(group => (
                <div key={group.category} className="mb-16 last:mb-0">
                    <h2 className="text-2xl font-bold text-charcoal mb-8 text-center md:text-left">{group.category}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {group.solutions.map(solution => (
                            <Link to={solution.href} key={solution.name} className="block group">
                                <Card className="h-full flex flex-col">
                                    <div className="flex items-start gap-4">
                                        <solution.icon className="h-8 w-8 text-electric-blue flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-light">SOLUTION</p>
                                            <h3 className="text-xl font-bold text-charcoal">{solution.name}</h3>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-charcoal-light flex-grow">{solution.description}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-200/80">
                                        <span className="font-semibold text-electric-blue flex items-center gap-2 transition-transform group-hover:translate-x-1">
                                            Explore
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </Section>
        
        <Section tone="dark" align="center">
            <SectionHeader
                title="Your enterprise deserves architectural intelligence."
                description="Let’s design the cognitive system that powers your next decade of growth."
                align="center"
                maxWidth="md"
            />
             <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button to="/contact">Talk to an Architect</Button>
                <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore Platform</Button>
            </div>
        </Section>
    </div>
  );
};

export default SolutionsPage;
