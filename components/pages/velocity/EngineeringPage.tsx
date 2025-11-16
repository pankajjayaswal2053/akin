import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { CpuChipIcon, SparklesIcon, CogIcon, ChartBarIcon, BuildingOffice2Icon, CodeBracketIcon, UserGroupIcon, ServerStackIcon } from '@heroicons/react/24/outline';
// FIX: Added missing import for CallToActionSection.
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'Unified Ontology Schema', description: 'The v1.0 implementation of the ontology, modeling the key domains defined in the Vision phase.' },
    { name: 'Data Pipelines & Ingestion Architecture', description: 'Production-grade, streaming pipelines connecting your key source systems to the data plane.' },
    { name: 'Identity & Access Controls', description: 'A robust security framework to ensure governed, secure data usage by humans and agents.' },
    { name: 'MLOps Platform Setup', description: 'The core infrastructure for experimentation, deployment, and monitoring of all future models and agents.' },
    { name: 'Golden Path Engineering Patterns', description: 'Clear, documented patterns for how to build and deploy new capabilities on the core platform.' },
];

const team = [
    { role: 'Client Data & Platform Engineers', responsibility: 'Provide expertise on source systems and collaborate on integration.' },
    { role: 'Client Security & Infrastructure', responsibility: 'Ensure the new architecture meets all enterprise security and compliance standards.' },
    { role: 'Akin Platform & Data Engineers', responsibility: 'Lead the hands-on-keyboard build of the data plane, pipelines, and ontology.' },
    { role: 'Akin MLOps Engineers', responsibility: 'Build and configure the automated MLOps engine for model and agent lifecycle management.' },
];

const EngineeringPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Engineering the Core',
        description: 'In Engineering the Core, we build the ontology, data plane, and integration fabric that make enterprise intelligence possible.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · ENGINEERING THE CORE"
                title="Engineer the Core of Your Cognitive Platform."
                subtitle="In Engineering the Core, we build the ontology, data plane, and integration fabric that make enterprise intelligence possible. This is where the architectural blueprint from the Vision phase becomes a production-grade reality."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="E" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Engineering the Core is the intensive build phase of the VELOCITY™ lifecycle. Our world-class engineers take the Vision Architecture blueprint and construct the robust, scalable, and secure foundation upon which all future intelligence will be built.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="Data is Fragmented and Not Ready for AI" description="Most enterprises suffer from brittle, ad-hoc integrations and data that is trapped in legacy systems. There is no real-time, unified data plane for cognitive agents to reason on, forcing AI teams to spend 80% of their time fighting with infrastructure and data cleaning instead of building intelligence." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Engineering the Core Looks Like in Practice" description="This is a hands-on-keyboard engineering phase focused on building the 'central nervous system' of your platform. We deploy the cloud infrastructure, build the data pipelines, and implement the v1.0 of the Unified Ontology. We also build the MLOps engine, creating the automated 'factory' for all future AI development." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Engineering Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Constructing the Foundational Pillars" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                    <Card><CpuChipIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Unified Ontology</h4><p className="text-sm text-charcoal-light">This phase builds the live, production version of the ontology schema.</p></Card>
                    <Card><CogIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">MLOps Engine</h4><p className="text-sm text-charcoal-light">We construct the core MLOps pipelines that will be used to build agents in the next phase.</p></Card>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="A Partnership of Builders" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Agile, Collaborative, and Secure by Design" description="We work in agile sprints, collaborating closely with your internal platform and security teams. We follow DevSecOps best practices, ensuring that security and governance are automated and built into the infrastructure from day one. You have full visibility into our progress through shared backlogs and regular demos." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="A Production-Grade Foundation for Intelligence" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><h4 className="font-bold text-charcoal">A Live Core Platform</h4><p className="text-sm text-charcoal-light">A production-grade foundation ready to support all future work.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Reduced Complexity</h4><p className="text-sm text-charcoal-light">A clean, documented set of integrations replacing brittle point-to-point connections.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Accelerated Development</h4><p className="text-sm text-charcoal-light">Clear patterns that enable your teams to build new capabilities faster.</p></Card>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="From Foundation to Intelligence" description="With the core platform engineered and live, the focus shifts to building the reasoning layer. The Unified Ontology and MLOps Engine directly enable the L – Logic & Cognitive Intelligence phase, where we begin developing the bespoke models and agents." align="center" maxWidth="lg" />
                <div className="mt-8 text-center"><Button to="/velocity/logic">Next: Build the Logic</Button></div>
            </Section>
            
            <CallToActionSection title="Ready to Engineer Your Core?" subtitle="Let's build the robust, scalable foundation that will power your cognitive enterprise." buttonText="Talk to an Architect" />
        </div>
    );
};

export default EngineeringPage;
