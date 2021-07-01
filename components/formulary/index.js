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
  // const eventHandler = key => {
  //   keyHandler(key, history, '/etapa5', '/etapa3');
  // };
  // useEffect(() => {
  //   document
  //     .querySelector('.form')
  //     .addEventListener('keyup', ({ key }) => key !== 'Enter' && eventHandler);
  //   return () => {
  //     document.querySelector('.form').removeEventListener();
  //   };
  // });

  return (
    <div className="form">
      <Heading tabIndex="2">
        Pra finalizar, preenche esses últimos dados pra gente
      </Heading>
      <div className="inputs">
        <Input
          type="text"
          placeholder="Nome"
          tabIndex="3"
          ariaLabel="Digite seu nome"
        />
        <Input
          type="text"
          tabIndex="4"
          placeholder="Telefone"
          ariaLabel="Digite seu Telefone"
        />
        <Input
          type="text"
          tabIndex="5"
          placeholder="E-mail"
          ariaLabel="digite seu E-mail"
        />
        <Checkbox tabIndex="6" />
      </div>
      <Button
        tabIndex="7"
        to="/etapa5"
        keyPressHandler={({ key }) =>
          key === 'Enter' && history.push('/etapa5')
        }
        to="/etapa5"
        ariaLabel="Preencher o cartão resposta, Tecla Enter"
      >
        Preencher o cartão resposta
      </Button>
    </div>
  );
};
