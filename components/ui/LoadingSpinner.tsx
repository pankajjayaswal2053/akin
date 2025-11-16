

import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="w-12 h-12 border-4 border-electric-blue border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;