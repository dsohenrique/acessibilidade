import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles';

export const BackArrow = ({ tabIndex, to }) => {
  const history = useHistory();
  const back = () => {
    history.push(to);
  };
  return (
    <div tabIndex={tabIndex} className="back">
      <Link
        tabIndex={tabIndex}
        className="back-arrow"
        aria-label="para voltar pressione enter"
        onClick={() => back()}
        onKeyDown={({ key }) => key === ' ' && back()}
      />
      <div className="back-hint">Tecla Backspace</div>
    </div>
  );
};
