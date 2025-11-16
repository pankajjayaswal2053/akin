
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import CookieSettingsModal, { CookiePreferences } from './CookieSettingsModal';

const defaultPreferences: CookiePreferences = {
    necessary: true,
    performance: false,
    functional: false,
    targeting: false,
};

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        try {
            const consent = localStorage.getItem('akin_cookie_preferences');
            if (consent === null) {
                setIsVisible(true);
            } else {
                setPreferences(JSON.parse(consent));
            }
        } catch (error) {
            console.error("Could not access localStorage:", error);
            // Fallback for environments where localStorage is blocked
            setIsVisible(true);
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        try {
            localStorage.setItem('akin_cookie_preferences', JSON.stringify(prefs));
            setPreferences(prefs);
            setIsVisible(false);
            setIsSettingsOpen(false);
            // Here you would typically initialize analytics, etc. based on prefs
        } catch (error) {
            console.error("Could not set localStorage item:", error);
            setIsVisible(false);
            setIsSettingsOpen(false);
        }
    };
    
    const handleDecline = () => {
        savePreferences({ necessary: true, performance: false, functional: false, targeting: false });
    };

    const handleAcceptAll = () => {
        savePreferences({ necessary: true, performance: true, functional: true, targeting: true });
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.5, ease: 'easeOut' as const }}
                        className="fixed bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm text-white p-4 z-[1000] shadow-2xl"
                        role="dialog"
                        aria-live="polite"
                        aria-label="Cookie consent"
                    >
                        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-sm text-gray-300 text-center sm:text-left">
                                We use cookies to enhance your browsing experience and analyze our traffic.
                                To learn more, please see our{' '}
                                <Link to="/cookie-policy" className="font-semibold text-electric-blue hover:underline">
                                    Cookie Policy
                                </Link>.
                            </p>
                            <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
                                <button
                                    onClick={() => setIsSettingsOpen(true)}
                                    className="px-4 py-2 text-sm bg-transparent border border-gray-500 text-gray-300 font-semibold rounded-md hover:bg-gray-700 hover:border-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus:ring-electric-blue"
                                    aria-label="Customize cookie settings"
                                >
                                    Customize
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="px-4 py-2 text-sm bg-transparent border border-gray-500 text-gray-300 font-semibold rounded-md hover:bg-gray-700 hover:border-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus:ring-electric-blue"
                                    aria-label="Decline optional cookies"
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-4 py-2 text-sm bg-electric-blue text-charcoal font-semibold rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus:ring-electric-blue"
                                    aria-label="Accept all cookies"
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CookieSettingsModal 
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                onSave={savePreferences}
                initialPreferences={preferences}
            />
        </>
    );
};

export default CookieConsent;
