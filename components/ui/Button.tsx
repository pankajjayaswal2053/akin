import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, children, primary = true, className = '' }) => {
  const baseClasses = "inline-block px-8 py-3 rounded-md font-semibold text-center text-sm uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Primary: Filled, accent.primary background, charcoal text. Hover: brightness increase.
  const primaryClasses = "bg-electric-blue text-charcoal hover:brightness-110 focus:ring-electric-blue";
  
  // Secondary: Outline, Charcoal border, Electric Blue hover state.
  const secondaryClasses = "bg-transparent text-charcoal border-2 border-charcoal hover:bg-electric-blue hover:text-white hover:border-electric-blue focus:ring-charcoal";

  const appliedClasses = primary ? primaryClasses : secondaryClasses;

  const isExternal = to.startsWith('http') || to.startsWith('mailto:');
  const MotionLink = motion(Link);
  const MotionA = motion.a;

  // No jump or scale on hover.
  const buttonMotion = {
    whileTap: { scale: 0.98 },
  };

  if (isExternal) {
    return (
      <MotionA 
        href={to} 
        className={`${baseClasses} ${appliedClasses} ${className}`}
        {...buttonMotion}
        // @ts-ignore
        onMouseUp={(e) => e.currentTarget.blur()}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <MotionLink 
      to={to} 
      className={`${baseClasses} ${appliedClasses} ${className}`}
      {...buttonMotion}
      // @ts-ignore
      onMouseUp={(e) => e.currentTarget.blur()}
    >
      {children}
    </MotionLink>
  );
};

export default Button;