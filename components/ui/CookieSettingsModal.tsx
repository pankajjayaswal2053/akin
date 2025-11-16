
import React, { useState, useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface CookiePreferences {
    necessary: boolean;
    performance: boolean;
    functional: boolean;
    targeting: boolean;
}

interface CookieSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (prefs: CookiePreferences) => void;
    initialPreferences: CookiePreferences;
}

const Toggle: React.FC<{ label: string; enabled: boolean; onToggle: (enabled: boolean) => void; disabled?: boolean; description: string; }> = ({ label, enabled, onToggle, disabled = false, description }) => {
    const labelId = useId();
    const descriptionId = useId();

    return (
        <div className={`py-4 border-b border-gray-200 ${disabled ? 'opacity-60' : ''}`}>
            <div className="flex justify-between items-center">
                <h4 id={labelId} className="font-semibold text-charcoal">
                    {label}
                </h4>
                <button
                    type="button"
                    onClick={() => !disabled && onToggle(!enabled)}
                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${enabled ? 'bg-electric-blue' : 'bg-gray-300'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={disabled}
                    aria-checked={enabled}
                    role="switch"
                    aria-labelledby={labelId}
                    aria-describedby={descriptionId}
                    aria-disabled={disabled}
                >
                    <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
            </div>
            <p id={descriptionId} className="text-sm text-charcoal-light mt-2">
                {description}
            </p>
        </div>
    );
};

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({ isOpen, onClose, onSave, initialPreferences }) => {
    const [preferences, setPreferences] = useState<CookiePreferences>(initialPreferences);

    useEffect(() => {
        setPreferences(initialPreferences);
    }, [initialPreferences, isOpen]);
    
    const handleToggle = (category: keyof Omit<CookiePreferences, 'necessary'>, value: boolean) => {
        setPreferences(prev => ({ ...prev, [category]: value }));
    };
    
    const handleSave = () => {
        onSave(preferences);
    };

    const handleAcceptAll = () => {
        onSave({ necessary: true, performance: true, functional: true, targeting: true });
    };

    if (!isOpen) return null;

    const titleId = 'cookie-settings-title';

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] flex items-center justify-center p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-labelledby={titleId}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            >
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 id={titleId} className="text-xl font-bold text-charcoal">
                        Customize Cookie Consent
                    </h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100" aria-label="Close modal">
                        <XMarkIcon className="h-6 w-6 text-charcoal-light" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-2">
                    <p className="text-charcoal-light mb-4">You can adjust your preferences for cookies below. Strictly necessary cookies cannot be disabled.</p>
                    <Toggle
                        label="Strictly Necessary Cookies"
                        enabled={true}
                        onToggle={() => {}}
                        disabled={true}
                        description="These cookies are essential for the website to function and cannot be switched off."
                    />
                    <Toggle
                        label="Performance Cookies"
                        enabled={preferences.performance}
                        onToggle={(val) => handleToggle('performance', val)}
                        description="These cookies allow us to count visits and traffic sources to measure and improve our site's performance."
                    />
                     <Toggle
                        label="Functional Cookies"
                        enabled={preferences.functional}
                        onToggle={(val) => handleToggle('functional', val)}
                        description="These cookies enable the website to provide enhanced functionality and personalization."
                    />
                     <Toggle
                        label="Targeting Cookies"
                        enabled={preferences.targeting}
                        onToggle={(val) => handleToggle('targeting', val)}
                        description="These cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads."
                    />
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-3">
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-transparent border border-charcoal text-charcoal font-semibold rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-electric-blue"
                    >
                        Save My Preferences
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="px-6 py-2 bg-electric-blue text-charcoal font-semibold rounded-md hover:bg-white hover:border-charcoal border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-electric-blue"
                    >
                        Accept All
                    </button>
                </div>

            </motion.div>
        </div>
    );
};

export default CookieSettingsModal;
