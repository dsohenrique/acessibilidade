import React, { useState, useCallback } from 'react';
import { Selector } from '../components/selector';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { globalKeyUp } from '../utils/events';
import './styles';

export const Etapa1 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = useCallback(
    ({ key }) => {
      if (key === 'Enter') {
        history.push('/etapa2');
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
    <div className="etapa">
      <Heading tabIndex="1">Para começar, selecione o dia da sua prova</Heading>
      <span tabIndex="2" className="sr-only">
        Para selecionar as opções pressione a tecla enter, as opções estão à um
        tab de distância
      </span>
      <div>
        <div className="selector-wrapper">
          <Selector
            tabIndex="3"
            ariaLabel="primeiro dia do ENEM 19 de Junho"
            keyNumber="1"
            value="Dia 1"
            date="19/06/2021"
            selected={choosedSelector === '1'}
            color="#4AFFB1"
            keyPressHandler={({ key, target }) => handler(key, target, '1')}
          />
          <Selector
            tabIndex="4"
            ariaLabel="segundo dia do ENEM 20 de Junho"
            keyNumber="2"
            value="Dia 2"
            date="20/06/2021"
            selected={choosedSelector === '2'}
            color="#4AFFB1"
            keyPressHandler={({ key, target }) => handler(key, target, '2')}
          />
        </div>
      </div>
      <Button tabIndex="5" to="etapa2" ariaLabel="Próxima etapa, Tecla Enter">
        Próxima Etapa
      </Button>
    </div>
  );
};
