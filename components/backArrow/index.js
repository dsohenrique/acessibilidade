import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles';

export const BackArrow = to => {
  const history = useHistory();
  const back = () => {
    console.log('opa');
    history.push(to);
  };
  return (
    <Link
      tabIndex="0"
      className="back-arrow"
      onClick={() => back()}
      onKeyDown={({ key }) => key === ' ' && back()}
    />
  );
};
