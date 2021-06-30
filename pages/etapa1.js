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

  const eventHandler = evt => {
    setChoosedSelector(keyHandler(evt, history, '/etapa2'));
  };

  useEffect(() => {
    window.addEventListener(
      'keyup',
      ({ key }) => key !== 'Enter' && eventHandler
    );
    return () => {
      window.removeEventListener(
        'keyup',
        ({ key }) => key !== 'Enter' && eventHandler
      );
    };
  });

  return (
    <div className="etapa">
      <Heading tabIndex="1">Para começar, selecione o dia da sua prova</Heading>
      <div>
        <div className="selector-wrapper">
          <Selector
            tabIndex="2"
            ariaLabel="Pressione enter para selecionar o primeiro dia do ENEM 19 de Junho"
            keyNumber="1"
            value="Dia 1"
            date="19/06/2021"
            selected={choosedSelector === '1'}
            color="#4AFFB1"
            keyPressHandler={({ key }) =>
              (key === 'Enter' || key === '1') && setChoosedSelector('1')
            }
          />
          <Selector
            tabIndex="3"
            ariaLabel="Pressione enter para selecionar o segundo dia do ENEM 20 de Junho"
            keyNumber="2"
            value="Dia 2"
            date="20/06/2021"
            selected={choosedSelector === '2'}
            color="#4AFFB1"
            keyPressHandler={({ key }) =>
              (key === 'Enter' || key === '2') && setChoosedSelector('2')
            }
          />
        </div>
      </div>
      <Button
        keyPressHandler={({ key }) =>
          key === 'Enter' && history.push('/etapa2')
        }
        tabIndex="4"
        to="etapa2"
      >
        Próxima Etapa
      </Button>
    </div>
  );
};
