import React, { useCallback } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { Heading } from '../heading';
import { useHistory } from 'react-router-dom';
import { globalKeyUp } from '../../utils/events';

import './styles';
export const Formulary = () => {
  const history = useHistory();
  const eventHandler = useCallback(({ key }) => {
    console.log(key);
    if (key === 'Enter') {
      history.push('/etapa5');
    } else if (key === 'Backspace') {
      history.push('/etapa3');
    }
  }, []);

  globalKeyUp(eventHandler);

  const handler = (key, target, selector) => {
    if (key === selector || choosedSelector === selector) {
      setChoosedSelector(index);
    }
  };

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
        ariaLabel="Preencher o cartão resposta, Tecla Enter"
      >
        Preencher o cartão resposta
      </Button>
    </div>
  );
};
