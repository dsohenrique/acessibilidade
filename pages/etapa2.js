import React, { useState } from 'react';
import { Selector } from '../components/selector';
import { keyHandler } from '../utils/keyHandler';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import './styles';

export const Etapa2 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = evt => {
    setChoosedSelector(keyHandler(evt, history, '/etapa3', '/'));
  };

  return (
    <div className="etapa">
      <Heading>Qual foi a lingua estrangeira que você escolheu?</Heading>
      <div onKeyDown={e => eventHandler(e)} tabIndex="0">
        <div className="selector-wrapper">
          <Selector
            keyNumber="1"
            value="Inglês"
            selected={choosedSelector === '1'}
            color="#4AFFB1"
          />
          <Selector
            keyNumber="2"
            value="Espanhol"
            selected={choosedSelector === '2'}
            color="#4AFFB1"
          />
        </div>
      </div>
      <Button to="etapa3">Próxima Etapa</Button>
    </div>
  );
};
