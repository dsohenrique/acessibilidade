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
    window.addEventListener('keydown', eventHandler);
    return () => {
      window.addEventListener('keydown', eventHandler);
    };
  });

  return (
    <div className="etapa">
      <Heading>Para começar, selecione o dia da sua prova</Heading>
      <div>
        <div tabIndex="0" className="selector-wrapper">
          <Selector
            keyNumber="1"
            value="Dia 1"
            date="19/06/2021"
            selected={choosedSelector === '1'}
            color="#4AFFB1"
          />
          <Selector
            keyNumber="2"
            value="Dia 2"
            date="20/06/2021"
            selected={choosedSelector === '2'}
            color="#4AFFB1"
          />
        </div>
      </div>
      <Button to="etapa2">Próxima Etapa</Button>
      <Hint
        title="Mais fácil de marcar o seu cartão"
        description="Para marcar, use as letras correspondentes a sua resposta e as setas para navegar entre questões"
      />
    </div>
  );
};
