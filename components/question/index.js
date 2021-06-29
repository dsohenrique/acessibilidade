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
  tabIndex
}) => {
  const alternatives = ['a', 'b', 'c', 'd', 'e'];

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
        aria-label={`Questão número ${position}, pressione tab para ir para as alternativas e pressione enter para selecionar`}
      >
        <span className="position">{`${position}.`}</span>
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
      <div
        tabIndex={(tabIndex += 1)}
        className="hinter"
        aria-label={`Pressione espaço caso tenha pulado a questão número ${position}`}
      >
        <span>Não respondi essa questão</span>
      </div>
    </div>
  );
};
