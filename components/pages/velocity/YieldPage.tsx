import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { ChartPieIcon, SparklesIcon, CogIcon, ChartBarIcon, BuildingOffice2Icon, CodeBracketIcon, UserGroupIcon, ServerStackIcon } from '@heroicons/react/24/outline';
// FIX: Added missing import for CallToActionSection.
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'KPI & Metric Definition', description: 'Defining the precise operational, financial, and risk metrics that measure the platform’s impact.' },
    { name: 'ROI Dashboards', description: 'Building executive-level dashboards that clearly visualize cost reduction, revenue generation, and risk mitigation.' },
    { name: 'Executive-Level Reporting Packs', description: 'Creating the materials for Quarterly Business Reviews (QBRs) to communicate value to the board and C-suite.' },
    { name: 'Continuous Roadmap Prioritization', description: 'Using realized value and ROI data to steer the backlog and prioritize the next cycle of VELOCITY™.' },
    { name: 'Value-Sharing & Funding Models', description: 'Developing models to justify continued investment and showcase the platform as a profit center.' },
];

const team = [
    { role: 'Client CFO & Finance Team', responsibility: 'Validate the financial models and confirm the realized ROI.' },
    { role: 'Client Business & Strategy Leads', responsibility: 'Use value data to prioritize the next set of strategic business challenges.' },
    { role: 'Akin Engagement Lead', responsibility: 'Leads the value realization process and presents findings to executive leadership.' },
    { role: 'Joint Platform Squad', responsibility: 'Instruments the platform to ensure all necessary value metrics are captured accurately.' },
];

const YieldPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Yield & Value Realization',
        description: 'In Yield & Value Realization, we quantify impact across operations, finance, and risk — and use that insight to steer the roadmap.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · YIELD & VALUE REALIZATION"
                title="Realize and Compound the Yield from Your Cognitive Platform."
                subtitle="In Yield & Value Realization, we quantify impact across operations, finance, and risk — and use that insight to steer the roadmap. This is how we prove the value of your investment and justify its expansion."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="Y" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Yield & Value Realization is the culminating phase of the VELOCITY™ lifecycle, where we measure what matters. This is a continuous, data-driven discipline focused on quantifying the platform's ROI and ensuring the cognitive system is delivering on its strategic and financial promises.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="AI is Treated as a Cost Center, Not a Strategic Asset" description="Many AI investments fail to prove their worth. The conversation gets stuck on the high cost of development, with no clear, credible way to track ROI. This makes it impossible to have productive conversations with the CFO and the board, stalling further investment and relegating AI to a perpetual 'R&D expense'." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Yield & Value Realization Looks Like in Practice" description="This is a finance and strategy-focused phase. We partner with your finance and business teams to instrument the platform for value measurement. We build ROI dashboards that track the KPIs defined back in the Vision phase. These CFO-credible metrics become the language for communicating the platform's success and making data-driven decisions about where to invest next." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Yield Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Instrumenting the Platform for Value" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                    <Card><ChartBarIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Command Center</h4><p className="text-sm text-charcoal-light">Evolves to include executive-level ROI and value dashboards, not just technical health metrics.</p></Card>
                    <Card><SparklesIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Cognitive Agents</h4><p className="text-sm text-charcoal-light">Agents are instrumented to log data on their impact (e.g., 'cost saved,' 'time reduced').</p></Card>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="A Partnership of Finance and Strategy" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Data-Driven Storytelling" description="We act as your partners in communicating value to the business. We don't just provide raw data; we help you craft the data-driven narrative that clearly demonstrates how the cognitive platform is creating a measurable competitive advantage. This is done through formal Quarterly Business Reviews (QBRs) with your executive team." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="A Virtuous Cycle of Investment and Return" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><h4 className="font-bold text-charcoal">Clear Visibility into ROI</h4><p className="text-sm text-charcoal-light">Credible, CFO-approved metrics that prove the platform's value.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Justification for Investment</h4><p className="text-sm text-charcoal-light">The ability to justify and secure funding for continued expansion.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Data-Driven Roadmap</h4><p className="text-sm text-charcoal-light">The next VELOCITY™ cycle is prioritized based on proven value, not guesswork.</p></Card>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="Closing the Loop" description="Yield & Value Realization is the final phase, but it's also a beginning. The data-driven insights and proven ROI generated in this phase directly inform the next V – Vision Architecture cycle. This creates a virtuous loop, ensuring your cognitive platform continuously evolves to solve your next most valuable business challenges." align="center" maxWidth="lg" />
                <div className="mt-8 text-center"><Button to="/velocity/vision">Begin the Next Cycle: Vision</Button></div>
            </Section>
            
            <CallToActionSection title="Ready to Prove the Value of Your AI?" subtitle="Let's build the framework to measure, communicate, and compound the return on your cognitive technology investment." buttonText="Talk to an Architect" />
        </div>
    );
};

export default YieldPage;
