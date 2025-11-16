import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
    CircleStackIcon,
    ShieldCheckIcon,
    ChartPieIcon,
    CpuChipIcon,
    SparklesIcon,
    RocketLaunchIcon,
    CogIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';

const capabilities = [
    { name: 'Unified Data Model', description: 'Design and implement a single, governed data model that breaks down silos and serves as the foundation for your ontology.', icon: CpuChipIcon },
    { name: 'Real-Time Streaming Pipelines', description: 'Build high-throughput, low-latency data pipelines using modern technologies like Kafka and Spark Streaming.', icon: RocketLaunchIcon },
    { name: 'Self-Service Analytics Platforms', description: 'Empower your business users with intuitive BI tools and platforms (e.g., Tableau, PowerBI) built on a trusted data foundation.', icon: ChartPieIcon },
    { name: 'Data Governance & Cataloging', description: 'Implement robust data governance, quality, and cataloging solutions to ensure your data is discoverable, understandable, and trusted.', icon: ShieldCheckIcon },
    { name: 'Cloud Data Warehouse Modernization', description: 'Architect and migrate to scalable, high-performance cloud data platforms like Snowflake, Databricks, or BigQuery.', icon: CircleStackIcon },
];

const outcomes = [
    { metric: '50-70%', description: 'Reduction in time-to-insight for business users', industry: 'Analytics & BI' },
    { metric: 'Up to 90%', description: 'Less time spent by data teams on data cleaning', industry: 'Data Engineering' },
    { metric: '100%', description: 'Increase in data trust and decision-making confidence', industry: 'Leadership' },
];

const industries = [
    { name: 'Finance', description: 'Unifying transaction, market, and customer data for real-time risk and analytics.' },
    { name: 'Retail', description: 'Creating a single view of the customer across all channels for personalization and insights.' },
    { name: 'Manufacturing', description: 'Integrating IT and OT data (from ERPs and factory floors) for a holistic operational view.' },
    { name: 'Healthcare', description: 'Building a secure, compliant data foundation that unifies clinical, genomic, and real-world data.' },
];

const DataAndAnalyticsPage: React.FC = () => {
    useSEO({
        title: 'Data & Analytics Modernization Solutions',
        description: 'Turn fragmented, siloed data into a high-performance, trusted asset. We build modern data foundations ready to power your AI and analytics.',
        keywords: 'data platform, data analytics, data lakehouse, data governance, business intelligence, self-service analytics'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: DATA & ANALYTICS"
                title="From Data Lakes to an Operational Ontology."
                subtitle="We architect and build the modern data foundation that transforms your fragmented, siloed data into a high-performance, trusted asset. This is not just a data warehouse; it's the intelligent core that powers your analytics and your AI."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: Your Data is a Liability, Not an Asset"
                    description="Data is everywhere, but there is no single source of truth. Your teams are working with stale, untrusted data from dozens of disconnected systems. This 'data swamp' slows down decision-making, makes advanced analytics impossible, and creates a massive barrier to deploying trustworthy AI."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Data Warehouses Are Not Built for Real-Time Operations"
                    description="Traditional data warehouses and lakes are passive repositories built for backward-looking reports. They are not designed for the real-time, contextual decision-making required by modern operations and AI. They store data, but they don't understand it."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="An AI-Ready Data Foundation, Built on an Ontology"
                    description="We build your modern data platform with its ultimate purpose in mind: to power your Unified Ontology and Cognitive Agents. We architect a high-performance, governed, and real-time data foundation that not only serves your analytics needs today but is explicitly designed to be the trusted source of truth for your mission-critical AI tomorrow."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Data & Analytics System Does"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {capabilities.map((item) => (
                        <Card key={item.name}>
                             <item.icon className="h-8 w-8 text-electric-blue mb-3" />
                             <h3 className="text-lg font-bold text-charcoal">{item.name}</h3>
                             <p className="mt-1 text-sm text-charcoal-light">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                 <SectionHeader
                    eyebrow="Architecture"
                    title="Powered by the Akin Platform"
                    align="center"
                    maxWidth="lg"
                />
                <ArchitectureDiagram />
                <div className="max-w-4xl mx-auto mt-8 text-center text-charcoal-light">
                    <p>Our Data & Analytics solution is the first step toward the full Akin platform. We build the foundational data pipelines and governance that feed the **Unified Ontology**. This becomes the trusted source for the **MLOps Engine** to build models and **Cognitive Agents** to take action, all overseen by your **Command Center**.</p>
                </div>
            </Section>

            <Section tone="dark">
                <SectionHeader
                    eyebrow="Outcomes"
                    title="Operational Impact That Scales"
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.description} className="text-center bg-white/5 border-white/10 text-stone">
                            <p className="text-5xl font-extrabold text-green">{item.metric}</p>
                            <p className="mt-2 font-semibold text-white">{item.description}</p>
                             <p className="mt-1 text-sm text-gray-400">Context: {item.industry}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="light">
                <SectionHeader
                    eyebrow="Applicability"
                    title="Where This Applies"
                    description="A modern data foundation is a prerequisite for success in every function that needs unified, trusted insight."
                    align='center'
                    maxWidth='lg'
                />
                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {industries.map(industry => (
                        <Card key={industry.name}>
                            <h4 className="font-bold text-charcoal">{industry.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{industry.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Akin"
                    title="Our Differentiation: Architectural DNA"
                    align='center'
                    maxWidth='lg'
                />
                <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <CpuChipIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Ontology-Ready by Design</h4>
                        <p className="text-sm text-charcoal-light">We build your data platform with its end-state in mind: powering your operational AI.</p>
                    </div>
                    <div className="p-4">
                        <RocketLaunchIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Real-Time, Not Just Batch</h4>
                        <p className="text-sm text-charcoal-light">Our expertise in streaming architecture enables real-time decision-making.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Enterprise-Grade Governance</h4>
                        <p className="text-sm text-charcoal-light">We embed data quality, security, and governance into every pipeline from day one.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Data Foundation."
                    description="Let's design the modern data platform that will unlock your analytics and power your future AI capabilities."
                    align="center"
                    maxWidth="md"
                />
                <div className="mt-8">
                    <Button to="/contact">Talk to an Architect</Button>
                </div>
            </Section>
        </div>
    );
};

export default DataAndAnalyticsPage;
