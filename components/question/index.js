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
  const alternatives = ['a', 'b', 'c', 'd', 'e'];

  return (
    <div
      id={id}
      className={`wrapper ${isSelected ? 'selected' : ''} ${
        skiped ? 'skiped' : ''
      }`}
      data={position}
    >
      <div id={id} className="question" onClick={onClick}>
        <span className="position">{position}.</span>
        {alternatives.map(alternative => {
          return (
            <button
              data={id}
              className={`${answer === alternative ? 'answer' : ''} ${
                disabled ? 'disabled' : ''
              }`}
              name={alternative}
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
