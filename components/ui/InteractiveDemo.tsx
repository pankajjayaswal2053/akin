import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ServerStackIcon, CircleStackIcon, CpuChipIcon, ArrowTrendingUpIcon, ChartBarIcon, BuildingStorefrontIcon, TruckIcon } from '@heroicons/react/24/outline';

const steps = [
    { title: "The Chaos: Your Data is Trapped", description: "Disconnected systems like ERPs, data lakes, and SCADA feeds create a fragmented view, making intelligent action impossible." },
    { title: "The Unification: The Unified Ontology", description: "Data flows from these silos into the Akin OS, creating a single, contextual model of your entire operation—a living digital twin." },
    { title: "The Insight: Intelligence is Generated", description: "Bespoke AI models, running on the Ontology, generate predictive insights, from forecasting demand to identifying potential equipment failures." },
    { title: "The Action: Driving Real-World Outcomes", description: "These insights are deployed directly into your operations, triggering automated actions and empowering your teams to make better, faster decisions." },
];

const dataSources = [
    { name: 'ERP', icon: ServerStackIcon, position: 'top-1/4 left-1/4' },
    { name: 'Data Lake', icon: CircleStackIcon, position: 'top-1/3 right-1/4' },
    { name: 'SCADA', icon: CpuChipIcon, position: 'bottom-1/3 left-1/4' },
    { name: 'Logistics Feed', icon: TruckIcon, position: 'bottom-1/4 right-1/4' },
];

const outcomes = [
    { name: 'Predictive Maintenance', icon: ArrowTrendingUpIcon, position: 'top-1/4 left-1/4' },
    { name: 'Demand Forecasting', icon: ChartBarIcon, position: 'top-1/3 right-1/4' },
    { name: 'Inventory Optimization', icon: BuildingStorefrontIcon, position: 'bottom-1/3 left-1/4' },
];

const InteractiveDemo: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    // Recalibrated ranges for better visibility and smoother transitions.
    // Each step gets a clearer, more defined segment of the scroll progress.

    // Text animations
    const text1Opacity = useTransform(scrollYProgress, [0, 0.20], [1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.20, 0.25, 0.45, 0.50], [0, 1, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.45, 0.50, 0.70, 0.75], [0, 1, 1, 0]);
    const text4Opacity = useTransform(scrollYProgress, [0.70, 0.75, 1], [0, 1, 1]);

    const textOpacities = [text1Opacity, text2Opacity, text3Opacity, text4Opacity];

    // Visual animations
    const sourcesOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const linesToCenterProgress = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
    const ontologyOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0]);
    const ontologyScale = useTransform(scrollYProgress, [0.25, 0.3], [0.5, 1]);
    const linesFromCenterProgress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const outcomesOpacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
    const outcomesScale = useTransform(scrollYProgress, [0.75, 0.8], [0.8, 1]);


    return (
        <section ref={targetRef} className="relative h-[400vh] bg-white text-charcoal">
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
                {/* Left Side: Text Description */}
                <div className="w-full lg:w-1/3 h-full flex items-center p-8 lg:p-12 bg-gray-50/80 backdrop-blur-sm z-10">
                    <div className="relative w-full h-48">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                style={{ opacity: textOpacities[index] }}
                                className="absolute inset-0"
                            >
                                <p className="font-bold text-electric-blue">Step {index + 1}</p>
                                <h2 className="text-3xl font-extrabold my-2">{step.title}</h2>
                                <p className="text-lg text-charcoal-light">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Visualization */}
                <div className="w-full lg:w-2/3 h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* 1. Data Sources (Chaos) */}
                        <motion.div style={{ opacity: sourcesOpacity }}>
                            {dataSources.map(({ name, icon: Icon, position }) => (
                                <div key={name} className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`}>
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-md">
                                            <Icon className="h-8 w-8 text-charcoal-light" />
                                        </div>
                                        <p className="font-semibold text-sm">{name}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        
                        {/* Center Point: Ontology */}
                         <motion.div
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-center"
                            style={{
                                opacity: ontologyOpacity,
                                scale: ontologyScale,
                            }}
                        >
                            <div className="w-32 h-32 bg-electric-blue rounded-full flex items-center justify-center shadow-2xl shadow-electric-blue/50">
                                <CpuChipIcon className="h-16 w-16 text-white" />
                            </div>
                            <p className="font-bold text-lg text-charcoal">Unified Ontology</p>
                        </motion.div>
                        
                        {/* 4. Outcomes (Action) */}
                         <motion.div style={{ opacity: outcomesOpacity, scale: outcomesScale }}>
                            {outcomes.map(({ name, icon: Icon, position }) => (
                                <div key={name} className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`}>
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <div className="w-20 h-20 bg-green-100 border-2 border-green-300 rounded-full flex items-center justify-center shadow-md">
                                            <Icon className="h-10 w-10 text-green-600" />
                                        </div>
                                        <p className="font-semibold text-sm">{name}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Animated Lines SVG */}
                        <svg className="absolute w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
                            {/* 2. Lines to Center */}
                            <motion.path d="M 325,225 L 500,300" stroke="#a7b6d4" strokeWidth="2" strokeDasharray="5" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesToCenterProgress, p => 1 - p) }}/>
                            <motion.path d="M 675,250 L 500,300" stroke="#a7b6d4" strokeWidth="2" strokeDasharray="5" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesToCenterProgress, p => 1 - p) }}/>
                            <motion.path d="M 325,400 L 500,300" stroke="#a7b6d4" strokeWidth="2" strokeDasharray="5" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesToCenterProgress, p => 1 - p) }}/>
                            <motion.path d="M 675,450 L 500,300" stroke="#a7b6d4" strokeWidth="2" strokeDasharray="5" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesToCenterProgress, p => 1 - p) }}/>

                            {/* 3. Lines from Center */}
                            <motion.path d="M 500,300 L 325,225" stroke="#00D7FF" strokeWidth="3" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesFromCenterProgress, p => 1 - p) }}/>
                            <motion.path d="M 500,300 L 675,250" stroke="#00D7FF" strokeWidth="3" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesFromCenterProgress, p => 1 - p) }}/>
                            <motion.path d="M 500,300 L 325,400" stroke="#00D7FF" strokeWidth="3" fill="none" pathLength="1" style={{ strokeDashoffset: useTransform(linesFromCenterProgress, p => 1 - p) }}/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveDemo;