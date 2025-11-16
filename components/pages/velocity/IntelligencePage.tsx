import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { CpuChipIcon, SparklesIcon, ShareIcon, ChartBarIcon } from '@heroicons/react/24/outline';
// FIX: Added missing import for CallToActionSection.
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'Adjacent Domain Identification', description: 'Analyzing the business to find the next highest-value domains to connect to the ontology.' },
    { name: 'Ontology Expansion Planning', description: 'Architecting how new concepts and relationships will be integrated into the existing ontology.' },
    { name: 'New Agent Scoping & Prioritization', description: 'Designing the next fleet of cognitive agents that will operate in these new domains.' },
    { name: 'Reuse Catalog Development', description: 'Creating a library of existing models, components, and data pipelines to accelerate new development.' },
    { name: 'Cross-Domain Architecture Updates', description: 'Evolving the platform architecture to support more complex, cross-functional reasoning.' },
];

const team = [
    { role: 'Client Strategy & Business Leaders', responsibility: 'Identify new strategic priorities and business challenges to tackle.' },
    { role: 'Client Enterprise Architects', responsibility: 'Ensure the expanding platform aligns with the long-term enterprise technology roadmap.' },
    { role: 'Akin Principal Architect', responsibility: 'Leads the design for ontology expansion and cross-domain agent interaction.' },
    { role: 'Joint Platform Squad', responsibility: 'The embedded client/Akin team that executes the expansion roadmap.' },
];

const IntelligencePage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Intelligence Expansion',
        description: 'In Intelligence Expansion, we extend the ontology, agents, and architecture into new domains, creating compounding value across your business.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · INTELLIGENCE EXPANSION"
                title="Expand Intelligence Across Your Enterprise."
                subtitle="In Intelligence Expansion, we extend the ontology, agents, and architecture into new domains, creating compounding value across your business. This is how the platform becomes the central nervous system of your entire enterprise."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="I" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Intelligence Expansion is the strategic growth phase of the VELOCITY™ lifecycle. Here, we leverage the now-stable and co-owned core platform to scale its impact, moving from solving a single, high-value problem to transforming multiple functions across the business.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="AI Value is Trapped in a Single Silo" description="Many successful AI projects stall after their initial deployment. The value they create remains isolated in one department, and there is no clear strategy for leveraging the investment across the wider enterprise. Each new use case is treated as a brand new, one-off project, negating any potential for economies of scale." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Intelligence Expansion Looks Like in Practice" description="This phase is a continuous cycle of strategic planning and agile execution. We work with your leadership in quarterly business reviews to identify the next most valuable business domains to bring into the ontology. We then architect and execute the expansion, creating new cognitive agents that can reason across functions (e.g., connecting supply chain data to financial forecasting)." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Expansion Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Evolving the Platform's Reach and Intelligence" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                    <Card><CpuChipIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Unified Ontology</h4><p className="text-sm text-charcoal-light">The ontology grows to cover more of the business, becoming a true enterprise-wide digital twin.</p></Card>
                    <Card><SparklesIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Cognitive Agents</h4><p className="text-sm text-charcoal-light">New agents are deployed, and existing agents begin to reason across multiple functions.</p></Card>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="A Partnership for Strategic Growth" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Strategic Roadmapping, Agile Execution" description="We use a dual-track approach. In strategic planning sessions with leadership, we build the long-term roadmap. In parallel, our embedded squads execute on that roadmap in agile sprints, delivering new capabilities and expanding the platform's footprint incrementally and safely." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="Compounding Value and Enterprise-Wide Transformation" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><h4 className="font-bold text-charcoal">Increased ROI</h4><p className="text-sm text-charcoal-light">More business functions benefit from the same core architectural investment.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Economies of Scale</h4><p className="text-sm text-charcoal-light">New AI capabilities are developed faster and cheaper by reusing existing components.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Cross-Domain Intelligence</h4><p className="text-sm text-charcoal-light">The ability to make decisions that optimize the entire business, not just one silo.</p></Card>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="From Expansion to Fortification" description="As the platform's reach and autonomy grow, ensuring its safety, security, and compliance becomes paramount. This phase naturally flows into T – Trust & Governance, where we implement the robust frameworks required to manage an enterprise-scale cognitive system." align="center" maxWidth="lg" />
                <div className="mt-8 text-center"><Button to="/velocity/trust">Next: Embed Trust & Governance</Button></div>
            </Section>
            
            <CallToActionSection title="Ready to Scale Your Intelligence?" subtitle="Let's build the roadmap to expand your cognitive capabilities across the enterprise, creating compounding returns on your investment." buttonText="Talk to an Architect" />
        </div>
    );
};

export default IntelligencePage;
