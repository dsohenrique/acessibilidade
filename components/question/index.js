import React from 'react';
import './styles';

export const Question = ({ id, position, isSelected, answer }) => {
  const clickHandler = ({ target }) => {
    const buttons = document.querySelector(`#${id}`).querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('answer');
      button.name === target.name && button.classList.add('answer');
    });
  };
  return (
    <div id={id} className={`wrapper ${isSelected && 'selected'}`}>
      <div
        id={id}
        className="question"
        onMouseEnter={evt => {
          document.querySelectorAll('.wrapper').forEach(wrapper => {
            wrapper.classList.remove('selected');
            wrapper.id === evt.target.id && wrapper.classList.add('selected');
          });
        }}
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
      <div className="hint">
        <span>Não respondi essa questão</span>
      </div>
    </div>
  );
};
