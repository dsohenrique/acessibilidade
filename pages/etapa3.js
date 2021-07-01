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

  const eventHandler = key => {
    setChoosedSelector(keyHandler(key, history, '/etapa4', '/etapa2'));
  };

  useEffect(() => {
    window.addEventListener(
      'keyup',
      ({ key }) => key !== 'Enter' && key !== 'Tab' && eventHandler(key)
    );
    return () => {
      window.removeEventListener(
        'keyup',
        ({ key }) => key !== 'Enter' && key !== 'Tab' && eventHandler(key)
      );
    };
  });

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
            keyPressHandler={({ key }) =>
              key === 'Enter' && setChoosedSelector('1')
            }
          />
          <Selector
            tabIndex="3"
            ariaLabel="prova Amarela"
            keyNumber="2"
            value="Prova amarela"
            selected={choosedSelector === '2'}
            color="#FED500"
            border={true}
            keyPressHandler={({ key }) =>
              key === 'Enter' && setChoosedSelector('2')
            }
          />
          <Selector
            tabIndex="4"
            ariaLabel="prova Rosa"
            keyNumber="3"
            value="Prova rosa"
            selected={choosedSelector === '3'}
            color="#FF7878"
            border={true}
            keyPressHandler={({ key }) =>
              key === 'Enter' && setChoosedSelector('3')
            }
          />
          <Selector
            tabIndex="5"
            ariaLabel="prova Branca"
            keyNumber="4"
            value="Prova branca"
            selected={choosedSelector === '4'}
            color="#CACDCE"
            border={true}
            keyPressHandler={({ key }) =>
              key === 'Enter' && setChoosedSelector('4')
            }
          />
        </div>
        <Button
          tabIndex="5"
          keyPressHandler={({ key }) =>
            key === 'Enter' && history.push('/etapa4')
          }
          to="/etapa4"
          ariaLabel="Próxima etapa, Tecla Enter"
        >
          Próxima Etapa
        </Button>
      </div>
    </>
  );
};
