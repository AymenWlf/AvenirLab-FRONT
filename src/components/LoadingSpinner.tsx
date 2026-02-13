import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Chargement...'
}) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <h2 className="text-3xl font-bold text-blue-600">AvenirLab</h2>
      <p className="text-gray-600 text-lg">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
