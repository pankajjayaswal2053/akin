
import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { CpuChipIcon, ShareIcon, BeakerIcon, ShieldCheckIcon, CogIcon, SparklesIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useSEO } from '../seo/useSEO';
import OptimizedImage from '../ui/OptimizedImage';

const principles = [
    {
        name: 'Ontology-First',
        description: 'The foundation is a contextual model of your business, not just data. This "digital twin" ensures AI operates on context, leading to more accurate and relevant insights.',
        icon: CpuChipIcon
    },
    {
        name: 'Radical Interoperability',
        description: 'We are technology-agnostic. Our platform is architected to integrate with any system, cloud, or data source—legacy or modern. We use the right tool for the job, always.',
        icon: ShareIcon
    },
    {
        name: 'Bespoke Intelligence',
        description: "We don't use off-the-shelf models. We build custom AI that understands the unique logic, nuances, and minute details of your specific operation.",
        icon: BeakerIcon
    },
    {
        name: 'Mission-Critical Resilience',
        description: 'Our systems are engineered for the enterprise with unwavering security, scalability, and reliability, designed for mission-critical deployment.',
        icon: ShieldCheckIcon
    },
];

const fourPillars = [
    { name: "The Unified Ontology", description: "The 'digital twin' of your business. The single, verifiable source of truth for all data, models, and operations.", icon: CpuChipIcon },
    { name: "Production MLOps Engine", description: "The secure, scalable factory for building, testing, and deploying your bespoke AI and cognitive agents reliably.", icon: CogIcon },
    { name: "Cognitive Agents", description: "The autonomous workforce. AI agents that reason over the Ontology to predict, decide, and act on your behalf 24/7.", icon: SparklesIcon },
    { name: "Operations Command Center", description: "The 'human-in-the-loop' interface for governing, monitoring, and collaborating with your entire fleet of AI agents.", icon: ChartBarIcon }
];


const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const PlatformPage: React.FC = () => {
    useSEO({
        title: 'The Cognitive Agent Platform',
        description: 'We architect and build your bespoke, operational core—a foundational platform that unifies your data and empowers intelligent agents to reason and act on your behalf.',
        keywords: 'cognitive agent platform, digital twin, unified ontology, bespoke AI, technology agnostic',
        ogImage: '/images/og-platform.jpg'
    });

    return (
        <div className="bg-stone">
            <Hero
                breadcrumb="Our Platform"
                title="The Cognitive Agent Platform"
                subtitle="We don't sell a product. We architect and build your bespoke, operational core—a foundational platform that unifies your data and empowers intelligent agents to reason and act on your behalf."
            />

            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div className="pr-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={itemVariants}>
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                           Beyond a Product, An Intelligent Core
                        </h2>
                        <p className="mt-6 text-lg text-charcoal-light">
                           A platform is a tool with a defined set of features. An intelligent core is a foundational environment that enables limitless capabilities. We build the latter.
                        </p>
                        <p className="mt-4 text-lg text-charcoal-light">
                           Our Cognitive Agent Platform is not a product you buy, but a bespoke system we architect specifically for you. It's tailored to every minute detail of your operation, designed to evolve as you do, ensuring your technology is a perpetual source of competitive advantage.
                        </p>
                    </motion.div>
                     <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                        <OptimizedImage 
                            src="/images/ontology-concept.jpg" 
                            alt="A 3D visualization of a data ontology, showing a central node connecting to various business concepts." 
                            width={800} 
                            height={600} 
                            className="rounded-lg shadow-xl" 
                        />
                     </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            Our Architectural Principles
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                            These principles are the blueprint for your platform. They are the non-negotiable foundation that allows intelligent agents to run, reason, and act with your full confidence.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="mt-16 grid gap-8 md:grid-cols-2"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {principles.map((p) => (
                             <motion.div key={p.name} variants={itemVariants}>
                                <Card>
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 bg-electric-blue/10 p-3 rounded-lg">
                                            <p.icon className="h-10 w-10 text-electric-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-charcoal">{p.name}</h3>
                                            <p className="mt-2 text-lg text-charcoal-light">{p.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            <motion.section 
                className="py-20 md:py-32 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            The Four Pillars of the Cognitive Agent Platform
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           Our platform transforms your fragmented data landscape into a cohesive, intelligent engine. It's built on four integrated pillars:
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {fourPillars.map((pillar) => (
                             <motion.div key={pillar.name} variants={itemVariants}>
                                <Card>
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 bg-electric-blue/10 p-3 rounded-lg">
                                            <pillar.icon className="h-10 w-10 text-electric-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-charcoal">{pillar.name}</h3>
                                            <p className="mt-2 text-lg text-charcoal-light">{pillar.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <CallToActionSection
                title="See Your Cognitive Platform in Action."
                subtitle="The best way to understand the power of our approach is to see it applied to your challenges. Schedule a personalized discussion with one of our platform architects."
                buttonText="Architect Your Platform"
            />
        </div>
    );
};

export default PlatformPage;
