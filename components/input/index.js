import React from 'react';
import './styles';

export const Input = ({
  type,
  placeholder,
  tabIndex,
  autoFocus,
  ariaLabel
}) => {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      aria-label={ariaLabel}
      placeholder={placeholder}
      tabIndex={tabIndex}
    />
  );
};
