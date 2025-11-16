
import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

export interface SolutionCapability {
    icon: React.ElementType;
    name: string;
    description: string;
}

export interface SolutionProof {
    metric: string;
    description: string;
    source: string;
}

export interface SolutionDetailProps {
    challenge: {
        icon: React.ElementType;
        title: string;
        description: string;
    };
    approach: {
        icon: React.ElementType;
        title: string;
        description: string;
    };
    capabilities: SolutionCapability[];
    proof: SolutionProof;
}

const SolutionDetailLayout: React.FC<SolutionDetailProps> = ({ challenge, approach, capabilities, proof }) => {
    
    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1,
          // FIX: Add 'as const' to 'ease' property to satisfy framer-motion's Easing type.
          transition: { duration: 1, ease: "easeInOut" as const }
        }
    };

    return (
        <div className="py-20 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column: Narrative Flow */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* 1. The Challenge */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4">
                                <challenge.icon className="h-12 w-12 text-electric-blue" />
                                <div>
                                    <p className="font-bold text-charcoal">The Challenge</p>
                                    <h2 className="text-3xl font-extrabold text-charcoal">{challenge.title}</h2>
                                </div>
                            </div>
                            <p className="mt-4 text-lg text-charcoal-light">{challenge.description}</p>
                        </motion.section>

                        {/* Animated Connector */}
                        <motion.div 
                            className="h-24"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <motion.path
                                    d="M 50,0 V 100"
                                    stroke="currentColor"
                                    className="text-electric-blue/30"
                                    strokeWidth="2"
                                    strokeDasharray="4"
                                    variants={lineVariants}
                                />
                                <motion.path
                                    d="M 40,85 L 50,100 L 60,85"
                                    stroke="currentColor"
                                    className="text-electric-blue"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    variants={lineVariants}
                                />
                            </svg>
                        </motion.div>

                        {/* 2. Our Approach */}
                        <motion.section 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4">
                                <approach.icon className="h-12 w-12 text-electric-blue" />
                                <div>
                                    <p className="font-bold text-charcoal">Our Approach</p>
                                    <h2 className="text-3xl font-extrabold text-charcoal">{approach.title}</h2>
                                </div>
                            </div>
                            <p className="mt-4 text-lg text-charcoal-light">{approach.description}</p>
                        </motion.section>
                    </div>

                    {/* Right Column: Capabilities & Proof */}
                    <aside className="lg:sticky top-28 self-start space-y-8">
                        {/* Capabilities */}
                        <Card className="p-6">
                            <h3 className="text-xl font-bold text-charcoal mb-4">Core Capabilities</h3>
                            <div className="space-y-4">
                                {capabilities.map(cap => (
                                    <div key={cap.name} className="flex items-start gap-3">
                                        <cap.icon className="h-6 w-6 text-electric-blue flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-charcoal">{cap.name}</h4>
                                            <p className="text-sm text-charcoal-light">{cap.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Proof */}
                        <Card className="p-6 bg-charcoal text-white">
                             <div className="flex items-center gap-3">
                                <CheckBadgeIcon className="h-8 w-8 text-green-400" />
                                <h3 className="text-xl font-bold text-white">Proof in Action</h3>
                             </div>
                             <p className="mt-4 text-4xl font-extrabold text-green-400">{proof.metric}</p>
                             <p className="mt-2 font-semibold text-gray-200">{proof.description}</p>
                             <p className="mt-4 text-sm text-gray-400">Source: {proof.source}</p>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default SolutionDetailLayout;
