import React from 'react';
import './styles';

export const Checkbox = ({ tabIndex }) => {
  return (
    <div className="checkbox">
      <input tabIndex={tabIndex} type="checkbox" id="terms" name="terms" />
      <label for="terms">
        Aceito receber informações exclusivas da empresa Descomplica por e-mail
        ou SMS
      </label>
    </div>
  );
};
