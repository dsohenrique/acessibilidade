import React, { useState } from 'react';
import { Selector } from '../components/selector';
import { keyHandler } from '../utils/keyHandler';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import './styles';

export const Etapa3 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = evt => {
    setChoosedSelector(keyHandler(evt, history, '/etapa4', '/etapa2'));
  };

  return (
    <div className="etapa etapa-3">
      <Heading>Agora selecione a cor da prova que você fez</Heading>
      <div onKeyDown={e => eventHandler(e)} tabIndex={0}>
        <div className="selector-wrapper">
          <Selector
            keyNumber="1"
            value="Prova azul"
            selected={choosedSelector === '1'}
            color="#4AFFB1"
          />
          <Selector
            keyNumber="2"
            value="Prova amarela"
            selected={choosedSelector === '2'}
            color="#4AFFB1"
          />
          <Selector
            keyNumber="3"
            value="Prova rosa"
            selected={choosedSelector === '3'}
            color="#4AFFB1"
          />
          <Selector
            keyNumber="4"
            value="Prova branca"
            selected={choosedSelector === '4'}
            color="#4AFFB1"
          />
        </div>
      </div>
      <Button to="etapa2">Próxima Etapa</Button>
    </div>
  );
};
