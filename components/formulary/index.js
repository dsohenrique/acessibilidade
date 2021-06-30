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
    window.addEventListener(
      'keyup',
      ({ key }) => key !== 'Enter' && eventHandler
    );
    return () => {
      window.removeEventListener(
        'keyup',
        ({ key }) => key !== 'Enter' && eventHandler
      );
    };
  });

  return (
    <div className="form">
      <Heading tabIndex="1">
        Pra finalizar, preenche esses últimos dados pra gente
      </Heading>
      <div className="inputs">
        <Input
          type="text"
          placeholder="Nome"
          tabIndex="1"
          ariaLabel="Digite seu nome"
        />
        <Input
          type="text"
          tabIndex="2"
          placeholder="Telefone"
          ariaLabel="Digite seu Telefone"
        />
        <Input
          type="text"
          tabIndex="3"
          placeholder="E-mail"
          ariaLabel="digite seu E-mail"
        />
        <Checkbox tabIndex="4" />
      </div>
      <Button
        tabIndex="5"
        to="/etapa5"
        keyPressHandler={({ key }) =>
          key === 'Enter' && history.push('/etapa5')
        }
        to="/etapa5"
      >
        Preencher o cartão resposta
      </Button>
    </div>
  );
};
