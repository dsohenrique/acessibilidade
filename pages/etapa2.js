import React, { useState, useCallback } from 'react';
import { Selector } from '../components/selector';
import { globalKeyUp } from '../utils/events';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { BackArrow } from '../components/backArrow';

import './styles';

export const Etapa2 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        history.push('/etapa3');
      } else if (key === 'Backspace') {
        history.push('/');
      }
      setChoosedSelector(key);
    },
    [choosedSelector]
  );

  globalKeyUp(eventHandler);

  const handler = (key, target, selector) => {
    if (key === selector || choosedSelector === selector) {
      setChoosedSelector(index);
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
