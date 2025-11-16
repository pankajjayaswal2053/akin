import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import {
    CodeBracketSquareIcon,
    CpuChipIcon,
    SparklesIcon,
    ShieldCheckIcon,
    ServerStackIcon,
    CloudIcon,
    ShareIcon,
    Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../../seo/useSEO';
import ArchitectureDiagram from '../../ui/ArchitectureDiagram';

const capabilities = [
    { name: 'Systems Integration Architecture', description: 'Design and build the robust integration fabric that connects your legacy systems to your modern digital core.', icon: ShareIcon },
    { name: 'Domain-Driven Design (DDD)', description: 'Structure your software around your business domains, creating a clean, understandable, and scalable architecture.', icon: Square3Stack3DIcon },
    { name: 'Composable Microservices', description: 'Develop independent, decoupled services that can be composed into new applications, enabling rapid innovation.', icon: CodeBracketSquareIcon },
    { name: 'Cloud-Native Application Development', description: 'Build scalable, resilient, and secure applications for the cloud, leveraging modern practices to ensure your platform is future-proof.', icon: CloudIcon },
    { name: 'API Gateway & Management', description: 'Implement a secure and scalable front door for all your digital services, enabling both internal and external innovation.', icon: ServerStackIcon },
];

const outcomes = [
    { metric: '50%+', description: 'Faster feature development and release cycles', industry: 'Software Engineering' },
    { metric: '30%', description: 'Reduction in system integration and maintenance costs', industry: 'IT Operations' },
    { metric: '10x', description: 'Increase in developer productivity and satisfaction', industry: 'CTO / Engineering Leadership' },
];

const industries = [
    { name: 'CTO Organization', description: 'Leading the charge on modernizing the enterprise technology stack.' },
    { name: 'Platform Teams', description: 'Building the internal developer platforms (IDPs) that empower the entire organization.' },
    { name: 'Enterprise Architects', description: 'Designing the long-term technology roadmap for the business.' },
];

const DigitalEngineeringPage: React.FC = () => {
    useSEO({
        title: 'Digital Engineering Solutions',
        description: 'Architecting and building the robust, scalable, and mission-critical software platforms that power modern enterprises and form your intelligent core.',
        keywords: 'digital engineering, legacy modernization, cloud-native, microservices, API, platform engineering, domain-driven design'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="SOLUTION: DIGITAL ENGINEERING"
                title="From Legacy Sprawl to an Intelligent Core."
                subtitle="We architect and build the modern, composable digital platforms that form your enterprise's intelligent core. This is not just about updating technology; it's about re-architecting your business for agility, scale, and intelligence."
            >
                 <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/platform" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">Explore the Platform</Button>
                </div>
            </Hero>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Challenge"
                    title="The Enterprise Problem: Your Technology is Holding You Back"
                    description="Your business is trapped by a 'big ball of mud'—a complex tangle of monolithic, hard-to-change legacy systems. Making a simple update is slow, expensive, and risks breaking everything. Your best engineers are leaving because they spend all their time maintaining old code instead of building new value."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="soft">
                <SectionHeader
                    eyebrow="Why Traditional Approaches Fail"
                    title="Project-Driven Integration Creates More Sprawl"
                    description="Traditional IT modernization is a series of one-off, project-driven integrations. This 'point-to-point' approach only creates more complexity and technical debt. It solves one problem but makes the overall architecture even more brittle and harder to change in the future."
                    align='center'
                    maxWidth='lg'
                />
            </Section>

            <Section tone="light">
                <SectionHeader
                    eyebrow="The Akin Solution"
                    title="Architect the Digital Core Around Your Ontology and Agents"
                    description="We take an architecture-driven approach. We design your modern digital core around a clean, domain-driven model of your business—your Unified Ontology. This creates a flexible, composable set of services and APIs that allows you to safely strangle your legacy monoliths, unlock your data, and create the agile foundation required to deploy Cognitive Agents at scale."
                    align='center'
                    maxWidth='lg'
                />
            </Section>
            
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Core Capabilities"
                    title="What the Digital Engineering System Does"
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
                    <p>Our Digital Engineering practice builds the very foundation upon which the Akin platform runs. We architect the robust, scalable systems that host the **Unified Ontology** and allow **Cognitive Agents** to execute their tasks, all while being managed through a modern **MLOps Engine** and governed via the **Command Center**.</p>
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
                    description="This is a core capability for any enterprise looking to modernize its technology stack and build a foundation for digital innovation."
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
                        <h4 className="mt-2 font-bold">Ontology-Driven</h4>
                        <p className="text-sm text-charcoal-light">Our architecture is modeled on your business, not just technical requirements.</p>
                    </div>
                    <div className="p-4">
                        <Square3Stack3DIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Platform Mindset</h4>
                        <p className="text-sm text-charcoal-light">We build reusable platforms that accelerate your entire engineering organization.</p>
                    </div>
                     <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 mx-auto text-electric-blue" />
                        <h4 className="mt-2 font-bold">Pragmatic Modernization</h4>
                        <p className="text-sm text-charcoal-light">We de-risk your transformation by integrating with, not just replacing, your legacy core.</p>
                    </div>
                </div>
            </Section>

            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="CTA"
                    title="Architect Your Intelligent Core."
                    description="Let’s design the modern, composable digital platform that will unlock your data and power your future."
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

export default DigitalEngineeringPage;
