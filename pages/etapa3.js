import React, { useState, useEffect } from 'react';
import { Selector } from '../components/selector';
import { keyHandler } from '../utils/keyHandler';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { BackArrow } from '../components/backArrow';
import './styles';

export const Etapa3 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = evt => {
    setChoosedSelector(keyHandler(evt, history, '/etapa4', '/etapa2'));
  };

  useEffect(() => {
    console.log('useEffect');

    window.addEventListener('keydown', eventHandler);
    return () => {
      console.log('return');

      window.addEventListener('keydown', eventHandler);
    };
  });

  return (
    <>
      <BackArrow to="/etapa2" />
      <div className="etapa etapa-3">
        <Heading>Agora selecione a cor da prova que você fez</Heading>
        <div className="selector-wrapper">
          <Selector
            keyNumber="1"
            value="Prova azul"
            selected={choosedSelector === '1'}
            color="#269FF9"
            border={true}
          />
          <Selector
            keyNumber="2"
            value="Prova amarela"
            selected={choosedSelector === '2'}
            color="#FED500"
            border={true}
          />
          <Selector
            keyNumber="3"
            value="Prova rosa"
            selected={choosedSelector === '3'}
            color="#FF7878"
            border={true}
          />
          <Selector
            keyNumber="4"
            value="Prova branca"
            selected={choosedSelector === '4'}
            color="#CACDCE"
            border={true}
          />
        </div>
        <Button to="/etapa4">Próxima Etapa</Button>
      </div>
    </>
  );
};
