import React from 'react';
import './styles';

export const Heading = ({ tabIndex, children }) => {
  return (
    <h5 tabIndex={tabIndex} className="heading">
      {children}
    </h5>
  );
};
