

import React from 'react';

// FIX: Added 'swoosh' and 'dots' to the type definition to support their usage in other components and resolve TypeScript errors.
interface GraphicElementProps {
  type: 'grid' | 'wave' | 'swoosh' | 'dots';
  className?: string;
}

const GraphicElement: React.FC<GraphicElementProps> = ({ type, className = '' }) => {
  if (type === 'grid') {
    return (
      <svg
        className={className}
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" opacity="0.4"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#grid-pattern)"></rect>
      </svg>
    );
  }

  if (type === 'wave') {
      return (
        <svg 
            className={className}
            viewBox="0 0 537 313" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
          <path d="M479 0.5C410.593 17.5029 270.089 83.3155 174.453 203.07C78.817 322.824 10.3636 439.462 0 494" stroke="currentColor" strokeWidth="2" opacity="0.1"/>
          <path d="M537 0.5C461.533 19.3362 308.831 92.1723 204.478 221.991C100.125 351.809 25.0617 477.842 0 537" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
        </svg>
      );
  }

  if (type === 'swoosh') {
    return (
      <svg 
        className={className}
        viewBox="0 0 537 313" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M537 0.5C461.533 19.3362 308.831 92.1723 204.478 221.991C100.125 351.809 25.0617 477.842 0 537" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (type === 'dots') {
    return (
      <svg
        className={className}
        width="404"
        height="404"
        fill="none"
        viewBox="0 0 404 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#dots-pattern)"></rect>
      </svg>
    );
  }

  return null;
};

export default GraphicElement;