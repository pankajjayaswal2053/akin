import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { CpuChipIcon, SparklesIcon, CogIcon, ChartBarIcon, CodeBracketIcon, UserGroupIcon, BeakerIcon } from '@heroicons/react/24/outline';
// FIX: Added missing import for CallToActionSection.
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'Cognitive Agent Designs', description: 'Defining the roles, responsibilities, and decision boundaries for each autonomous agent.' },
    { name: 'Reasoning Graphs & Decision Policies', description: 'Encoding your complex business logic and rules into a formal, testable structure.' },
    { name: 'Model Development & Training Pipelines', description: 'Building the bespoke ML models that power agent perception and prediction.' },
    { name: 'Evaluation Frameworks', description: 'Rigorous testing for model accuracy, robustness, fairness, and business impact.' },
    { name: 'Simulation Environments', description: 'Testing agent behavior in a safe, virtual "digital twin" environment before production deployment.' },
];

const team = [
    { role: 'Client Subject Matter Experts', responsibility: 'Provide the deep domain knowledge and business logic that will be encoded into agents.' },
    { role: 'Client Data Scientists', responsibility: 'Collaborate on model development and validation, ensuring alignment with internal standards.' },
    { role: 'Akin ML Engineers', responsibility: 'Lead the design and build of cognitive agents, models, and MLOps pipelines.' },
    { role: 'Akin Responsible AI Lead', responsibility: 'Ensures all models are rigorously tested for fairness, bias, and explainability.' },
];

const LogicPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Logic & Cognitive Intelligence',
        description: 'In Logic & Cognitive Intelligence, we design the models, decision flows, and agents that reason over your ontology and drive real-time decisions.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · LOGIC & COGNITIVE INTELLIGENCE"
                title="Build the Logic That Powers Cognitive Intelligence."
                subtitle="In Logic & Cognitive Intelligence, we design the models, decision flows, and agents that reason over your ontology and drive real-time decisions. This is where we build the 'brains' of your operation."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="L" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Logic & Cognitive Intelligence is the phase where we transform the unified data from the core platform into actionable intelligence. Our ML Engineers and Data Scientists build the reasoning layer that will power your autonomous operations.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="Models Exist as Isolated, Untrusted 'Science Projects'" description="Most AI models are built as proofs-of-concept that are disconnected from real business logic and operational context. They lack a consistent framework for encoding business rules, have no clear path to production, and are often treated as untrusted 'black boxes' by the business." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Logic & Cognitive Intelligence Looks Like in Practice" description="This is a data science and engineering phase focused on building a trusted, governed reasoning layer. We don't just build a model; we design a complete Cognitive Agent, including its goals, the data it can access from the ontology, and the actions it can take. We build this within a robust MLOps framework to ensure it is testable, deployable, and reliable." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Logic Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Building on the Core, Preparing for Operation" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><CpuChipIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Unified Ontology</h4><p className="text-sm text-charcoal-light">Serves as the rich, contextual data source for model training and agent reasoning.</p></Card>
                    <Card><CogIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">MLOps Engine</h4><p className="text-sm text-charcoal-light">Used to build, train, and version control the models and agents created in this phase.</p></Card>
                    <Card><ChartBarIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Command Center</h4><p className="text-sm text-charcoal-light">Early prototypes and model results are surfaced here for review by subject matter experts.</p></Card>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="A Partnership of Domain and AI Experts" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Rigorous Science, Disciplined Engineering" description="Our methodology blends the exploratory nature of data science with the discipline of software engineering. We work in sprints, closely collaborating with your domain experts to ensure the logic we build accurately reflects your business. Every model and agent undergoes a rigorous peer review and validation process before being considered ready for deployment." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="A Validated, Deployable Intelligence Layer" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><h4 className="font-bold text-charcoal">Validated Cognitive Agents</h4><p className="text-sm text-charcoal-light">A set of trusted, tested agents ready for production deployment.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">A Structured Reasoning Framework</h4><p className="text-sm text-charcoal-light">A consistent way to build, test, and refine intelligence across the enterprise.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Reduced 'Science Project' Risk</h4><p className="text-sm text-charcoal-light">Confidence that the intelligence being built is operationally relevant and technically sound.</p></Card>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="From Logic to Live Operations" description="With a set of validated cognitive agents, the stage is set for deployment. This phase directly enables O – Operationalization at Scale, where we will integrate these agents into your live business environment and connect them to your operational systems." align="center" maxWidth="lg" />
                <div className="mt-8 text-center"><Button to="/velocity/operationalization">Next: Operationalize at Scale</Button></div>
            </Section>
            
            <CallToActionSection title="Ready to Build Your Reasoning Layer?" subtitle="Let's transform your data into a fleet of intelligent agents ready to power your operations." buttonText="Talk to an Architect" />
        </div>
    );
};

export default LogicPage;
