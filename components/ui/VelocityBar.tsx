
import React from 'react';
import { Link } from 'react-router-dom';
import cn from '../../utils/cn';

const phases = [
    { letter: 'V', name: 'Vision', href: '/velocity/vision' },
    { letter: 'E', name: 'Engineering', href: '/velocity/engineering' },
    { letter: 'L', name: 'Logic', href: '/velocity/logic' },
    { letter: 'O', name: 'Operationalization', href: '/velocity/operationalization' },
    { letter: 'C', name: 'Collaboration', href: '/velocity/collaboration' },
    { letter: 'I', name: 'Intelligence', href: '/velocity/intelligence' },
    { letter: 'T', name: 'Trust', href: '/velocity/trust' },
    { letter: 'Y', name: 'Yield', href: '/velocity/yield' },
];

interface VelocityBarProps {
    activePhase: 'V' | 'E' | 'L' | 'O' | 'C' | 'I' | 'T' | 'Y';
}

const VelocityBar: React.FC<VelocityBarProps> = ({ activePhase }) => {
    return (
        <div className="flex justify-center items-center gap-2 md:gap-4 p-4 bg-white rounded-full border border-gray-200 shadow-sm max-w-2xl mx-auto">
            {phases.map((phase, index) => (
                <React.Fragment key={phase.letter}>
                    <Link
                        to={phase.href}
                        className={cn(
                            'w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full font-bold text-lg transition-all duration-300',
                            activePhase === phase.letter
                                ? 'bg-electric-blue text-white shadow-md scale-110'
                                : 'bg-gray-100 text-charcoal-light hover:bg-gray-200'
                        )}
                        aria-label={`Go to ${phase.name} phase`}
                    >
                        {phase.letter}
                    </Link>
                    {index < phases.length - 1 && <div className="flex-1 h-0.5 bg-gray-200 hidden sm:block"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default VelocityBar;
