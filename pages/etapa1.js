import React, { useState, useEffect } from 'react';
import { Selector } from '../components/selector';
import { keyHandler } from '../utils/keyHandler';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/button';
import { Heading } from '../components/heading';
import { Hint } from '../components/hint';
import './styles';

export const Etapa1 = () => {
  const [choosedSelector, setChoosedSelector] = useState('');
  const history = useHistory();

  const eventHandler = key => {
    setChoosedSelector(keyHandler(key, history, '/etapa2'));
  };

  useEffect(() => {
    window.addEventListener(
      'keyup',
      ({ key }) => key && key !== 'Tab' && eventHandler(key)
    );
    return () => {
      window.removeEventListener(
        'keyup',
        ({ key }) => key && key !== 'Tab' && eventHandler(key)
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
      //history.push('/etapa2');
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
