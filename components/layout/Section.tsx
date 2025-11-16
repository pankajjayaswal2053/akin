import React from 'react';
import { motion, Variants } from 'framer-motion';
import cn from '../../utils/cn';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  tone?: 'light' | 'soft' | 'dark';
  align?: 'left' | 'center';
  className?: string;
  as?: 'section' | 'div';
}

const toneClasses = {
  light: 'bg-white text-charcoal',
  soft: 'bg-stone text-charcoal',
  dark: 'bg-charcoal text-stone dark',
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  tone = 'light',
  align = 'left',
  className,
  as: Component = 'section',
}) => {
  return (
    <Component id={id} className={cn(toneClasses[tone], className)}>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24',
          { 'text-center': align === 'center' }
        )}
      >
        {children}
      </motion.div>
    </Component>
  );
};

export default Section;
