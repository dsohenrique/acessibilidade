import React, { useState } from 'react';
import './styles';

export const Question = ({
  id,
  position,
  isSelected,
  answer,
  skiped,
  disabled,
  clickHandler
}) => {
  const alternatives = ['a', 'b', 'c', 'd', 'e'];

  return (
    <div
      tabIndex={0}
      id={id}
      className={`wrapper ${isSelected ? 'selected' : ''} ${
        skiped ? 'skiped' : ''
      }`}
      data={position}
    >
      <div id={id} className="question" tabIndex={1}>
        asdasdadadads
        <span className="position">{`${position}.`}</span>
        {alternatives.map((alternative, index) => {
          return (
            <button
              tabIndex={index + 2}
              data={position - 1}
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
      <div className="hinter">
        <span>Não respondi essa questão</span>
      </div>
    </div>
  );
};
