import React from 'react';
import Button from './Button';
import GraphicElement from './GraphicElement';

interface ImageCallToActionSectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
}

const ImageCallToActionSection: React.FC<ImageCallToActionSectionProps> = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
    imageUrl
}) => {
    return (
        <section className="relative bg-charcoal text-white py-24 md:py-32 overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        {subtitle}
                    </p>
                    <div className="mt-10">
                        <Button to={buttonLink} className="!bg-electric-blue !text-charcoal hover:!bg-white">{buttonText}</Button>
                    </div>
                </div>
            </div>
            
            <GraphicElement type="swoosh" className="absolute -bottom-24 -right-40 w-1/2 h-auto text-electric-blue/10 transform scale-x-[-1]" />
        </section>
    );
};

export default ImageCallToActionSection;