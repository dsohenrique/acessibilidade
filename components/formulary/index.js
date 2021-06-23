import React from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Checkbox } from '../checkbox';

export const Formulary = () => {
  return (
    <div>
      <h3>Pra finalizar, preenche esses últimos dados pra gente</h3>
      <Input type="text" placeholder="Nome" tabIndex={0} />
      <input type="text" placeholder="Telefone" />
      <input type="text" placeholder="E-mail" />
      <Checkbox />
      <Button value="Preencher o cartão resposta" />
    </div>
  );
};
