import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { CpuChipIcon, SparklesIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'Production Deployment Blueprint', description: 'Strategies for rollout, blue/green deployments, canary releases, and staged enablement.' },
    { name: 'System Integration Designs', description: 'Detailed patterns for integrating agents with ERP, CRM, SCADA, data warehouses, and messaging systems.' },
    { name: 'SLOs, SLIs & Error Budgets', description: 'Operational definitions of “good performance” for agents and underlying services.' },
    { name: 'Observability & Monitoring Setup', description: 'Dashboards, alerts, logs, and traces tailored to cognitive workflows.' },
    { name: 'Runbooks & Incident Playbooks', description: 'Documentation and procedures for detecting, triaging, and resolving production incidents.' },
    { name: 'Security & Compliance Validation', description: 'Confirmations that deployments meet your security, regulatory, and audit requirements.' },
];

const platformIntegration = [
    { name: 'Unified Ontology', description: 'Production-ready entities and events backing real transactions and processes.', icon: CpuChipIcon },
    { name: 'MLOps Engine', description: 'CI/CD pipelines for models and agents, including approvals and rollbacks.', icon: CogIcon },
    { name: 'Cognitive Agents', description: 'Agents now invoked in real workflows: alerts, actions, decision suggestions, or fully autonomous steps.', icon: SparklesIcon },
    { name: 'Operations Command Center', description: 'A live console where operators can observe, approve, and intervene as needed.', icon: ChartBarIcon },
];

const team = [
    { role: 'Head of Infrastructure / Platform Engineering', responsibility: 'Owns core systems.' },
    { role: 'SRE / DevOps Teams', responsibility: 'Implement and manage reliability patterns.' },
    { role: 'Security / Risk / Compliance', responsibility: 'Validate and sign off high-risk changes.' },
    { role: 'Akin Platform Engineers', responsibility: 'Design and implement deployment patterns.' },
    { role: 'Akin Site Reliability Partners', responsibility: 'Co-own SLOs and observability.' },
];

const outcomes = [
    { name: 'Production-Grade Deployments', description: 'Agents running reliably in live workflows, not just pilots.' },
    { name: 'Operational Confidence', description: 'SRE, infra, and business teams have clear visibility, controls, and playbooks.' },
    { name: 'Governed Intelligence', description: 'Deployed systems meet required standards for security, risk, and compliance.' },
];

const OperationalizationPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Operationalization at Scale',
        description: 'In Operationalization at Scale, we deploy cognitive agents into your live environment, integrating with your critical systems for real-world reliability and governance.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · OPERATIONALIZATION AT SCALE"
                title="Operationalize Cognitive Intelligence at Scale."
                subtitle="In Operationalization at Scale, we deploy cognitive agents into your live environment, integrate with your critical systems, and harden the platform for real-world load, reliability, and governance."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="O" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Operationalization at Scale is where the architecture becomes reality. We move from controlled environments to production deployments, integrating agents with systems like ERP, CRM, SCADA, and core transaction platforms — with reliability, observability, and governance built in.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="AI That Never Leaves the Lab." description="Many AI initiatives stall at 'almost ready.' Models work in notebooks and pilots, but there is no safe, repeatable way to deploy them into the live environment. Infrastructure, security, and operations teams are rightfully cautious — there’s no clear pattern for integrating cognitive systems into mission-critical workflows." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Operationalization at Scale Looks Like in Practice" description="This is a disciplined engineering phase focused on hardening agents, setting SLOs/SLIs, designing deployment strategies, integrating with real systems, and establishing observability, rollback, and incident playbooks." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Operationalization Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Connecting Agents to Live Systems" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {platformIntegration.map(item => (
                        <Card key={item.name} className="text-center">
                            <item.icon className="h-10 w-10 mx-auto text-electric-blue" />
                            <h4 className="mt-2 font-bold">{item.name}</h4>
                            <p className="text-sm text-charcoal-light">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="Engineering, Operations, and Risk Aligned" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Disciplined, Embedded, and Transparent" description="We establish joint war-rooms for go-live and stabilization, co-own dashboards, and maintain tight feedback loops with infrastructure and business teams, fostering a zero-surprise culture for launches." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="Live. Reliable. Governed." align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    {outcomes.map(item => (
                        <Card key={item.name}>
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-sm text-charcoal-light">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="From Running to Partnering" description="After Operationalization, we enter C – Collaboration & Co-Ownership, where the focus shifts from 'does it work' to 'how we run this together long term.'" align="center" maxWidth="lg" />
                <div className="mt-8 text-center">
                    <Button to="/velocity/collaboration">Next: Collaborate & Co-Own</Button>
                </div>
            </Section>
            
            <CallToActionSection title="Ready to Operationalize Your Cognitive Platform?" subtitle="We can help you design and execute a safe, scalable path from pilot to production." buttonText="Talk to an Architect" />
        </div>
    );
};

export default OperationalizationPage;
