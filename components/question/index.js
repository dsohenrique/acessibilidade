import React, { useState } from 'react';
import './styles';

export const Question = ({
  id,
  position,
  isSelected,
  answer,
  skiped,
  disabled
}) => {
  const clickHandler = ({ target }) => {
    const buttons = document.querySelector(`#${id}`).querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('answer');
      button.name === target.name && button.classList.add('answer');
    });
    skiped && document.querySelector(`#${id}`).classList.remove('skiped');

    sendNextQuestion();
  };

  const sendNextQuestion = () => {
    document.querySelector(`#${id}`)?.classList.remove('selected');
    document.querySelector(`#question-${position}`)?.classList.add('selected');
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
              onClick={evt => !disabled && clickHandler(evt)}
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
