import React from 'react';
import './styles';

export const Input = ({ type, placeholder, tabIndex }) => {
  return <input type={type} placeholder={placeholder} tabIndex={tabIndex} />;
};
