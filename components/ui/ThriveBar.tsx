
import React from 'react';
import { Link } from 'react-router-dom';
import cn from '../../utils/cn';

const phases = [
    { letter: 'T', name: 'Technology', href: '/thrive/technology' },
    { letter: 'H', name: 'Humanity', href: '/thrive/humanity' },
    { letter: 'R', name: 'Results', href: '/thrive/results' },
    { letter: 'I', name: 'Innovation', href: '/thrive/innovation' },
    { letter: 'V', name: 'Valiant', href: '/thrive/valiant' },
    { letter: 'E', name: 'Exceptional', href: '/thrive/exceptional' },
];

interface ThriveBarProps {
    activePhase: 'T' | 'H' | 'R' | 'I' | 'V' | 'E';
}

const ThriveBar: React.FC<ThriveBarProps> = ({ activePhase }) => {
    return (
        <div className="flex justify-center items-center gap-2 md:gap-4 p-4 bg-white rounded-full border border-gray-200 shadow-sm max-w-xl mx-auto">
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
                        aria-label={`Go to ${phase.name} principle`}
                    >
                        {phase.letter}
                    </Link>
                    {index < phases.length - 1 && <div className="flex-1 h-0.5 bg-gray-200 hidden sm:block"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ThriveBar;
