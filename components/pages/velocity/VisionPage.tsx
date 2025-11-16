import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { CpuChipIcon, SparklesIcon, CogIcon, ChartBarIcon, BuildingOffice2Icon, CodeBracketIcon, UserGroupIcon } from '@heroicons/react/24/outline';
// FIX: Added missing import for CallToActionSection.
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'Enterprise Intelligence Map', description: 'Mapping where decisions get made, by whom, and with what data across the enterprise.' },
    { name: 'Domain & Ontology Scoping', description: 'Defining the core concepts and relationships that matter to your business.' },
    { name: 'Value Architecture', description: 'A prioritized portfolio of use cases, each with a clear ROI and feasibility assessment.' },
    { name: 'Vision Architecture Diagram', description: 'A clear blueprint of what the end-state cognitive platform will look like.' },
    { name: 'VELOCITY™ Rollout Roadmap', description: 'A phased plan detailing what gets built and when, ensuring incremental value delivery.' },
];

const team = [
    { role: 'Client CIO/CTO', responsibility: 'Owns long-term architecture decisions and technology alignment.' },
    { role: 'Client Business Leaders', responsibility: 'Provide the deep domain expertise and define strategic business outcomes.' },
    { role: 'Akin Principal Architect', responsibility: 'Leads the design of the cognitive operating model and ensures technical feasibility.' },
    { role: 'Akin Engagement Lead', responsibility: 'Manages the strategic partnership and ensures alignment on value and outcomes.' },
];

const VisionPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Vision Architecture',
        description: 'In Vision Architecture, we define the cognitive operating model for your business: the domains, decisions, data, and agents that will power your next decade.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · VISION ARCHITECTURE"
                title="Architect the Vision for Enterprise Intelligence."
                subtitle="In Vision Architecture, we define the cognitive operating model for your business: the domains, decisions, data, and agents that will power your next decade."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="V" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Vision Architecture is the foundational first phase of the VELOCITY™ lifecycle. It is where we collaboratively design the strategic and technical blueprint for your entire Cognitive Agent Platform, ensuring every subsequent phase is aligned to a single, coherent vision of enterprise intelligence.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="AI is Stuck in Slides and Siloed Experiments" description="Most enterprises lack a coherent, enterprise-wide view of where and how intelligence should be embedded into the operating model. This leads to scattered proofs-of-concept, a lack of a shared language between the C-suite and technical teams, and no clear, architected path from today's state to the future cognitive enterprise." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Vision Architecture Looks Like in Practice" description="This is an intensive, collaborative phase where Akin's senior architects embed with your leadership. Through a series of structured workshops, we move from high-level strategy to a concrete, actionable blueprint. We map your current state, define the future state architecture, and build the value-driven case for change, ensuring the 'why' is as clear as the 'what' before any code is written." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Vision Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Connecting the Vision to the Architecture" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                    <Card><CpuChipIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Unified Ontology</h4><p className="text-sm text-charcoal-light">Defines the boundaries and core concepts for the first version of the ontology.</p></Card>
                    <Card><SparklesIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Cognitive Agents</h4><p className="text-sm text-charcoal-light">Identifies and prioritizes the initial set of agents to be built and the decisions they will own.</p></Card>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="A Partnership of Experts" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Co-Creation and Architectural Rigor" description="Our style is deeply collaborative, facilitated through executive workshops and deep-dive sessions with your subject matter experts. We act as your strategic partner, bringing architectural discipline to your vision and ensuring the final blueprint is both ambitious and achievable." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="Clarity, Alignment, and a Clear Path Forward" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><h4 className="font-bold text-charcoal">An Aligned Vision</h4><p className="text-sm text-charcoal-light">A single, shared picture of what AI will do for the enterprise.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">A Prioritized Roadmap</h4><p className="text-sm text-charcoal-light">An architected, value-driven path from today to the future state.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Leadership Buy-In</h4><p className="text-sm text-charcoal-light">Cross-functional alignment between business, technology, and risk leaders.</p></Card>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="From Blueprint to Build" description="The Vision Architecture phase culminates in a comprehensive blueprint. This detailed plan directly feeds into the E – Engineering the Core phase, where our engineers begin building the foundational data plane and ontology defined in the vision." align="center" maxWidth="lg" />
                <div className="mt-8 text-center"><Button to="/velocity/engineering">Next: Engineer the Core</Button></div>
            </Section>
            
            <CallToActionSection title="Ready to Align on Your Vision Architecture?" subtitle="Let's build the blueprint for your cognitive enterprise together." buttonText="Talk to an Architect" />
        </div>
    );
};

export default VisionPage;
