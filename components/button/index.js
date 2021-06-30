import React from 'react';
import { Link } from 'react-router-dom';
import './styles';

export const Button = ({
  keyPressHandler,
  tabIndex,
  ariaLabel,
  to,
  children
}) => {
  return (
    <div
      onKeyPress={keyPressHandler}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      <Link className="button" to={to}>
        {children}
      </Link>
      <div className="hint">Tecla Enter</div>
    </div>
  );
};
