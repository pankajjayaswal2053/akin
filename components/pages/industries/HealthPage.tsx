import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
  BeakerIcon,
  ListBulletIcon,
  HeartIcon,
  CpuChipIcon,
  ShareIcon,
  SparklesIcon,
  ArrowRightIcon,
  ServerStackIcon,
  CircleStackIcon,
  UsersIcon,
  DocumentTextIcon,
  // FIX: Imported the missing `ChartBarIcon` icon.
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';

// --- Page Content defined by the Blueprint ---

// 3. THE CORE CHALLENGES
const coreChallenges = [
    {
        icon: BeakerIcon,
        title: 'Slow Drug Discovery Cycles',
        description: 'Siloed clinical and genomic data makes it incredibly slow and expensive to identify novel drug targets and predict treatment efficacy.'
    },
    {
        icon: ListBulletIcon,
        title: 'Inefficient Clinical Trials',
        description: 'Patient recruitment is slow, data from trial sites is fragmented, and predicting delays is nearly impossible, leading to high costs.'
    },
    {
        icon: HeartIcon,
        title: 'One-Size-Fits-All Patient Care',
        description: 'Generic treatment plans based on broad population data fail to account for individual patient differences, leading to suboptimal outcomes.'
    },
    {
        icon: DocumentTextIcon,
        title: 'Regulatory & Compliance Burden',
        description: 'Navigating complex compliance landscapes (e.g., HIPAA, GxP) with siloed data is a major operational risk and barrier to innovation.'
    }
];

// 5. INDUSTRY ONTOLOGY BREAKDOWN
const healthOntology = [
    {
        icon: UsersIcon,
        name: 'Patient 360 & Genomics Ontology',
        description: 'A unified, longitudinal model of patient data, connecting EHRs, genomics, and real-world evidence for a holistic view.'
    },
    {
        icon: BeakerIcon,
        name: 'Research & Discovery Ontology',
        description: 'A knowledge graph connecting compounds, diseases, genes, and clinical trial data to accelerate the identification of novel therapeutic targets.'
    },
    {
        icon: ListBulletIcon,
        name: 'Clinical Operations Ontology',
        description: 'A digital twin of your clinical trial pipeline, modeling sites, patient cohorts, and protocols to optimize for speed and efficiency.'
    },
    {
        icon: CircleStackIcon,
        name: 'Real-World Evidence (RWE) Ontology',
        description: 'An integrated model of data from wearables, claims, and patient registries to understand treatment effects outside of clinical trials.'
    }
];

// 6. PLATFORM CAPABILITIES
const platformCapabilities = [
    {
        name: 'AI-Powered Target Identification',
        whatItDoes: 'AI agents that analyze the Research Ontology to identify novel drug targets and predict their likelihood of success.',
        valueItDelivers: 'Dramatically accelerates the pre-clinical phase of drug discovery and increases the probability of success.'
    },
    {
        name: 'Intelligent Clinical Trial Design',
        whatItDoes: 'Uses AI to optimize trial protocols and patient cohort selection, identifying the fastest path to regulatory submission.',
        valueItDelivers: 'Reduces clinical trial timelines and costs, bringing life-saving therapies to market faster.'
    },
    {
        name: 'Personalized Medicine & Care Pathways',
        whatItDoes: 'Leverages the Patient 360 Ontology to develop predictive models for disease progression and treatment response.',
        valueItDelivers: 'Empowers clinicians to deliver tailored treatment plans that improve patient outcomes.'
    },
    {
        name: 'Automated Regulatory Compliance',
        whatItDoes: 'Provides a secure, auditable data foundation (compliant with HIPAA, GxP) for all research and clinical operations.',
        valueItDelivers: 'De-risks innovation by ensuring compliance is built-in, not bolted on, and simplifies regulatory submissions.'
    },
    {
        name: 'Real-World Evidence Analysis',
        whatItDoes: 'Analyzes diverse RWE sources to understand long-term treatment effectiveness and identify new indications.',
        valueItDelivers: 'Maximizes the value of therapeutic assets post-approval and informs future R&D strategy.'
    },
    {
        name: 'Genomic Data Harmonization',
        whatItDoes: 'Integrates and harmonizes vast genomic and multi-omic datasets to power advanced bioinformatics and discovery.',
        valueItDelivers: 'Unlocks the full potential of your genomic data for building next-generation therapeutics.'
    }
];

