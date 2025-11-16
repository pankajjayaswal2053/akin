import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { 
    CloudIcon, 
    CircleStackIcon, 
    CogIcon, 
    ShieldCheckIcon, 
    CodeBracketSquareIcon, 
    BeakerIcon,
    ShareIcon,
    UserGroupIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { useSEO } from '../seo/useSEO';
import { motion } from 'framer-motion';

const principles = [
    { name: 'Ontology-First', description: 'The "digital twin" of your business is the core. We select technologies that can best build, query, and reason over your Unified Ontology.', icon: CodeBracketSquareIcon },
    { name: 'Radical Interoperability', description: 'Our platforms are "open by design." We architect systems that can integrate with anything, from modern APIs to your oldest legacy systems.', icon: ShareIcon },
    { name: 'Bespoke Intelligence', description: "We don't use 'off-the-shelf' models. We build custom AI and cognitive agents, which requires a best-in-class MLOps stack for training and deployment.", icon: BeakerIcon },
    { name: 'Mission-Critical Resilience', description: 'Your platform will run your operations. We select only enterprise-grade, scalable, and secure technologies that are proven in production.', icon: ShieldCheckIcon },
];

const stackLayers = [
    { 
        icon: CloudIcon, 
        title: 'Layer 1: The Cloud Foundation (Cloud-Native & Agnostic)', 
        description: "This is the secure, scalable, and resilient foundation. We are certified experts who build your platform on the infrastructure that's right for you.",
        tech: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'] 
    },
    { 
        icon: CircleStackIcon, 
        title: 'Layer 2: The Data & Ontology Layer (Unification)', 
        description: 'This is the "digital plumbing" and the core "brain" (the Ontology). We use high-performance tech to unify your federated data from all silos.',
        tech: ['Kafka', 'Spark', 'Airflow', 'Databricks', 'Snowflake', 'PostgreSQL', 'MongoDB'] 
    },
    { 
        icon: CogIcon, 
        title: 'Layer 3: The MLOps & Agent Engine (Intelligence)', 
        description: "This is the 'factory' for building, training, and deploying your cognitive agents. We use a robust MLOps stack to manage your AI models as production-grade software.",
        tech: ['Kubernetes (K8s)', 'MLflow', 'Docker', 'Seldon Core', 'Python', 'Go'] 
    },
    { 
        icon: CodeBracketSquareIcon, 
        title: 'Layer 4: The Operations Command Center (Experience)', 
        description: 'This is the human-in-the-loop interface. We build the intuitive dashboards and applications that allow your team to collaborate with and govern your AI agents.',
        tech: ['React', 'TypeScript', 'GraphQL', 'TailwindCSS'] 
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const, staggerChildren: 0.2 },
    },
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechnologyPage: React.FC = () => {
    useSEO({
        title: 'Our Technology Philosophy',
        description: 'We are technology-agnostic architects. We don\'t sell a "one-size-fits-all" stack; we select and integrate the "best-of-breed" technologies to build your bespoke, future-proof Cognitive Agent Platform.',
        keywords: 'technology stack, philosophy, architecture, best-of-breed, cloud native, mlops'
    });

    return (
        <div>
            <Hero
                breadcrumb="Our Platform"
                title="Our Technology Philosophy"
                subtitle="We are technology-agnostic architects. We don't sell a 'one-size-fits-all' stack; we select and integrate the 'best-of-breed' technologies to build your bespoke, future-proof Cognitive Agent Platform."
            />

            <motion.section 
                className="py-20 md:py-24 bg-white"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our Architectural Principles</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           Our technology choices are not based on vendor relationships; they are guided by the four core principles of your platform's architecture.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {principles.map(item => (
                            <motion.div key={item.name} variants={itemVariants}>
                                <Card className="h-full">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 bg-electric-blue/10 p-3 rounded-lg">
                                            <item.icon className="h-10 w-10 text-electric-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-charcoal">{item.name}</h3>
                                            <p className="mt-2 text-lg text-charcoal-light">{item.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-20 md:py-24 bg-stone"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">How We Architect Your Stack</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           While every platform is bespoke, we build using a curated, multi-layered stack. Each layer serves a specific purpose in powering your Cognitive Agent Platform.
                        </p>
                    </div>
                    <div className="mt-16 space-y-12">
                        {stackLayers.map(layer => (
                            <motion.div key={layer.title} variants={itemVariants}>
                                <Card className="w-full">
                                    <div className="grid md:grid-cols-3 gap-8 items-center">
                                        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                                            <layer.icon className="h-12 w-12 text-electric-blue" />
                                            <h3 className="text-xl font-bold text-charcoal mt-4">{layer.title}</h3>
                                            <p className="mt-2 text-charcoal-light">{layer.description}</p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                {layer.tech.map(tech => (
                                                    <span key={tech} className="px-3 py-1 bg-gray-200 text-charcoal font-medium rounded-full text-sm">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-20 md:py-24 bg-white"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our Philosophy: Best-of-Breed, Not Vendor Lock-In</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           Our "Architects & Engineers" approach means we are fundamentally different from a single-product vendor.
                        </p>
                    </div>
                    <div className="mt-16 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <motion.div variants={itemVariants}>
                                <Card className="h-full border-red-500/30">
                                    <h3 className="text-xl font-bold text-red-700">The "Single-Vendor" Trap</h3>
                                    <ul className="mt-4 space-y-3 text-charcoal-light list-disc list-inside">
                                        <li>You are forced into a "one-size-fits-all" product, even if it's a poor fit.</li>
                                        <li>You are locked into one vendor's ecosystem, limiting future innovation.</li>
                                        <li>The vendor sells you their product.</li>
                                    </ul>
                                </Card>
                            </motion.div>
                             <motion.div variants={itemVariants}>
                                <Card className="h-full border-green-500/30">
                                    <h3 className="text-xl font-bold text-green-700">Our "Best-of-Breed" Approach</h3>
                                    <ul className="mt-4 space-y-3 text-charcoal-light list-disc list-inside">
                                        <li>We are technology-agnostic. We select the right tool for your specific challenge.</li>
                                        <li>Our platforms are open by design. We build on open standards, giving you full control.</li>
                                        <li>We architect your platform. Our only incentive is to build the best possible solution.</li>
                                    </ul>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
            
            <motion.section
                className="py-20 md:py-24 bg-stone"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Learn More About Our "How"</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           Our technology stack is brought to life by our world-class partners and our proven methodology.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div variants={itemVariants}>
                            <Card className="text-center h-full">
                                <UserGroupIcon className="h-12 w-12 mx-auto text-electric-blue"/>
                                <h3 className="text-2xl font-bold text-charcoal mt-4">Our Partner Ecosystem</h3>
                                <p className="mt-2 text-charcoal-light">Our "best-of-breed" philosophy is powered by our deep partnerships with the world's leading technology providers.</p>
                                <div className="mt-6">
                                    <Button to="/partners" primary={false}>Explore Our Partners</Button>
                                </div>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card className="text-center h-full">
                                <RocketLaunchIcon className="h-12 w-12 mx-auto text-electric-blue"/>
                                <h3 className="text-2xl font-bold text-charcoal mt-4">Our VELOCITY Approach</h3>
                                <p className="mt-2 text-charcoal-light">Our VELOCITY framework is the end-to-end discipline we use to architect and deploy your platform with precision and speed.</p>
                                <div className="mt-6">
                                    <Button to="/velocity-approach" primary={false}>Explore Our Methodology</Button>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <CallToActionSection
                title="Ready to Build with a Modern Stack?"
                subtitle="Our engineering expertise allows us to select and integrate the best tools for your specific challenge. Let's discuss the right architecture for your goals."
                buttonText="Talk to a Platform Architect"
                buttonLink="/contact"
            />
        </div>
    );
};

export default TechnologyPage;
