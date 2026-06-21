import React from 'react';

function Button({ label, onClick, variant = 'primary', className = '', disabled = false }) {
  const base = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-dark',
    secondary: 'bg-secondary text-white hover:bg-primary',
    accent: 'bg-accent text-dark hover:bg-yellow-400',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
