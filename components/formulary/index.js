import React from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { Heading } from '../heading';

import './styles';
export const Formulary = () => {
  return (
    <div className="form">
      <Heading>Pra finalizar, preenche esses últimos dados pra gente</Heading>
      <div className="inputs">
        <Input type="text" placeholder="Nome" tabIndex={0} />
        <input type="text" placeholder="Telefone" />
        <input type="text" placeholder="E-mail" />
        <Checkbox />
      </div>
      <Button to="/etapa5">Preencher o cartão resposta</Button>
    </div>
  );
};
