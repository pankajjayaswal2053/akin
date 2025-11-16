
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bottomPosition, setBottomPosition] = useState('1.5rem');

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            if (scrolled > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            
            // Adjust position based on footer visibility
            const footer = document.getElementById('page-footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (footerRect.top < windowHeight) {
                    // Footer is in view, calculate overlap and adjust button position
                    const overlap = windowHeight - footerRect.top;
                    setBottomPosition(`${overlap + 24}px`); // 24px = 1.5rem
                } else {
                    setBottomPosition('1.5rem');
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="fixed right-6 bg-charcoal text-white p-3 rounded-full shadow-lg hover:bg-electric-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue z-50"
                    style={{ bottom: bottomPosition }}
                    aria-label="Scroll to top"
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
