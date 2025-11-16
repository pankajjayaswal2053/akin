import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  SignalIcon,
  CogIcon,
  ArrowTrendingDownIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  ChartBarIcon,
  UsersIcon,
  // FIX: Imported the missing `WrenchScrewdriverIcon` icon.
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: CogIcon,
        title: 'Network Complexity',
        description: 'Manual network management is slow and reactive. It cannot keep up with traffic demands, leading to congestion, poor quality of service, and outages.'
    },
    {
        icon: ArrowTrendingDownIcon,
        title: 'High Customer Churn',
        description: 'In a competitive market, it is difficult to identify at-risk customers and intervene with personalized offers before they switch providers.'
    },
    {
        icon: SignalIcon,
        title: 'Slow 5G & IoT Monetization',
        description: 'The massive investment in 5G infrastructure is difficult to monetize without the tools to create and scale new, high-value enterprise services.'
    },
    {
        icon: WrenchScrewdriverIcon,
        title: 'Reactive Field Service',
        description: 'Unexpected failures in cell towers and fiber networks lead to costly emergency repairs and service disruptions for customers.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const telecomOntology = [
    {
        icon: SignalIcon,
        name: 'Network & Infrastructure Ontology',
        description: 'A digital twin of your entire network, modeling cell towers, fiber lines, RAN equipment, and real-time traffic flow.'
    },
    {
        icon: UsersIcon,
        name: 'Customer & Subscriber Ontology',
        description: 'A unified view of every subscriber, connecting their service plans, usage data, and network experience for a 360-degree profile.'
    },
    {
        icon: ChartBarIcon,
        name: 'Service & Product Ontology',
        description: 'A model of your service catalog, from consumer data plans to complex enterprise solutions like private 5G and network slicing.'
    },
    {
        icon: CpuChipIcon,
        name: 'Device & IoT Ontology',
        description: 'A knowledge graph of all connected devices on your network, from smartphones to industrial IoT sensors.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'Cognitive Network Operations',
        whatItDoes: 'AI agents that predict network congestion, automate resource allocation, and perform root cause analysis for self-healing capabilities.',
        valueItDelivers: 'Improves network performance and reliability (QoS), reduces operational costs, and minimizes service outages.'
    },
    {
        name: 'AI-Driven Customer Retention',
        whatItDoes: 'Analyzes the Customer Ontology to predict churn risk and recommend personalized, proactive retention offers.',
        valueItDelivers: 'Reduces subscriber churn, increases customer lifetime value, and improves overall profitability.'
    },
    {
        name: 'Predictive Field Service',
        whatItDoes: 'Uses AI to predict failures in network infrastructure and optimize the dispatch of field service technicians.',
        valueItDelivers: 'Minimizes network downtime, lowers maintenance costs, and improves customer satisfaction.'
    },
    {
        name: '5G & IoT Service Orchestration',
        whatItDoes: 'Provides a platform to rapidly develop, deploy, and scale new enterprise services like private 5G and network slicing.',
        valueItDelivers: 'Accelerates monetization of your 5G investment and opens up new, high-margin revenue streams.'
    },
    {
        name: 'Dynamic Bandwidth Allocation',
        whatItDoes: 'Intelligently manages network traffic, ensuring quality of service for critical applications while optimizing overall network utilization.',
        valueItDelivers: 'Enhances user experience for high-value services and defers costly capital expenditures on network upgrades.'
    },
    {
        name: 'Personalized Product & Plan Recommendations',
        whatItDoes: 'Uses AI to analyze customer usage patterns and recommend the optimal service plans or add-ons.',
        valueItDelivers: 'Increases Average Revenue Per User (ARPU) and improves customer satisfaction by aligning services with needs.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Tier 1 Mobile Operator',
        headline: 'Reactive Network Alarms → Predictive Outage Prevention',
        description: 'Deployed a cognitive network operations platform that predicts congestion and hardware failures 24 hours in advance.',
        outcome: '35% reduction in network outages'
    },
    {
        eyebrow: 'European Telco',
        headline: 'High Churn Rate → Proactive Customer Retention',
        description: 'Integrated an AI-driven churn prediction model to identify at-risk subscribers and deliver targeted retention campaigns.',
        outcome: '18% reduction in customer churn'
    },
];

// --- Helper Components for Diagrams ---

const DiagramPlaceholder = ({ title, description }: { title: string, description: string }) => (
  <div className="aspect-square bg-charcoal/5 border-2 border-dashed border-charcoal/20 rounded-lg flex items-center justify-center p-8 h-full">
    <div className="text-center text-charcoal">
      <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-white">
          <ShareIcon className="h-10 w-10 text-electric-blue" />
      </div>
      <p className="mt-4 font-semibold text-sm uppercase tracking-wider">Architectural Diagram</p>
      <p className="mt-1 font-bold">{title}</p>
      <p className="mt-1 text-xs text-charcoal-light">{description}</p>
    </div>
  </div>
);

