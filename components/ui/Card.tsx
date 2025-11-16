import React from 'react';
import cn from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        'group bg-white border border-gray-200/80 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
