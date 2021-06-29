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

  const setAnswer = (answer, id) => {
    const newQuestions = [...questions];
    const idx = id || questionIndex;
    newQuestions[idx].answer = answer;
    newQuestions[idx].skiped = false;
    newQuestions[idx].disabled = false;
    setQuestions(newQuestions);
    setQuestionIndex(() => idx);
  };

  const setSelected = direction => {
    let index;
    if (direction === 'up') {
      index = questionIndex - 1;
      setQuestionIndex(() => questionIndex - 1);
    } else if (direction === 'down') {
      index = questionIndex + 1;
      setQuestionIndex(() => questionIndex + 1);
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
    if (questions[questionIndex - 1]) {
      setSelected('up');
      console.log('up', questionIndex);
    }
  };

  const arrowDownHandler = () => {
    const nextQuestion = questions[+questionIndex + 1];
    console.log(questionIndex, nextQuestion, typeof questionIndex);
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
    const questionId = target.getAttribute('data');
    console.log('clicked question index', questionIndex);
    document.querySelector('.selected').classList.remove('selected');
    const question = document.querySelector(`#question-${questionId}`);
    question.classList.add('selected');
    let hasAnswer = false;
    const buttons = question.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.classList.contains('answer')) {
        hasAnswer = true;
      }
      if (button.name === target.name) {
        target.classList.add('answer');
        console.log(target.name);
        setAnswer(target.name, questionId);
      } else {
        button.classList.remove('answer');
      }
    });
    skiped &&
      document
        .querySelector(`#question-${questionId}`)
        .classList.remove('skiped');
    console.log('has answer', hasAnswer);
    !hasAnswer && sendNextQuestion();
  };

  useEffect(() => {
    window.addEventListener('keyup', keyHandler);
    document.querySelectorAll('.alternative').forEach(alternative => {
      alternative.addEventListener('click', ({ target }) =>
        setQuestionIndex(+target.getAttribute('data'))
      );
    });
    return () => {
      window.removeEventListener('keyup', keyHandler);
      document.querySelectorAll('.alternative').forEach(alternative => {
        alternative.addEventListener('click', ({ target }) =>
          setQuestionIndex(+target.getAttribute('data'))
        );
      });
    };
  });

  return (
    <div className="etapa-5">
      <div className="header">
        <div className="main">
          <BackArrow className="going-back" to="/etapa4" />
          <button className="login-button">Salvar</button>
        </div>
        <div className="counter" />
      </div>
      <div className="question-wrapper">
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
              clickHandler={evt => clickHandler(evt, index, skiped)}
            />
          );
        })}
      </div>
    </div>
  );
};
