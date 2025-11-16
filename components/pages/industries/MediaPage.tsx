import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  UserGroupIcon,
  ChartBarIcon,
  TvIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: UserGroupIcon,
        title: 'Fragmented Audience Data',
        description: 'Audience data is siloed across various platforms (web, mobile, OTT), making it impossible to get a true 360-degree view for personalization.'
    },
    {
        icon: ChartBarIcon,
        title: 'Inefficient Monetization',
        description: 'Traditional advertising models are losing effectiveness. It is difficult to maximize revenue from content in a dynamic, data-driven world.'
    },
    {
        icon: TvIcon,
        title: 'High Subscriber Churn',
        description: 'In a crowded market, retaining subscribers is paramount. Generic content recommendations fail to keep audiences engaged long-term.'
    },
    {
        icon: CpuChipIcon,
        title: 'Complex Content Workflows',
        description: 'Manual processes for content tagging, rights management, and distribution are slow, costly, and error-prone.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const mediaOntology = [
    {
        icon: UserGroupIcon,
        name: 'Audience 360 Ontology',
        description: 'A unified profile of every viewer, connecting consumption habits, preferences, and subscription data across all platforms.'
    },
    {
        icon: TvIcon,
        name: 'Content & Rights Ontology',
        description: 'A rich knowledge graph of your content library, including metadata, rights information, and performance data.'
    },
    {
        icon: ChartBarIcon,
        name: 'Advertising & Monetization Ontology',
        description: 'A real-time model of your ad inventory, programmatic auctions, and subscription data to optimize revenue.'
    },
    {
        icon: ShareIcon,
        name: 'Distribution & Platform Ontology',
        description: 'A map of all your distribution channels and platforms, linking content and audience data for a holistic view.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'AI-Powered Content Personalization',
        whatItDoes: 'Leverages the Audience 360 Ontology to deliver hyper-personalized content recommendations, increasing engagement.',
        valueItDelivers: 'Reduces subscriber churn and increases time-on-platform by showing viewers content they will love.'
    },
    {
        name: 'Dynamic Ad Monetization',
        whatItDoes: 'AI agents that optimize programmatic ad sales, dynamic ad insertion, and inventory pricing in real-time.',
        valueItDelivers: 'Maximizes advertising revenue (yield) and improves the relevance of ads for viewers.'
    },
    {
        name: 'Predictive Churn Reduction',
        whatItDoes: 'Identifies subscribers at high risk of churning and recommends personalized retention offers or content.',
        valueItDelivers: 'Increases customer lifetime value by proactively addressing the root causes of churn.'
    },
    {
        name: 'Intelligent Content Management',
        whatItDoes: 'Automates the tagging of video and text content, simplifies rights management, and optimizes content workflows.',
        valueItDelivers: 'Reduces manual operational costs and accelerates the speed at which content can be published and distributed.'
    },
    {
        name: 'Unified Audience Analytics',
        whatItDoes: 'Provides a single "control tower" view of audience behavior across all platforms and devices.',
        valueItDelivers: 'Empowers content and marketing teams with the deep insights needed to make smarter programming and acquisition decisions.'
    },
    {
        name: 'Intelligent Paywall & Subscription Modeling',
        whatItDoes: 'Uses AI to test and deploy dynamic paywalls and personalized subscription offers to different audience segments.',
        valueItDelivers: 'Increases subscriber conversion rates and maximizes subscription revenue.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Major Streaming Service',
        headline: 'Generic Recommendations → Hyper-Personalized Content Engine',
        description: 'Built a unified Audience 360 Ontology to power a new AI-driven recommendation engine.',
        outcome: '25% increase in user engagement'
    },
    {
        eyebrow: 'Broadcast Media Group',
        headline: 'Manual Ad Sales → Dynamic Yield Optimization',
        description: 'Deployed an AI-powered system to dynamically price and allocate programmatic ad inventory across their digital properties.',
        outcome: '12% lift in programmatic ad revenue'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">CMS / Ad Server</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Audience Data</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Content Delivery</p></div>
    </div>
);


const MediaPage: React.FC = () => {
    useSEO({
        title: 'AI Solutions for Media & Entertainment',
        description: 'Engineering the future of content with intelligent platforms that power audience engagement, personalization, and monetization for the new era of media.',
        keywords: 'media, entertainment, streaming, OTT, audience analytics, content personalization, ad tech, monetization',
        ogImage: '/images/industries/media-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Intelligent Media & Entertainment"
                subtitle="Where content is personalized, audiences are understood, and monetization is optimized in real time."
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
                        title="Data Fragmentation Defines the Industry."
                        description="The media landscape has shifted from a one-way broadcast to a direct-to-consumer dialogue. Success now depends on understanding individual preferences and delivering personalized experiences at scale. However, this is impossible when audience data is trapped in disconnected systems. We solve this core data challenge to power intelligent content delivery and monetization."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of a Modern Media Company"
                    description="We build bespoke AI solutions that address the critical challenges facing media companies in a competitive, direct-to-consumer world."
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
                            title="A Single Cognitive Core for Content, Audience, and Revenue."
                            description="We build a unified intelligent system that connects your content library, your audience data, and your monetization engine. This Unified Ontology allows cognitive agents to make holistic decisions—personalizing content to reduce churn while simultaneously optimizing ad yield for that same user."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Media Operations Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Media Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire media ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mediaOntology.map((pillar) => (
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
                    title="Platform Capabilities for Media"
                    description="Discover how the Akin Platform transforms every part of your operation, from content management to audience engagement."
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
                    description="Our platforms deliver measurable improvements to audience engagement, retention, and revenue."
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
                    description="Our platform is designed to unify your existing CMS, ad servers, and subscription management platforms, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Media Enterprise."
                    description="We work with leaders who want to build the data-driven, personalized, and profitable media experiences of the future. Let's build your blueprint."
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

export default MediaPage;
