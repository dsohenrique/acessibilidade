import React from 'react';
import './styles';

export const Checkbox = () => {
  return (
    <div className="checkbox">
      <input type="checkbox" id="terms" name="terms" />
      <label for="terms">
        Aceito receber informações exclusivas da empresa Descomplica por e-mail
        ou SMS
      </label>
    </div>
  );
};
