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
    { name: 'Embedded Joint Squads', description: 'Blended teams of client operators, engineers, and Akin specialists.' },
    { name: 'Operational Playbooks & Runbooks', description: 'Shared guides for daily use, exception handling, and escalation.' },
    { name: 'Adoption & Training Programs', description: 'Structured sessions, materials, and coaching to build internal confidence.' },
    { name: 'Continuous Improvement Backlog', description: 'A prioritized, jointly managed backlog of enhancements and refinements.' },
    { name: 'Value Realization Reports', description: 'Regular reporting to leadership on platform impact vs. expectations.' },
    { name: 'Knowledge Transfer Packages', description: 'Documentation, architecture maps, and training for internal platform owners.' },
];

const platformIntegration = [
    { name: 'Unified Ontology', description: 'Co-evolving concepts as the business changes.', icon: CpuChipIcon },
    { name: 'MLOps Engine', description: 'Jointly managing model updates and retrains.', icon: CogIcon },
    { name: 'Cognitive Agents', description: 'Refining policies and behaviors based on user feedback.', icon: SparklesIcon },
    { name: 'Command Center', description: 'Shared use of monitoring, approvals, and overrides.', icon: ChartBarIcon },
];

const team = [
    { role: 'Client Operations Leaders', responsibility: 'Champion adoption and provide strategic direction.' },
    { role: 'Client Analysts / Operators', responsibility: 'The primary users providing real-world feedback.' },
    { role: 'Client Product / Platform Owner', responsibility: 'Owns the internal roadmap and backlog for the platform.' },
    { role: 'Akin Engagement Lead', responsibility: 'Manages the strategic partnership and ensures value delivery.' },
    { role: 'Akin Platform / Agent Engineers', responsibility: 'Provide deep technical support and execute on the backlog.' },
    { role: 'Akin Adoption & Enablement Lead', responsibility: 'Drives training, change management, and user success.' },
];

const outcomes = [
    { name: 'Fully Trained Teams', description: 'Operators and analysts who are confident using and governing the platform.' },
    { name: 'Shared Ownership Model', description: 'Clear accountability between Akin and client teams, with a path to increasing internal ownership.' },
    { name: 'Continuous Value Realization', description: 'Ongoing tracking of KPIs, improvements, and new opportunities discovered through usage.' },
];

const CollaborationPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Collaboration & Co-Ownership',
        description: 'Akin embeds alongside your teams to operate the platform together, driving adoption, refining agents, and building your internal capability to own the system long term.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · COLLABORATION & CO-OWNERSHIP"
                title="Collaborate as One Integrated Team."
                subtitle="In Collaboration & Co-Ownership, Akin embeds alongside your teams to operate the platform together — driving adoption, refining agents, and building your internal capability to own the system long term."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="C" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Collaboration & Co-Ownership is the phase where we move from 'vendor delivering a project' to 'jointly operating a living system.' The focus shifts from deployment to adoption, from features to behaviors, and from external support to shared ownership.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="Platforms Fail When Teams Don’t Own Them." description="A platform can be perfectly engineered, but it will fail if it is not adopted and trusted by the people who must use it every day. Many systems are delivered but never fully embraced because employees feel it was 'done to them.' This creates vendor dependency and leaves the platform’s true potential unrealized." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Collaboration & Co-Ownership Looks Like in Practice" description="This is a partnership phase focused on enablement and shared accountability. We establish embedded squads, create joint operating rhythms, and provide day-in-the-life support for your operators. We manage a shared backlog for improvements and provide continuous reporting on the value being realized." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Collaboration Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Running the Platform as a Shared Asset" align="center" maxWidth="lg" />
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
                <SectionHeader eyebrow="Who’s In the Room" title="From Vendor–Client to One Team" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Partner, Not Vendor" description="We establish shared communication channels and rituals (standups, reviews, retros). We provide open telemetry and data access to your teams. We operate with full transparency on performance, incidents, and the roadmap, with a clear plan for a gradual transition of more ownership to your side." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="Adopted, Trusted, and Co-Owned" align="center" maxWidth="lg" />
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
                <SectionHeader eyebrow="What Happens Next" title="From Co-Ownership to Continuous Evolution" description="Once the platform is a stable, co-owned asset, the lifecycle moves to I – Intelligence Expansion. The focus shifts to scaling the platform's impact by expanding its scope into new business domains and maximizing its long-term value." align="center" maxWidth="lg" />
                <div className="mt-8 text-center">
                    <Button to="/velocity/intelligence">Next: Intelligence Expansion</Button>
                </div>
            </Section>
            
            <CallToActionSection title="Ready to Build a Co-Owned Cognitive Platform?" subtitle="We embed with your teams to run, refine, and extend the platform as one integrated unit." buttonText="Talk to an Architect" />
        </div>
    );
};

export default CollaborationPage;
