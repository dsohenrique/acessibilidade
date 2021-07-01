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

  const eventHandler = key => {
    setChoosedSelector(keyHandler(key, history, '/etapa3', '/'));
  };

  useEffect(() => {
    window.addEventListener(
      'keyup',
      ({ key }) => key !== 'Tab' && eventHandler(key)
    );
    return () => {
      window.removeEventListener(
        'keyup',
        ({ key }) => key !== 'Tab' && eventHandler(key)
      );
    };
  });
  const handler = (key, target, index) => {
    if (key === 'Enter' || key === index || choosedSelector === index) {
      setChoosedSelector(index);
      console.log(document.querySelectorAll('.selector'));
      document
        .querySelectorAll('.selector')
        .forEach(selector => (selector.ariaPressed = 'false'));
      target.ariaPressed = 'true';
      //history.push('/etapa3');
    }
  };
  return (
    <>
      <BackArrow tabIndex="-1" to="/" />
      <div className="etapa">
        <span tabIndex="1" className="sr-only">
          Se quiser voltar para a etapa anterior. pressione a tecla backspace.
        </span>
        <Heading tabIndex="2">
          Qual foi a lingua estrangeira que você escolheu?
        </Heading>
        <div>
          <div className="selector-wrapper">
            <Selector
              tabIndex="3"
              ariaLabel="Inglês"
              keyNumber="1"
              value="Inglês"
              selected={choosedSelector === '1'}
              color="#4AFFB1"
              keyPressHandler={({ key, target }) => handler(key, target, '1')}
            />
            <Selector
              tabIndex="4"
              ariaLabel="Espanhol"
              keyNumber="2"
              value="Espanhol"
              selected={choosedSelector === '2'}
              color="#4AFFB1"
              keyPressHandler={({ key, target }) => handler(key, target, '2')}
            />
          </div>
        </div>
        <Button
          tabIndex="5"
          to="/etapa3"
          ariaLabel="Próxima etapa, Tecla Enter"
        >
          Próxima Etapa
        </Button>
      </div>
    </>
  );
};
