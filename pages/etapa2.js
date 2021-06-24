import React, { useState, useEffect } from 'react';
import { Selector } from '../components/selector';
import { keyHandler } from '../utils/keyHandler';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { BackArrow } from '../components/backArrow';

import './styles';

export const Etapa2 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = evt => {
    setChoosedSelector(keyHandler(evt, history, '/etapa3', '/'));
  };

  useEffect(() => {
    window.addEventListener('keydown', eventHandler);
    return () => {
      window.addEventListener('keydown', eventHandler);
    };
  });

  return (
    <>
      <BackArrow to="/" />
      <div className="etapa">
        <Heading>Qual foi a lingua estrangeira que você escolheu?</Heading>
        <div>
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
    </>
  );
};
