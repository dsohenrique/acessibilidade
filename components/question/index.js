import React, { useState } from 'react';
import './styles';

export const Question = ({
  id,
  position,
  isSelected,
  answer,
  skiped,
  disabled,
  onClick
}) => {
  const sendNextQuestion = () => {
    document
      .querySelectorAll('.wrapper')
      .forEach(wrapper => wrapper.classList.remove('selected'));
    document.querySelector(`#question-${position}`)?.classList.add('selected');
    document
      .querySelector(`#question-${position}`)
      ?.querySelectorAll('button')
      .forEach(button => button.classList.remove('disabled'));
  };
  const alternatives = ['a', 'b', 'c', 'd', 'e'];

  return (
    <div
      id={id}
      className={`wrapper ${isSelected && 'selected'} ${skiped && 'skiped'}`}
      data={position}
    >
      <div id={id} className="question">
        <span className="position">{position}.</span>
        {alternatives.map(alternative => {
          return (
            <button
              className={`${
                answer === alternative ? 'answer' : ''
              } ${disabled && 'disabled'}`}
              name={alternative}
              //TODO: CLick deve ser passado por parâmetro para que possa alterar o estado das questões pelo questionIndex
              onClick={onClick}
            >
              {alternative.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div className="hinter">
        <span>Não respondi essa questão</span>
      </div>
    </div>
  );
};
