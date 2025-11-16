
import React from 'react';
import { motion } from 'framer-motion';
import { CpuChipIcon, CogIcon, SparklesIcon, ChartBarIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const pillars = [
    { name: 'Unified Ontology', description: "The 'digital twin' of your business. The single source of truth.", icon: CpuChipIcon },
    { name: 'Production MLOps Engine', description: 'The factory for building, deploying, and governing your bespoke AI.', icon: CogIcon },
    { name: 'Cognitive Agents', description: 'The autonomous workforce that reasons over the ontology to act.', icon: SparklesIcon },
    { name: 'Command Center', description: 'The human-in-the-loop interface for governance and collaboration.', icon: ChartBarIcon }
];

const diagramVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


const ArchitectureDiagram: React.FC = () => {
    return (
        <motion.div 
            className="mt-12"
            variants={diagramVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start relative">
                {/* Connecting Lines */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-electric-blue/20 -translate-y-1/2"></div>
                
                {pillars.map((pillar, index) => (
                    <motion.div 
                        key={pillar.name} 
                        className="relative flex flex-col items-center text-center"
                        variants={itemVariants}
                    >
                        {/* Circle with Icon */}
                        <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg relative z-10">
                            <pillar.icon className="h-10 w-10 text-electric-blue" />
                        </div>
                        {/* Connector Down */}
                        <div className="w-0.5 h-8 bg-electric-blue/20 hidden lg:block"></div>
                        <h3 className="mt-4 text-lg font-bold text-charcoal">{pillar.name}</h3>
                        <p className="mt-1 text-sm text-charcoal-light">{pillar.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ArchitectureDiagram;
