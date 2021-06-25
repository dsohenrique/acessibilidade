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
    let hasAnswer = false;
    buttons.forEach(button => {
      if (button.classList.contains('answer')) hasAnswer = true;
      button.classList.remove('answer');
      button.name === target.name && button.classList.add('answer');
    });
    skiped && document.querySelector(`#${id}`).classList.remove('skiped');
    if (hasAnswer) {
      console.log(id);
      document.querySelectorAll('.wrapper').forEach(wrapper => {
        if (wrapper.id === id) {
          wrapper.classList.add('selected');
        } else {
          wrapper.classList.remove('selected');
        }
      });
    } else {
      sendNextQuestion();
    }
  };

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
              onClick={evt =>
                !evt.target.classList.contains('disabled') && clickHandler(evt)
              }
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
