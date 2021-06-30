import React from 'react';
import './styles';

export const Heading = ({ tabIndex, children }) => {
  return (
    <span tabIndex={tabIndex} className="heading">
      {children}
    </span>
  );
};
