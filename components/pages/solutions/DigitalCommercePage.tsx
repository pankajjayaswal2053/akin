import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
    ShoppingCartIcon,
    CpuChipIcon,
    SparklesIcon,
    ShieldCheckIcon,
    ArrowTrendingUpIcon,
    CurrencyDollarIcon,
    TruckIcon,
    UserGroupIcon,
    CodeBracketSquareIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';

const capabilities = [
    { name: 'Demand Sensing & Forecasting', description: 'AI models that go beyond historical sales to predict demand by fusing real-time market signals, social trends, and competitor data.', icon: ArrowTrendingUpIcon },
    { name: 'Dynamic Pricing Intelligence', description: 'Cognitive agents that continuously analyze demand, inventory, and competitor pricing to recommend and execute optimal pricing strategies.', icon: CurrencyDollarIcon },
    { name: 'Merchandising Optimization', description: 'AI-driven insights to optimize product assortments, placements, and promotions across all digital channels.', icon: ShoppingCartIcon },
    { name: 'Hyper-Personalization Engine', description: 'Leverage a real-time 360-degree customer view to deliver personalized content, recommendations, and offers at every touchpoint.', icon: UserGroupIcon },
    { name: 'Intelligent Fulfillment & Logistics', description: 'Connect your commerce platform to your supply chain ontology to enable intelligent order routing and predictive fulfillment.', icon: TruckIcon },
];

const outcomes = [
    { metric: '5-15%', description: 'Increase in conversion rates and average order value (AOV)', industry: 'E-commerce' },
    { metric: 'Up to 25%', description: 'Improvement in forecast accuracy, reducing stockouts', industry: 'Merchandising' },
    { metric: '3-7%', description: 'Increase in gross margin from dynamic pricing', industry: 'Finance' },
];

const industries = [
    { name: 'E-commerce & D2C', description: 'Building the intelligent core for high-growth digital-native brands.' },
    { name: 'Marketing', description: 'Powering personalization and campaign optimization with unified customer data.' },
    { name: 'Merchandising', description: 'Making data-driven decisions on product assortment, pricing, and promotions.' },
    { name: 'Operations', description: 'Connecting the digital front-end to the supply chain back-end for seamless fulfillment.' },
];

const DigitalCommercePage: React.FC = () => {
    useSEO({
        title: 'Digital Commerce Intelligence Solutions',
        description: 'Architecting intelligent, scalable, and high-performance commerce platforms that optimize everything from the supply chain to the customer checkout.',
        keywords: 'digital commerce, composable commerce, headless commerce, ecommerce AI, personalization, demand forecasting'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: DIGITAL COMMERCE"
                title="From Static Funnels to Real-Time Commerce Intelligence."
                subtitle="We architect and build the cognitive core for modern commerce, unifying your customer, product, and inventory data into a single ontology. This enables Cognitive Agents to optimize pricing, personalize experiences, and orchestrate fulfillment in real time."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: Your Commerce Stack is a Tangle of Silos"
                    description="Your commerce platform, CRM, marketing automation tool, and ERP all have a different version of the truth. This data fragmentation makes it impossible to create a seamless customer experience, prevent stockouts, and react to market changes with agility. You are leaving money on the table every second."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Delayed Data and Static Rules Can't Win"
                    description="Traditional e-commerce platforms operate on stale, batch-processed data and are governed by static business rules. They cannot sense a real-time spike in demand, understand the relationship between a customer's browsing history and their likelihood to buy, or dynamically adjust to a supply chain disruption."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="A Cognitive Engine for Your Entire Commerce Operation"
                    description="We architect your Digital Commerce Intelligence system around a Unified Ontology of your customers, products, and real-time events. This 'single source of truth' allows Cognitive Agents to reason across the entire value chain—from supply and demand sensing, to dynamic pricing and personalization, to intelligent fulfillment—creating a hyper-efficient, self-optimizing commerce machine."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Digital Commerce Intelligence System Does"
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
                    <p>This solution leverages all four pillars of the Akin platform. The **Unified Ontology** creates the 360-degree view of customers and products. The **MLOps Engine** builds the pricing and recommendation models. **Cognitive Agents** execute the real-time optimizations. The **Command Center** allows your merchandising and marketing teams to govern the system.</p>
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
                    description="An intelligent commerce core is critical for any business competing in the digital-first economy."
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
                        <h4 className="mt-2 font-bold">Ontology-Grounded</h4>
                        <p className="text-sm text-charcoal-light">Our AI understands the relationships between customers, products, and inventory.</p>
                    </div>
                    <div className="p-4">
                        <SparklesIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Full-Funnel AI</h4>
                        <p className="text-sm text-charcoal-light">We optimize the entire journey, from supply chain and demand to personalization.</p>
                    </div>
                     <div className="p-4">
                        <CodeBracketSquareIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Composable & Headless</h4>
                        <p className="text-sm text-charcoal-light">We build flexible, API-first architectures that free you from monolithic platforms.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Commerce Intelligence."
                    description="Let’s design the cognitive system that powers a new level of personalization, efficiency, and growth for your business."
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

export default DigitalCommercePage;
