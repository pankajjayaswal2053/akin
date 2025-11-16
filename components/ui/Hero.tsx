import React, { useRef } from 'react';
import NeuronBackground from './NeuronBackground';
import Globe from './Globe';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  breadcrumb?: React.ReactNode;
  showGlobe?: boolean;
  children?: React.ReactNode;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, breadcrumb, showGlobe = false, children, imageUrl }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <section ref={ref} className="hero-section text-center py-20 md:py-32 lg:py-40 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
      {imageUrl ? (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})`, y: backgroundY }}
        />
      ) : (
        <NeuronBackground translateY={backgroundY} />
      )}
      <div className="absolute inset-0 bg-charcoal/80" />
      {showGlobe && <Globe />}
      <motion.div
        className="hero-content max-w-4xl mx-auto px-4"
        style={{ scale: contentScale, opacity: contentOpacity }}
      >
        {breadcrumb && (
             typeof breadcrumb === 'string'
                ? <p className="text-base font-semibold text-electric-blue uppercase tracking-wide">{breadcrumb}</p>
                : <div className="text-base font-semibold text-electric-blue uppercase tracking-wide">{breadcrumb}</div>
        )}
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          {subtitle}
        </p>
        {children}
      </motion.div>
    </section>
  );
};

export default Hero;