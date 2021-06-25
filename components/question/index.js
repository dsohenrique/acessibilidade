import React from 'react';
import './styles';

export const Question = ({ id, position, isSelected, answer, skiped }) => {
  const clickHandler = ({ target }) => {
    const buttons = document.querySelector(`#${id}`).querySelectorAll('button');
    skiped && document.querySelector(`#${id}`).classList.remove('skiped');
    buttons.forEach(button => {
      button.classList.remove('answer');
      button.name === target.name && button.classList.add('answer');
    });
    sendNextQuestion();
  };

  const sendNextQuestion = () => {
    document.querySelector(`#${id}`)?.classList.remove('selected', 'sended');
    document
      .querySelector(`#question-${position}`)
      ?.classList.add('selected', 'sended');
  };
  return (
    <div
      id={id}
      className={`wrapper ${isSelected && 'selected'} ${skiped && 'skiped'}`}
      data={position}
    >
      <div
        id={id}
        className="question"
      >
        <span className="position">{position}.</span>
        <button
          className={answer === 'a' && 'answer'}
          name="a"
          onClick={evt => clickHandler(evt)}
        >
          A
        </button>
        <button
          className={answer === 'b' && 'answer'}
          name="b"
          onClick={evt => clickHandler(evt)}
        >
          B
        </button>
        <button
          className={answer === 'c' && 'answer'}
          name="c"
          onClick={evt => clickHandler(evt)}
        >
          C
        </button>
        <button
          className={answer === 'd' && 'answer'}
          name="d"
          onClick={evt => clickHandler(evt)}
        >
          D
        </button>
        <button
          className={answer === 'e' && 'answer'}
          name="e"
          onClick={evt => clickHandler(evt)}
        >
          E
        </button>
      </div>
      <div className="hinter">
        <span>Não respondi essa questão</span>
      </div>
    </div>
  );
};
