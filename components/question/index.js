import React, { useState } from 'react';
import './styles';

export const Question = ({
  id,
  position,
  isSelected,
  answer,
  skiped,
  disabled,
  clickHandler,
  tabIndex,
  keyPressHandler
}) => {
  const alternatives = ['a', 'b', 'c', 'd', 'e'];
  const ariaLabel =
    position === 1
      ? `Questão número ${position}, pressione tab para ir para as alternativas e pressione enter para selecionar. ou simplemente pressione a tecla correspondente à alternativa. caso tenha pulado a questão basta pressionar espaço.`
      : `Questão número ${position}`;
  return (
    <div
      id={id}
      className={`wrapper ${isSelected ? 'selected' : ''} ${
        skiped ? 'skiped' : ''
      }`}
      data={position}
    >
      <div
        id={id}
        className="question"
        tabIndex={tabIndex}
        onKeyPress={keyPressHandler}
        aria-label={ariaLabel}
      >
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="position"
        >{`${position}.`}</div>
        {alternatives.map((alternative, index) => {
          return (
            <button
              tabIndex={(tabIndex += 1)}
              data={position - 1}
              aria-label={`alternativa ${alternative}`}
              className={`alternative ${
                answer === alternative ? 'answer' : ''
              } ${disabled ? 'disabled' : ''}`}
              name={alternative}
              onClick={clickHandler}
            >
              {alternative.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div tabIndex="-1" className="hinter" aria-hidden="true">
        <span>Não respondi essa questão</span>
      </div>
    </div>
  );
};
