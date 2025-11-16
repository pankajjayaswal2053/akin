import React from 'react';

interface AkinLogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

const AkinLogo: React.FC<AkinLogoProps> = ({ className, variant = 'light' }) => {
    const logoSrc = variant === 'dark' ? '/images/logo-dark.png' : '/images/logo.png';
    return (
        <img
            src={logoSrc}
            alt="Akin Technology Logo"
            className={className}
            width={120}
            height={32}
        />
    );
};

export default AkinLogo;
