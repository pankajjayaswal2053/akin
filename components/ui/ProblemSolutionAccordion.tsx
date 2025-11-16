
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline';

export interface ProblemSolutionItem {
  icon: React.ElementType;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
}

interface ProblemSolutionAccordionProps {
  items: ProblemSolutionItem[];
}

const ProblemSolutionAccordion: React.FC<ProblemSolutionAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      // FIX: Add 'as const' to 'ease' property to satisfy framer-motion's Easing type.
      transition: { duration: 0.8, ease: "easeInOut" as const, delay: 0.3 }
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white border border-gray-200/80 rounded-lg overflow-hidden transition-shadow hover:shadow-md">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-6 text-left"
            aria-expanded={activeIndex === index}
            aria-controls={`solution-content-${index}`}
          >
            <div className="flex items-center gap-4">
              <item.icon className="h-8 w-8 text-charcoal-light flex-shrink-0" />
              <h3 className="text-lg font-semibold text-charcoal">{item.problem.title}</h3>
            </div>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDownIcon className="h-6 w-6 text-charcoal-light" />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                id={`solution-content-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-8 grid md:grid-cols-2 md:gap-8 items-center">
                    {/* Problem */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}>
                        <h4 className="font-bold text-charcoal">The Problem</h4>
                        <p className="mt-2 text-charcoal-light">{item.problem.description}</p>
                    </motion.div>
                    
                    {/* Visual Connector & Solution */}
                    <div className="flex items-center gap-4 mt-6 md:mt-0">
                         {/* Animated Line */}
                         <div className="w-16 h-16 hidden md:block">
                            <motion.svg viewBox="0 0 100 100" initial="hidden" animate="visible">
                                <motion.path
                                    d="M 10,50 L 90,50"
                                    stroke="currentColor"
                                    className="text-electric-blue"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    variants={lineVariants}
                                />
                                 <motion.path
                                    d="M 75,35 L 90,50 L 75,65"
                                    stroke="currentColor"
                                    className="text-electric-blue"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    variants={lineVariants}
                                />
                            </motion.svg>
                        </div>

                         {/* Solution */}
                        <motion.div className="flex-1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}>
                             <div className="flex items-center gap-2 font-bold text-green-600">
                                <SparklesIcon className="h-5 w-5"/>
                                <h4>The Akin Solution</h4>
                             </div>
                            <p className="mt-2 text-charcoal-light">{item.solution.description}</p>
                        </motion.div>
                    </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProblemSolutionAccordion;
