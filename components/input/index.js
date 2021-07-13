import React from 'react';
import './styles';

export const Input = ({
  type,
  placeholder,
  tabIndex,
  autoFocus,
  ariaLabel,
  onFocus,
  onBlur
}) => {
  return (
    <input
    onBlur={onBlur}
      onFocus={onFocus}
      autoFocus={autoFocus}
      type={type}
      aria-label={ariaLabel}
      placeholder={placeholder}
      tabIndex={tabIndex}
    />
  );
};
