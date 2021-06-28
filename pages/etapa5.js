import React, { useState, useEffect } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';

export const Etapa5 = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      answer: '',
      skiped: false,
      disabled: false
    },
    {
      id: 1,
      answer: '',
      skiped: false,
      disabled: true
    },
    {
      id: 2,
      answer: '',
      skiped: false,
      disabled: true
    },
    {
      id: 3,
      answer: '',
      skiped: false,
      disabled: true
    }
  ]);

  const setAnswer = answer => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = answer;
    newQuestions[questionIndex].skiped = false;
    newQuestions[questionIndex].disabled = false;

    setQuestions(newQuestions);
  };

  const setSelected = direction => {
    let index;
    if (direction === 'up') {
      index = questionIndex - 1;
    } else if (direction === 'down') {
      index = questionIndex + 1;
    }
    document.querySelector(`#question-${index}`).classList.add('selected');
    document
      .querySelector(`#question-${questionIndex}`)
      .classList.remove('selected');
  };

  const sendNextQuestion = () => {
    const nextQuestion = questions[questionIndex + 1];
    if (nextQuestion) {
      setSelected('down');

      document
        .querySelectorAll('.wrapper')
        .forEach(wrapper => wrapper.classList.remove('selected'));
      document
        .querySelector(`#question-${questionIndex + 1}`)
        ?.classList.add('selected');
      document
        .querySelector(`#question-${questionIndex + 1}`)
        ?.querySelectorAll('button')
        .forEach(button => button.classList.remove('disabled'));
      setQuestionIndex(questionIndex + 1);
    }
  };

  const skiped = () => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = '';
    newQuestions[questionIndex].skiped = true;
    setQuestions(newQuestions);
    sendNextQuestion();
  };

  const arrowUpHandler = () => {
    console.log('up', questionIndex);
    if (questions[questionIndex - 1]) {
      setSelected('up');
      setQuestionIndex(questionIndex - 1);
    }
  };

  const arrowDownHandler = () => {
    const nextQuestion = questions[questionIndex + 1];
    console.log(nextQuestion);
    if (!nextQuestion?.skiped && !nextQuestion?.answer) return;
    sendNextQuestion();
  };

  //TODO: tab deve iterarar as alternativas de cada questão
  const keyHandler = ({ key }) => {
    if (key === 'ArrowUp') {
      arrowUpHandler();
    } else if (key === 'ArrowDown') {
      arrowDownHandler();
    } else if (key === ' ') {
      skiped();
    } else if (
      key === 'a' ||
      key === 'b' ||
      key === 'c' ||
      key === 'd' ||
      key === 'e'
    ) {
      document
        .querySelector(`#question-${questionIndex}`)
        .querySelectorAll('button')
        .forEach(
          button => button.name !== key && button.classList.remove('answer')
        );
      setAnswer(key);
      sendNextQuestion();
    }
  };

  const clickHandler = ({ target }, index, skiped) => {
    console.log('clicou', target);
    const buttons = document
      .querySelector(`#question-${index}`)
      .querySelectorAll('button');
    let hasAnswer = false;
    buttons.forEach(button => {
      if (button.classList.contains('answer')) hasAnswer = true;
      button.classList.remove('answer');
      button.name === target.name && button.classList.add('answer');
      setAnswer(target.name);
    });
    skiped &&
      document.querySelector(`#question-${index}`).classList.remove('skiped');
    if (hasAnswer) {
      document.querySelectorAll('.wrapper').forEach(wrapper => {
        if (wrapper.id === `question-${index}`) {
          wrapper.classList.add('selected');
        } else {
          wrapper.classList.remove('selected');
        }
      });
    } else {
      sendNextQuestion();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', keyHandler);
    return () => {
      window.removeEventListener('keyup', keyHandler);
    };
  });

  return (
    <div className="etapa-5">
      <div className="header">
        <div className="main">
          <BackArrow className="going-back" to="/etapa4" />
          <button className="login-button" tabIndex="0">
            Salvar
          </button>
        </div>
        <div className="counter" />
      </div>
      <div
        className="question-wrapper"
        tabIndex="0"
        style={{ outline: 'none' }}
      >
        {questions.map(({ skiped, answer, isSelected, disabled }, index) => {
          return (
            <Question
              id={`question-${index}`}
              key={index}
              position={index + 1}
              isSelected={(index === 0 && true) || isSelected}
              skiped={skiped}
              answer={answer}
              disabled={disabled}
              onClick={evt =>
                !evt.target.classList.contains('disabled') &&
                clickHandler(evt, index, skiped)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
