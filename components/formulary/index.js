import React, { useEffect } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { Heading } from '../heading';
import { useHistory } from 'react-router-dom';
import { keyHandler } from '../../utils/keyHandler';

import './styles';
export const Formulary = () => {
  const history = useHistory();
  const eventHandler = evt => {
    keyHandler(evt, history, '/etapa5', '/etapa3');
  };
  useEffect(() => {
    window.addEventListener('keydown', eventHandler);
    return () => {
      window.addEventListener('keydown', eventHandler);
    };
  });

  return (
    <div className="form">
      <Heading>Pra finalizar, preenche esses últimos dados pra gente</Heading>
      <div className="inputs">
        <Input type="text" placeholder="Nome" tabIndex="0" autoFocus />
        <Input type="text" placeholder="Telefone" />
        <Input type="text" placeholder="E-mail" />
        <Checkbox />
      </div>
      <Button to="/etapa5">Preencher o cartão resposta</Button>
    </div>
  );
};