const IntegrationDiagram = () => (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center text-charcoal">
        <div className="flex flex-wrap justify-center gap-2">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">OSS/BSS</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Network Data</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Network Ops</p></div>
    </div>
);


const TelecommunicationsPage: React.FC = () => {
    useSEO({
        title: 'AI Solutions for Telecommunications',
        description: 'Architecting the cognitive network with AI operating systems that optimize performance, predict failures, and enhance customer experience for the 5G era.',
        keywords: 'telecommunications, 5G, IoT, network automation, churn prediction, predictive maintenance, telco AI',
        ogImage: '/images/industries/telecom-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="The Cognitive Network"
                subtitle="Where network performance is predictive, customer retention is proactive, and new 5G services are monetized at speed."
                showGlobe={true}
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>
            
            {/* 2. THE TRANSFORMATION NARRATIVE */}
            <Section tone="soft">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        eyebrow="THE INDUSTRY IS CHANGING"
                        title="Legacy Systems Can't Keep Up with Modern Demand."
                        description="The explosion of data from 5G and IoT devices creates both immense opportunity and unprecedented operational challenges. Managing this complexity requires a shift from manual oversight to AI-driven automation. Our platforms create a 'digital twin' of your network, enabling a new level of predictive control and service innovation."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of a Modern Telco"
                    description="We build bespoke AI platforms to solve the critical challenges facing the modern telecommunications industry, from network operations to customer retention."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreChallenges.map((challenge) => (
                        <Card key={challenge.title} className="text-center h-full">
                            <challenge.icon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-charcoal">{challenge.title}</h3>
                            <p className="mt-2 text-charcoal-light">{challenge.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 4. WHAT AKIN DOES DIFFERENTLY */}
            <Section tone="soft">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeader
                            eyebrow="THE AKIN APPROACH"
                            title="A Single Cognitive Core for Network and Customer Operations."
                            description="We build a unified intelligent system that connects your network performance data with your customer data. This Unified Ontology allows cognitive agents to not only predict a network fault, but also to identify which high-value customers will be impacted and proactively manage the experience."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Telecom Operations Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Telecom Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire ecosystem, from cell towers to subscribers, creating the 'single source of truth' for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {telecomOntology.map((pillar) => (
                        <Card key={pillar.name} className="h-full">
                            <pillar.icon className="h-8 w-8 text-electric-blue mb-3" />
                            <h3 className="text-lg font-bold text-charcoal">{pillar.name}</h3>
                            <p className="mt-1 text-sm text-charcoal-light">{pillar.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 6. PLATFORM CAPABILITIES */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="CAPABILITIES"
                    title="Platform Capabilities for Telecommunications"
                    description="Discover how the Akin Platform transforms every part of your operation, from the network core to the customer edge."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {platformCapabilities.map((cap) => (
                        <Card key={cap.name} className="h-full">
                            <h3 className="text-lg font-bold text-charcoal">{cap.name}</h3>
                            <p className="mt-2 text-sm text-charcoal-light">{cap.whatItDoes}</p>
                            <p className="mt-3 text-sm font-semibold text-charcoal">Value: <span className="font-normal text-charcoal-light">{cap.valueItDelivers}</span></p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* 7. PROOF IN ACTION */}
            <Section tone="dark">
                <SectionHeader
                    eyebrow="PROOF IN ACTION"
                    title="From Theory to Tangible Results"
                    description="Our platforms deliver measurable improvements to network reliability, customer loyalty, and revenue growth."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                    {proofPoints.map((proof) => (
                        <Card key={proof.headline} className="bg-white/5 border-white/10 text-stone hover:bg-white/10">
                            <span className="text-sm font-bold uppercase text-electric-blue">{proof.eyebrow}</span>
                            <h3 className="text-xl font-bold mt-2 text-white">{proof.headline}</h3>
                            <p className="mt-2 text-gray-300">{proof.description}</p>
                            <p className="mt-4 text-2xl font-bold text-green">{proof.outcome}</p>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12 text-center">
                    <Button to="/client-stories">See More Client Stories</Button>
                </div>
            </Section>
            
            {/* 8. HOW IT INTEGRATES */}
            <Section tone="light">
                 <SectionHeader
                    eyebrow="INTEGRATION"
                    title="Architected for Your Stack"
                    description="Our platform is designed to unify your existing OSS/BSS, CRM, and network management systems, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Network."
                    description="We work with leaders who want to build the resilient, predictive, and self-healing networks of the future. Let's build your blueprint."
                    align="center"
                    maxWidth="md"
                />
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Section>
        </div>
    );
};

export default TelecommunicationsPage;
