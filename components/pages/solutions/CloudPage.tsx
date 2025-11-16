import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import { 
    CloudIcon, 
    CogIcon, 
    ShieldCheckIcon,
    CpuChipIcon,
    ServerStackIcon,
    ChartPieIcon
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';

const capabilities = [
    { name: 'Multi-Cloud & Hybrid Strategy', description: 'Design and execute seamless, secure, and cost-effective cloud strategies that avoid vendor lock-in and give you maximum flexibility.', icon: CloudIcon },
    { name: 'MLOps & AI Platform Engineering', description: 'Build the specialized, high-performance infrastructure required to train, deploy, and manage machine learning models at enterprise scale.', icon: CogIcon },
    { name: 'DevSecOps & Automated Governance', description: 'Embed security and compliance into every stage of your infrastructure lifecycle using Infrastructure as Code (IaC) and automated guardrails.', icon: ShieldCheckIcon },
    { name: 'FinOps & Cost Optimization', description: 'Implement frameworks for cloud financial management that provide visibility, control, and optimization of your cloud spend.', icon: ChartPieIcon },
    { name: 'High-Performance Computing (HPC)', description: 'Architect and manage the GPU/TPU clusters and high-throughput storage required for large-scale AI model training.', icon: CpuChipIcon },
];

const outcomes = [
    { metric: '20-40%', description: 'Reduction in cloud spending through FinOps and optimization', industry: 'IT/Finance' },
    { metric: 'Up to 75%', description: 'Faster ML model deployment cycles via MLOps', industry: 'Data Science' },
    { metric: '99.99%', description: 'Improvement in platform uptime and reliability', industry: 'Operations' },
];

const industries = [
    { name: 'Infrastructure Teams', description: 'Building and managing the core cloud foundations for the enterprise.' },
    { name: 'Platform Engineering', description: 'Creating the internal platforms that enable developer self-service and speed.' },
    { name: 'IT Leadership (CIO/CTO)', description: 'Driving the strategic cloud and technology roadmap for the business.' },
];

const CloudPage: React.FC = () => {
    useSEO({
        title: 'Cloud & Infrastructure Engineering Solutions',
        description: 'Building the secure, scalable, and resilient cloud foundations that power mission-critical AI operating systems and modern data platforms.',
        keywords: 'cloud infrastructure, multi-cloud, hybrid cloud, MLOps, DevSecOps, FinOps, kubernetes'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: CLOUD & INFRASTRUCTURE"
                title="From Generic Cloud to AI-Optimized Infrastructure."
                subtitle="We architect and build the secure, scalable, and AI-optimized cloud foundation your enterprise needs to run mission-critical intelligence. This is not just 'lift-and-shift'; it's a purpose-built environment for the cognitive era."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: Your Cloud is a Cost Center, Not a Capability"
                    description="Your cloud adoption has led to spiraling costs, security gaps, and performance bottlenecks. Your infrastructure was built for simple applications, not for the unique, intensive demands of AI and real-time data. Your data science teams are stuck waiting for resources, and your security team is overwhelmed."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="An App-Centric Mindset Fails AI Workloads"
                    description="Traditional cloud infrastructure is designed for stateless web applications, not the stateful, data-intensive, and GPU-heavy workloads of modern AI. A generic approach leads to underperformance, security vulnerabilities, and massive cost inefficiencies when applied to MLOps and large-scale data processing."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="A Purpose-Built, Multi-Cloud Foundation for AI"
                    description="We architect your cloud infrastructure with an AI-first mindset. We build a secure, multi-cloud foundation with automated governance (DevSecOps), cost optimization (FinOps), and purpose-built MLOps pipelines. This creates a high-performance, cost-effective, and secure environment where your AI and Cognitive Agents can run at enterprise scale."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Cloud & Infrastructure System Does"
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
                    <p>Our Cloud Engineering practice builds the resilient foundation that hosts the entire Akin platform. We architect the scalable compute and storage for your **Unified Ontology** and **MLOps Engine**, ensuring that your **Cognitive Agents** run reliably and securely, with all operations visible in the **Command Center**.</p>
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
                    description="A modern, AI-ready cloud foundation is essential for any enterprise looking to compete in the cognitive era."
                    align='center'
                    maxWidth='lg'
                />
                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <h4 className="mt-2 font-bold">AI-Ready Platform Engineering</h4>
                        <p className="text-sm text-charcoal-light">We build the specialized MLOps foundations your AI workloads need to run at scale.</p>
                    </div>
                    <div className="p-4">
                        <CloudIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Hybrid & Multi-Cloud Expertise</h4>
                        <p className="text-sm text-charcoal-light">We architect for flexibility, avoiding vendor lock-in and leveraging the best of each platform.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Automated Governance</h4>
                        <p className="text-sm text-charcoal-light">We embed security (DevSecOps) and cost control (FinOps) into your infrastructure as code.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your AI-Optimized Foundation."
                    description="Let’s design the secure, scalable, and cost-effective cloud infrastructure your enterprise needs to win."
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

export default CloudPage;
