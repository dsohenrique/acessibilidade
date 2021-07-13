import React, { useState, useCallback } from 'react';
import { Selector } from '../components/selector';
import { globalKeyUp } from '../utils/events';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { BackArrow } from '../components/backArrow';
import './styles';

export const Etapa3 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        history.push('/etapa4');
      } else if (key === 'Backspace') {
        history.push('/etapa2');
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
      <BackArrow tabIndex="-1" to="/etapa2" />
      <div className="etapa etapa-3">
        <Heading tabIndex="1">
          Agora selecione a cor da prova que você fez
        </Heading>
        <div className="selector-wrapper">
          <Selector
            tabIndex="2"
            ariaLabel="prova Azul"
            keyNumber="1"
            value="Prova azul"
            selected={choosedSelector === '1'}
            color="#269FF9"
            border={true}
            keyPressHandler={({ key, target }) => handler(key, target, '1')}
          />
          <Selector
            tabIndex="3"
            ariaLabel="prova Amarela"
            keyNumber="2"
            value="Prova amarela"
            selected={choosedSelector === '2'}
            color="#FED500"
            border={true}
            keyPressHandler={({ key, target }) => handler(key, target, '2')}
          />
          <Selector
            tabIndex="4"
            ariaLabel="prova Rosa"
            keyNumber="3"
            value="Prova rosa"
            selected={choosedSelector === '3'}
            color="#FF7878"
            border={true}
            keyPressHandler={({ key, target }) => handler(key, target, '3')}
          />
          <Selector
            tabIndex="5"
            ariaLabel="prova Branca"
            keyNumber="4"
            value="Prova branca"
            selected={choosedSelector === '4'}
            color="#CACDCE"
            border={true}
            keyPressHandler={({ key, target }) => handler(key, target, '4')}
          />
        </div>
        <Button
          tabIndex="5"
          to="/etapa4"
          ariaLabel="Próxima etapa, Tecla Enter"
        >
          Próxima Etapa
        </Button>
      </div>
    </>
  );
};
