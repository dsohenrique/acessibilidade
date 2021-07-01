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
        onClick={() => back()}
        onKeyDown={({ key }) => key === ' ' && back()}
      />
      <span>Seta para a direita</span>
    </div>
  );
};
