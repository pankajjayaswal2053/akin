
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export interface AccordionItemProps {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between items-center p-6 text-left"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <h3 className="text-lg font-semibold text-charcoal">{item.title}</h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDownIcon className="h-6 w-6 text-charcoal-light" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`accordion-content-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-charcoal-light prose prose-lg" dangerouslySetInnerHTML={{ __html: item.content }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
