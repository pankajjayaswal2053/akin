import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  MapIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: UserGroupIcon,
        title: 'Disconnected Citizen Experience',
        description: 'Fragmented, clunky portals for different services create frustration and erode public trust. Citizens expect seamless digital interactions.'
    },
    {
        icon: WrenchScrewdriverIcon,
        title: 'Legacy System Paralysis',
        description: 'Aging, siloed infrastructure prevents innovation, poses security risks, and makes cross-departmental collaboration nearly impossible.'
    },
    {
        icon: ChartBarIcon,
        title: 'Reactive Policymaking',
        description: 'Policy is often based on historical data, making it difficult to anticipate needs and measure the true impact of programs.'
    },
    {
        icon: ShieldCheckIcon,
        title: 'Security & Compliance Mandates',
        description: 'Government agencies face stringent security and data privacy requirements that are difficult to manage with outdated systems.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const publicSectorOntology = [
    {
        icon: UserGroupIcon,
        name: 'Citizen & Entity Ontology',
        description: 'A secure, unified model of citizens and businesses, enabling personalized services while protecting privacy.'
    },
    {
        icon: ServerStackIcon,
        name: 'Inter-Agency Data Ontology',
        description: 'A federated data model that enables secure, controlled data sharing between different government departments.'
    },
    {
        icon: MapIcon,
        name: 'Civic Infrastructure Ontology',
        description: 'A digital twin of public infrastructure—like transportation networks and utilities—for optimized management and planning.'
    },
    {
        icon: ChartBarIcon,
        name: 'Policy & Program Ontology',
        description: 'A knowledge graph of government policies and programs, linking them to their target populations and performance metrics.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'Unified Citizen Service Portals',
        whatItDoes: 'Creates intuitive, personalized, and accessible service portals by unifying citizen data into a single, secure profile.',
        valueItDelivers: 'Improves citizen satisfaction, reduces administrative overhead, and increases the adoption of digital government services.'
    },
    {
        name: 'Predictive Resource Allocation',
        whatItDoes: 'Uses AI to forecast demand for public services (e.g., public transport, healthcare) and optimize resource allocation.',
        valueItDelivers: 'Improves the efficiency and effectiveness of public spending, ensuring resources are deployed where they are needed most.'
    },
    {
        name: 'Data-Driven Policy Simulation',
        whatItDoes: 'Allows agencies to simulate the potential economic and social impact of new policies before they are implemented.',
        valueItDelivers: 'Enables evidence-based policymaking that leads to better outcomes and reduces the risk of unintended consequences.'
    },
    {
        name: 'Intelligent Security & Threat Analysis',
        whatItDoes: 'Deploys AI agents to monitor for cybersecurity threats and analyze intelligence data to identify emerging risks.',
        valueItDelivers: 'Enhances national and civic security by moving from a reactive to a predictive posture.'
    },
    {
        name: 'Automated Compliance & Reporting',
        whatItDoes: 'Provides a secure, auditable platform that automates compliance with data privacy and security mandates.',
        valueItDelivers: 'Reduces risk and simplifies regulatory reporting, freeing up resources to focus on the core mission.'
    },
    {
        name: 'Smart City & Infrastructure Management',
        whatItDoes: 'Leverages the Civic Infrastructure Ontology to optimize traffic flow, manage utilities, and plan urban development.',
        valueItDelivers: 'Creates more efficient, sustainable, and livable cities for all citizens.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'State Government Agency',
        headline: 'Fragmented Portals → Unified Citizen Service Hub',
        description: 'Unified 15 different legacy systems into a single citizen ontology to power a new digital services portal.',
        outcome: '40% improvement in service delivery time'
    },
    {
        eyebrow: 'National Defense Ministry',
        headline: 'Reactive Maintenance → Predictive Asset Readiness',
        description: 'Built a digital twin and predictive maintenance models for a critical fleet of military vehicles.',
        outcome: '30% increase in asset availability'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Legacy Systems</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Departmental Data</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Civic Services</p></div>
    </div>
);


const PublicSectorPage: React.FC = () => {
    useSEO({
        title: 'Public Sector AI & Digital Transformation',
        description: 'Partnering with public sector organizations to build intelligent digital infrastructure for modern, efficient, and effective civic services.',
        keywords: 'public sector, government, digital transformation, smart city, civic tech, government AI',
        ogImage: '/images/industries/public-sector-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Intelligent Public Sector"
                subtitle="Where civic services are seamless, resources are optimized, and policy is driven by predictive insight."
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
                        description="Citizens expect seamless, digital services on par with the private sector. We help government agencies overcome the core challenges of data silos and aging infrastructure to build a more intelligent, responsive, and efficient public sector. Our platforms create a holistic view that informs policy, optimizes resources, and improves the citizen experience."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems in Public Service"
                    description="We solve the critical challenges that prevent government agencies from delivering modern, efficient, and effective services."
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
                            title="A Unified, Secure Core for Government Operations."
                            description="We build a single, intelligent system that securely connects data across departments and agencies. This Unified Ontology provides the secure, governed foundation for modernizing services, automating processes, and making data-driven policy decisions, all while adhering to the strictest security standards."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Public Sector Data Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Public Sector Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire service ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {publicSectorOntology.map((pillar) => (
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
                    title="Platform Capabilities for Public Sector"
                    description="Discover how the Akin Platform modernizes every facet of public service, from citizen engagement to policy creation."
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
                    description="Our platforms deliver measurable improvements to public service delivery and operational efficiency."
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
                    description="Our platform is designed to securely unify your existing legacy systems and departmental databases, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for the Public Sector."
                    description="We work with leaders who want to build secure, efficient, and citizen-centric government services. Let's build your blueprint."
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

export default PublicSectorPage;