// 7. PROOF IN ACTION
const proofPoints = [
    {
        eyebrow: 'Top 10 Pharma Company',
        headline: 'Fragmented R&D Data → Unified Discovery Platform',
        description: 'Built a Research Ontology that unified data from 50+ internal and external databases.',
        outcome: '2x increase in viable drug target identification'
    },
    {
        eyebrow: 'Global CRO',
        headline: 'Manual Patient Recruitment → AI-Powered Cohort Selection',
        description: 'Deployed an AI model to identify optimal patient cohorts from EHR data for a complex oncology trial.',
        outcome: '30% faster clinical trial recruitment'
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ServerStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">EHR / LIMS</p></div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><CircleStackIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Genomic Data</p></div>
        </div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 shadow-sm"><CpuChipIcon className="h-8 w-8 mx-auto text-electric-blue"/><p className="text-xs mt-1 font-semibold text-electric-blue">Akin Unified Ontology</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><SparklesIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Cognitive Agents</p></div>
        <ArrowRightIcon className="h-8 w-8 text-charcoal-light/50 rotate-90 md:rotate-0" />
        <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"><ChartBarIcon className="h-8 w-8 mx-auto text-charcoal-light"/><p className="text-xs mt-1 font-semibold">Clinical Ops</p></div>
    </div>
);


const HealthPage: React.FC = () => {
    useSEO({
        title: 'AI in Health & Life Sciences Solutions',
        description: 'Accelerating the future of health with secure, intelligent, and compliant AI platforms that turn health data into life-saving insights.',
        keywords: 'health AI, life sciences, personalized medicine, drug discovery, clinical trials, genomics, real-world evidence',
        ogImage: '/images/industries/health-main.jpg'
    });

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <Hero
                breadcrumb="INDUSTRY SPOTLIGHT"
                title="Predictive Health & Life Sciences"
                subtitle="Where drug discovery is accelerated, clinical trials are optimized, and patient care is truly personalized."
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
                        description="The potential to transform health outcomes with AI is immense, but it remains locked in silos. Data from clinical trials, electronic health records (EHRs), genomics, and real-world evidence is fragmented and impossible to connect. We solve this foundational challenge by unifying complex data at scale while adhering to the strictest privacy and compliance standards."
                        align="center"
                        maxWidth="lg"
                    />
                </div>
            </Section>

            {/* 3. THE CORE CHALLENGES */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="CORE CHALLENGES"
                    title="Systemic Problems in Health & Life Sciences"
                    description="We harness the power of AI to solve challenges in every facet of the sector, from the lab to the clinic."
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
                            title="A Single, Compliant Core for Research and Care."
                            description="We build a unified, intelligent system that serves both research and clinical operations. By creating a secure, compliant, and unified ontology, we provide the foundational 'digital twin' of your data ecosystem, enabling breakthroughs in both drug discovery and patient care."
                            maxWidth="lg"
                        />
                    </div>
                    <DiagramPlaceholder 
                        title="Health Data Flow"
                        description="Data Sources → Ontology → Agents → Operations"
                    />
                </div>
            </Section>

            {/* 5. INDUSTRY ONTOLOGY BREAKDOWN */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="SYSTEMS ARCHITECTURE"
                    title="The Health Ontology: Your Digital Twin"
                    description="This is our core differentiator. We build a deep, semantic model of your entire data ecosystem, creating the 'single source of truth' required for trustworthy AI."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {healthOntology.map((pillar) => (
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
                    title="Platform Capabilities for Health & Life Sciences"
                    description="Discover how the Akin Platform accelerates innovation and improves outcomes across the healthcare value chain."
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
                    description="Our platforms deliver measurable improvements to research speed, operational efficiency, and patient care."
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
                    description="Our platform is designed to unify your existing EHR, LIMS, and clinical trial management systems, not replace them."
                    align="center"
                    maxWidth="lg"
                />
                <IntegrationDiagram />
            </Section>

            {/* 9. FINAL CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="GET STARTED"
                    title="Architect Intelligence for Health & Life Sciences."
                    description="We work with leaders who want to accelerate discovery and personalize patient care. Let's build your blueprint."
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

export default HealthPage;
