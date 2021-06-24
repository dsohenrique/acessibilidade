import React from 'react';
import { Link } from 'react-router-dom';
import './styles';

export const Button = ({ to, children }) => {
  return (
    <div>
      <Link className="button" to={to}>
        {children}
      </Link>
      <div className="hint">Tecla Enter</div>
    </div>
  );
};
