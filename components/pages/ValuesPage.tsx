
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';
import { RocketLaunchIcon, UserGroupIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useSEO } from '../seo/useSEO';
import { motion } from 'framer-motion';

const values = [
    {
        name: 'Architect the Future',
        icon: RocketLaunchIcon,
        coreStatement: "We are architects, not just engineers. We don't just solve today's problem; we design the strategic, resilient platform that anticipates tomorrow's. We believe the best solution is one that is both brilliantly architected and perfectly executed.",
        whyItMatters: "You get a single, accountable partner that bridges the gap between C-suite strategy and production-grade code. We ensure your technical foundation is a long-term strategic asset, not a short-term fix.",
        howWeLiveIt: "Our VELOCITY: Vision phase is this value in action. We embed with your teams to map your operational reality and design the architectural blueprint *before* we write a single line of code."
    },
    {
        name: 'Deliver Operational Truth',
        icon: ShieldCheckIcon,
        coreStatement: "In an age of AI hallucinations, we are defined by 'production-or-nothing' realism. Our platform delivers a single, verifiable, and auditable source of truth. We build systems that are trusted to run mission-critical operations.",
        whyItMatters: "This is our 'no black box' guarantee. Your cognitive agents reason over your Unified Ontology—a single, verifiable map of your business—so their actions are trustworthy, auditable, and based on reality, not a guess.",
        howWeLiveIt: "Our Responsible AI framework and 'Ontology-First' principle are our non-negotiable commitments to building systems that are secure, explainable, and bias-mitigated from day one."
    },
    {
        name: 'Act with Shared Ownership',
        icon: UserGroupIcon,
        coreStatement: "We are partners, not vendors. We embed with your teams and work as a single, low-ego unit with a shared goal. We take on your challenge as our own, with total accountability for the outcome.",
        whyItMatters: "This eliminates the friction of a traditional client-vendor relationship. We build trust, transfer knowledge, and ensure the final platform is fully adopted and championed by your own teams—because we built it *together*.",
        howWeLiveIt: "Our VELOCITY: Collaborate phase is built on this. We sit side-by-side with your operators post-launch, gathering real-world feedback and driving adoption as one team."
    },
    {
        name: 'Power the Cognitive Operation',
        icon: SparklesIcon,
        coreStatement: "This is our 'why.' Our purpose is not just to build platforms; it is to create a new, more resilient way of doing business. We envision a future where organizations are not just automated, but autonomous—able to sense, predict, and adapt to change.",
        whyItMatters: "You get a partner who is 100% focused on your ultimate goal: creating a self-driving, 'Cognitive Operation' that is more efficient, more resilient, and holds an unassailable competitive advantage.",
        howWeLiveIt: "Our 'Autonomous Enterprise' vision is this value in action. We deploy cognitive agents that don't just *report* on your business; they actively *improve* it 24/7, fulfilling the promise of operational AI."
    }
];

const comparison = [
    { instead: "Embracing Possibilities", we: "Architect the Future", detail: "We deliver the blueprint *and* the production-grade code." },
    { instead: "Engaging Openly", we: "Deliver Operational Truth", detail: "We build auditable, verifiable systems, not just have nice chats." },
    { instead: "Learning Continuously", we: "Power the Cognitive Operation", detail: "We build your 'Autonomous Enterprise,' not just a 'learning mindset.'" }
];

const thriveConnections = [
    { value: "Architect the Future", pillars: "Technology & Innovation" },
    { value: "Deliver Operational Truth", pillars: "Results" },
    { value: "Act with Shared Ownership", pillars: "Humanity" },
    { value: "Power the Cognitive Operation", pillars: "Valiant & Exceptional" },
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


const ValuesPage: React.FC = () => {
    useSEO({
        title: 'Our Core Values | Akin Technology',
        description: 'Our values are our operational commitments. Explore the principles of our engineering and architectural discipline, from Architecting the Future to Powering the Cognitive Operation.',
        ogImage: '/images/hero/values.jpg'
    });

    return (
        <div>
            <Hero
                breadcrumb="Who We Are"
                title="Our Core Values"
                subtitle="These are not just aspirations; they are our operational commitments. They are the principles that define our identity, our actions, and our partnership with you."
                imageUrl="/images/hero/values.jpg"
            />

            <div className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-20">
                    {values.map((value) => (
                        <motion.section 
                            key={value.name}
                            className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/80"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <value.icon className="h-12 w-12 text-electric-blue flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-3xl font-extrabold text-charcoal">{value.name}</h2>
                                    <p className="mt-4 text-xl text-charcoal-light italic">{value.coreStatement}</p>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200 grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-charcoal">Why It Matters (For You):</h3>
                                    <p className="mt-2 text-charcoal-light">{value.whyItMatters}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-charcoal">How We Live It:</h3>
                                    <p className="mt-2 text-charcoal-light">{value.howWeLiveIt}</p>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>

            <motion.section 
                className="py-20 md:py-32 bg-stone"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our Values Are Operational, Not Aspirational</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                            Many companies have values that are generic 'feel-good' statements. Our values are different. They are the hard-edged, actionable principles of our engineering and architectural discipline. They are a promise of *how we deliver*.
                        </p>
                    </div>
                    <div className="mt-16 max-w-4xl mx-auto space-y-4">
                        {comparison.map((item) => (
                             <motion.div key={item.instead} variants={itemVariants}>
                                <Card className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                    <div className="text-center md:text-right">
                                        <p className="text-lg text-charcoal-light line-through">{item.instead}</p>
                                    </div>
                                    <div className="text-center text-2xl font-bold text-electric-blue">&rarr;</div>
                                    <div>
                                        <p className="text-xl font-bold text-charcoal">{item.we}</p>
                                        <p className="text-charcoal-light text-sm mt-1">{item.detail}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="py-20 md:py-32 bg-white"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">How Our Values Power Your "Thrive" Score</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           Our "Thrive Index" is our proprietary framework for measuring an organization's operational resilience and potential. Our Core Values are the engine we use to help you improve that score.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {thriveConnections.map((item, index) => {
                            // FIX: Component names in JSX must start with a capital letter.
                            // To render a component from an object property, assign it to a capitalized variable first.
                            const Icon = values[index].icon;
                            return (
                                <motion.div key={item.value} variants={itemVariants} className="flex flex-col items-center">
                                    <div className="bg-electric-blue/10 p-4 rounded-full">
                                        <Icon className="h-10 w-10 text-electric-blue" />
                                    </div>
                                    <p className="mt-4 font-semibold text-charcoal">{item.value}</p>
                                    <p className="mt-2 text-3xl font-bold text-electric-blue">&darr;</p>
                                    <p className="mt-2 text-charcoal-light">Builds Your <strong className="text-charcoal">{item.pillars}</strong> Pillars</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            <CallToActionSection
                title="Join a Values-Driven Team"
                subtitle="If our principles resonate with you, we invite you to explore a career at Akin. We're looking for talented individuals who share our commitment to building impactful, responsible technology."
                buttonText="Explore Careers at Akin"
                buttonLink="/careers"
            />
        </div>
    );
};

export default ValuesPage;
