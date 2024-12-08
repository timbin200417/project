import React from 'react';
import './styles.css';

const Button = ({
  onClick,
  children,
  variant = 'default',
  disabled = false,
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
