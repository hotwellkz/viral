import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BetaButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function BetaButton({ className = '', children = 'Присоединиться к бете' }: BetaButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#AAFF00] text-black font-medium hover:bg-[#88CC00] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}