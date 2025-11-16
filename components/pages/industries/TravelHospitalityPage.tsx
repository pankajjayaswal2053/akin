import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: UserGroupIcon,
        title: 'Generic Guest Experiences',
        description: 'Disconnected data from bookings, loyalty programs, and on-property interactions results in a one-size-fits-all experience, missing upsell opportunities.'
    },
    {
        icon: ChartBarIcon,
        title: 'Static Revenue Management',
        description: 'Manual, rule-based pricing for rooms and tickets fails to adapt to real-time market demand and competitor actions, leaving revenue on the table.'
    },
    {
        icon: CogIcon,
        title: 'Inefficient Operations',
        description: 'Poor demand forecasting leads to inefficient staffing, wasted resources, and inconsistent service quality during peak and off-peak times.'
    },
    {
        icon: BuildingOffice2Icon,
        title: 'High Acquisition Costs',
        description: 'Over-reliance on Online Travel Agencies (OTAs) erodes margins, while a lack of personalized marketing makes it hard to drive direct bookings.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const hospitalityOntology = [
    {
        icon: UserGroupIcon,
        name: 'Guest 360 & Loyalty Ontology',
        description: 'A unified profile of every traveler, connecting booking history, preferences, loyalty status, and on-property interactions.'
    },
    {
        icon: BuildingOffice2Icon,
        name: 'Property & Asset Ontology',
        description: 'A digital twin of your properties, including room inventory, amenities, maintenance status, and staffing information.'
    },
    {
        icon: ChartBarIcon,
        name: 'Revenue & Market Ontology',
        description: 'A real-time model of market demand, competitor pricing, local events, and flight data to inform revenue strategy.'
    },
    {
        icon: ShareIcon,
        name: 'Distribution & Channel Ontology',
        description: 'A map of all your booking channels (direct, OTA, GDS), linking performance data to your revenue and guest ontologies.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'Dynamic Pricing & Revenue Management',
        whatItDoes: 'AI agents that analyze the Market Ontology to set optimal pricing for rooms and flights in real-time.',
        valueItDelivers: 'Maximizes Revenue Per Available Room (RevPAR) and load factor by dynamically adapting to market conditions.'
    },
    {
        name: 'Hyper-Personalized Guest Journeys',
        whatItDoes: 'Leverages the Guest 360 Ontology to deliver personalized offers, ancillary recommendations, and on-property experiences.',
        valueItDelivers: 'Increases guest lifetime value, drives ancillary revenue, and boosts direct bookings and loyalty.'
    },
    {
        name: 'Intelligent Hotel Operations',
        whatItDoes: 'Cognitive agents that optimize staffing, housekeeping schedules, and inventory based on real-time occupancy and demand forecasts.',
        valueItDelivers: 'Lowers operational costs, improves efficiency, and ensures a consistently high level of guest service.'
    },
    {
        name: 'AI-Powered Demand Forecasting',
        whatItDoes: 'Predicts booking demand for specific properties and routes with high accuracy, far beyond historical averages.',
        valueItDelivers: 'Enables smarter marketing spend, staffing decisions, and revenue management strategies.'
    },
    {
        name: 'Predictive Maintenance for Assets',
        whatItDoes: 'For airlines and cruise lines, AI models that predict maintenance needs for aircraft and vessels.',
        valueItDelivers: 'Reduces operational disruptions, enhances safety, and lowers maintenance costs.'
    },
    {
        name: 'Loyalty & Direct Booking Optimization',
        whatItDoes: 'Analyzes guest data to create targeted marketing campaigns that reduce reliance on OTAs.',
        valueItDelivers: 'Improves profit margins by shifting the booking mix towards higher-margin direct channels.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Luxury Hotel Group',
        headline: 'Static Pricing → Dynamic Revenue Management',
        description: 'Deployed an AI-powered pricing engine that analyzes market signals 24/7 to optimize room rates.',
        outcome: '+15% increase in RevPAR'
    },
    {
        eyebrow: 'International Airline',
        headline: 'Generic Offers → Personalized Ancillary Sales',
        description: 'Integrated a personalization engine into the booking flow to offer tailored ancillary products.',
        outcome: '20% lift in ancillary revenue per passenger'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">PMS / CRS</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Booking Data</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Guest Services</p></div>
    </div>
);


const TravelHospitalityPage: React.FC = () => {
    useSEO({
        title: 'AI Solutions for Travel & Hospitality',
        description: 'Architecting the future of travel with an AI core that powers personalized guest experiences, dynamic revenue management, and intelligent operations.',
        keywords: 'travel, hospitality, hotel tech, airline tech, personalization, revenue management, guest experience',
        ogImage: '/images/industries/travel-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Intelligent Travel & Hospitality"
                subtitle="Where every guest journey is personalized, revenue is dynamically optimized, and operations run with predictive efficiency."
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
                        description="The modern traveler expects more than just a booking; they expect a seamless, personalized journey. Delivering this at scale is impossible when guest data is trapped in disconnected Property Management Systems (PMS), CRMs, and booking engines. We solve this core data silo problem to enable true personalization and operational excellence."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems of a Modern Hospitality Business"
                    description="We build bespoke AI platforms to solve the critical challenges facing hotels, airlines, and travel companies in a dynamic, customer-centric market."
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
                            title="A Single Cognitive Core for the Entire Guest Lifecycle."
                            description="We build a unified intelligent system that connects your guest data, your property/asset data, and your market data. This Unified Ontology allows cognitive agents to make holistic decisions—optimizing room pricing based on local events while simultaneously sending a personalized upgrade offer to a loyal guest."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Hospitality Operations Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Hospitality Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire business, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hospitalityOntology.map((pillar) => (
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
                    title="Platform Capabilities for Travel & Hospitality"
                    description="Discover how the Akin Platform transforms every part of your operation, from revenue management to guest services."
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
                    description="Our platforms deliver measurable improvements to revenue, customer loyalty, and operational efficiency."
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
                    description="Our platform is designed to unify your existing PMS, CRS, and loyalty systems, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Your Guest Experience."
                    description="We work with leaders who want to build the personalized, profitable, and efficient hospitality businesses of the future. Let's build your blueprint."
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

export default TravelHospitalityPage;
