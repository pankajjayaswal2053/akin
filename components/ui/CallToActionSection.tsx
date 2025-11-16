

import React from 'react';
import Button from './Button';

interface CallToActionSectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
    title = "Ready to Architect Your Advantage?",
    subtitle = "Let's move beyond proofs-of-concept and build a real operational Cognitive Agent Platform. Schedule a conversation with our architects to blueprint your solution.",
    buttonText = "Talk to an Architect",
    buttonLink = "/contact"
}) => {
    return (
        <section className="bg-charcoal text-white py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold">{title}</h2>
                <p className="mt-4 text-lg text-gray-300">
                    {subtitle}
                </p>
                <div className="mt-10 flex justify-center gap-x-6">
                    <Button to={buttonLink} className="!bg-electric-blue !text-charcoal hover:!bg-white">{buttonText}</Button>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
