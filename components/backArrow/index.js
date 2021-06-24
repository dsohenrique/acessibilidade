import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles';

export const BackArrow = ({ to }) => {
  const history = useHistory();
  const back = () => {
    history.push(to);
  };
  return (
    <div className="back">
      <Link
        tabIndex="0"
        className="back-arrow"
        onClick={() => back()}
        onKeyDown={({ key }) => key === ' ' && back()}
      />
      <span>Tecla Backspace</span>
    </div>
  );
};
