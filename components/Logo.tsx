import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <img 
      src="/images/logos/logo.png" 
      alt="Logo Multiresaux" 
      className={`${className} object-contain`}
    />
  );
};