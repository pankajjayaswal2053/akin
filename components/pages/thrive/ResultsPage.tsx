import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import CallToActionSection from '../../ui/CallToActionSection';
import ThriveBar from '../../ui/ThriveBar';
import { useSEO } from '../../seo/useSEO';
import { ChartPieIcon, BanknotesIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../../ui/OptimizedImage';

const howWeApplyIt = [
    { name: 'ROI Modeling', description: 'Every engagement begins with a clear, data-driven model of the expected return on investment, aligning technology to financial outcomes.', icon: BanknotesIcon },
    { name: 'Value Architecture', description: 'We prioritize use cases and architectural decisions based on their potential to deliver the most significant, measurable impact to the business.', icon: ChartPieIcon },
    { name: 'Efficiency Transformation', description: 'Our agents are designed to automate processes, reduce waste, and optimize resource allocation, directly impacting operational efficiency.', icon: ClockIcon },
    { name: 'Operational Intelligence Metrics', description: 'We build dashboards and reporting that track not just technical health, but the real-world operational KPIs that matter to your bottom line.', icon: GlobeAltIcon },
];

const inPractice = [
    'Every feature in the backlog requires a "so what?" metric that ties to a business outcome.',
    'We present QBRs with financial impact, not just a list of features shipped.',
    'Work that does not drive a core KPI is actively de-prioritized or cut.'
];

const outcomes = [
    { name: 'Lower Costs', description: 'Measurable reductions in operational expenses through automation and efficiency.' },
    { name: 'Higher Throughput', description: 'Increased output and capacity from optimized processes and resource allocation.' },
    { name: 'Faster Cycles', description: 'Accelerated decision-making and process cycle times, from supply chain to customer service.' },
    { name: 'Stronger Market Position', description: 'A durable competitive advantage built on a more efficient, intelligent, and resilient operating model.' },
];

const ResultsPage: React.FC = () => {
    useSEO({
        title: 'THRIVE: Results — Value That Compounds',
        description: 'Every architecture is engineered for measurable enterprise impact. Our Results principle ensures systems create compounding financial, operational, and strategic value.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb={
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <img src="/images/icons/results.png" alt="Results Icon" className="h-6 w-6" />
                        </div>
                        <span>THRIVE Philosophy / Results</span>
                    </div>
                }
                title="Results — Value That Compounds"
                subtitle="Every architecture is engineered for measurable enterprise impact."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/thrive" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">The THRIVE Philosophy</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <ThriveBar activePhase="R" />
                 <p className="max-w-3xl mx-auto mt-8 text-center text-charcoal-light">Results is one of six THRIVE pillars — the philosophy that guides how we design world-class systems.</p>
            </Section>

            <Section tone="light">
                 <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                         <div className="p-8 bg-stone rounded-lg">
                            <OptimizedImage src="/images/icons/results.png" alt="Results Icon" width={512} height={512} className="w-full" />
                         </div>
                    </div>
                    <div className="md:col-span-7">
                        <SectionHeader eyebrow="Definition" title="What 'Results' Means in THRIVE." />
                        <p className="mt-4 text-lg text-charcoal-light">Results is our non-negotiable principle of designing and building systems that create tangible, measurable, and compounding financial, operational, and strategic value for the enterprise.</p>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Why It Matters" title="Intelligence Without Outcomes Is a Cost Center." description="An AI model with 99% accuracy that doesn't improve a business outcome is a failed project. In the enterprise, the only metric that matters is the realized value. Our obsession with results ensures that every line of code, every agent, and every architectural decision is directly traceable to a meaningful impact on your bottom line." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Apply It" title="Our Value-Driven Commitments" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {howWeApplyIt.map(item => (
                        <Card key={item.name}>
                            <item.icon className="h-8 w-8 text-electric-blue mb-3" />
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="In Practice" title="What Results Looks Like Day-to-Day" align="center" maxWidth="lg" />
                 <div className="mt-12 max-w-2xl mx-auto space-y-4">
                    {inPractice.map(item => (
                        <Card key={item} className="text-center">
                            <p className="font-semibold text-charcoal">{item}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Impact of Results-Driven Architecture" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.name} className="text-center">
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-charcoal-light mt-1 text-sm">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Connection to the Akin OS" title="How 'Results' Influences Platform & VELOCITY™" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card>
                        <h4 className="font-bold text-charcoal">Platform</h4>
                        <p className="text-charcoal-light mt-1">Drives the instrumentation of the platform to capture value-centric metrics, making ROI visible in the Command Center.</p>
                    </Card>
                     <Card>
                        <h4 className="font-bold text-charcoal">VELOCITY™</h4>
                        <p className="text-charcoal-light mt-1">Defines the entire purpose of the Y – Yield & Value Realization phase and informs the ROI models built in the V – Vision Architecture phase.</p>
                    </Card>
                </div>
            </Section>

            <CallToActionSection title="Ready to Architect for Impact?" subtitle="Let's build a clear, data-driven business case and an architectural roadmap that delivers measurable results for your enterprise." buttonText="Talk to an Architect" />
        </div>
    );
};

export default ResultsPage;