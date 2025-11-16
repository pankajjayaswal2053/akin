import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../layout/Section';
import cn from '../../utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg';
}

const maxWidthClasses = {
  sm: 'max-w-xl',
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  maxWidth = 'md',
}) => {
  return (
    <motion.header
      variants={itemVariants}
      className={cn(maxWidthClasses[maxWidth], {
        'mx-auto text-center': align === 'center',
      })}
    >
      {eyebrow && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric-blue/90">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-charcoal dark:text-stone">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-charcoal-light dark:text-gray-300">
          {description}
        </p>
      )}
      <div
        className={cn('mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-electric-blue via-green to-fuchsia', {
          'mx-auto': align === 'center',
        })}
      />
    </motion.header>
  );
};

export default SectionHeader;
