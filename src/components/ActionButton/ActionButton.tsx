import React from 'react';

export type ActionButtonProps = {
  onClick: () => void;
  label: string;
  variant?: 'remove' | 'add' | 'search';
  className?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  label,
  variant = 'add',
  className = '',
}) => {
  const baseStyles =
    ' px-6 py-2 font-bold text-sm rounded-lg shadow-md hover:shadow-lg transform transition focus:outline-none focus:ring-2';

  const stylesByVariant = {
    remove:
      'w-12 h-12 bg-red-500 text-white hover:bg-red-600 hover:scale-110 focus:ring-red-300 z-10 rounded-3xl text-xl flex items-center justify-center',
    add: 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white hover:scale-105 focus:ring-green-300',
    search:
      'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 focus:ring-purple-300',
  };

  const appliedStyles = `${baseStyles} ${stylesByVariant[variant]} ${className}`;

  return (
    <button onClick={onClick} className={appliedStyles}>
      {label}
    </button>
  );
};

export default ActionButton;
