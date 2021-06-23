import React from 'react';
import { Link } from 'react-router-dom';
import './styles';

export const Button = ({ to, children }) => {
  return (
    <Link className="button" to={to}>
      {children}
    </Link>
  );
};
