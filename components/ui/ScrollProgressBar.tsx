import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-electric-blue z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgressBar;