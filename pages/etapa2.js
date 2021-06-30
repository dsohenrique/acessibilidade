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
    window.addEventListener('keyup', eventHandler);
    return () => {
      window.removeEventListener('keyup', eventHandler);
    };
  });

  return (
    <>
      <BackArrow tabIndex="0" to="/" />
      <div className="etapa">
        <Heading tabIndex="1">
          Qual foi a lingua estrangeira que você escolheu?
        </Heading>
        <div>
          <div className="selector-wrapper">
            <Selector
              tabIndex="2"
              ariaLabel="Pressione enter para selecionar prova de Inglês"
              keyNumber="1"
              value="Inglês"
              selected={choosedSelector === '1'}
              color="#4AFFB1"
              keyPressHandler={({ key }) =>
                (key === 'Enter' || key === '1') && setChoosedSelector('1')
              }
            />
            <Selector
              tabIndex="3"
              ariaLabel="Pressione enter para selecionar prova de Espanhol"
              keyNumber="2"
              value="Espanhol"
              selected={choosedSelector === '2'}
              color="#4AFFB1"
              keyPressHandler={({ key }) =>
                (key === 'Enter' || key === '2') && setChoosedSelector('2')
              }
            />
          </div>
        </div>
        <Button
          tabIndex="4"
          keyPressHandler={({ key }) =>
            key === 'Enter' && history.push('/etapa2')
          }
          to="/etapa3"
        >
          Próxima Etapa
        </Button>
      </div>
    </>
  );
};
