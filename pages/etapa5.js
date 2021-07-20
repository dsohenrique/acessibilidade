import React, { useState, useCallback, useEffect } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';
import { globalKeyUp } from '../utils/events';
import { useHistory } from 'react-router-dom';

export const Etapa5 = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [direction, setDirection] = useState('');

  const getQuestions = () => {
    return JSON.parse(window.localStorage.getItem('questions'));
  };
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState(
    getQuestions() || [
      {
        id: 0,
        answer: '',
        skiped: false,
        disabled: false,
        isSelected: true
      },
      {
        id: 1,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      }
    ]
  );

  const saveQuestions = () => {
    window.localStorage.setItem('questions', JSON.stringify(questions));
  };

  useEffect(() => {
    if (answer) {
      console.log('answer hook', questionIndex);
      const newQuestions = [...questions];
      newQuestions[questionIndex].answer = answer;
      newQuestions[questionIndex].skiped = false;
      newQuestions[questionIndex].disabled = false;
      newQuestions[questionIndex].isSelected = false;
      setQuestions(newQuestions);
      console.log('setanswer', questions);
      //saveQuestions();
      sendNextQuestion();
    }
  }, [answer]);

  useEffect(() => {
    if (direction) {
      console.log('questionIndex hook', questionIndex);
      const newQuestions = [...questions];

      if (direction === 'up' && newQuestions[questionIndex + 1]) {
        newQuestions[questionIndex - 1].disabled = false;
        newQuestions[questionIndex - 1].skiped = false;
        newQuestions[questionIndex - 1].isSelected = true;
      } else if (direction === 'down' && newQuestions[questionIndex + 1]) {
        newQuestions[questionIndex + 1].disabled = false;
        newQuestions[questionIndex + 1].skiped = false;
        newQuestions[questionIndex + 1].isSelected = true;
      }
      setDirection('');
      setQuestionIndex(
        direction === 'up' ? questionIndex - 1 : questionIndex + 1
      );
      console.log('questions', questions);
    }
  }, [questionIndex, direction]);

  const sendNextQuestion = () => {
    const nextQuestion = questions[questionIndex + 1];
    if (nextQuestion) {
      setDirection('down');
    }
  };

  const skipHandler = questionId => {
    const newQuestions = [...questions];
    newQuestions[questionId].answer = '';
    newQuestions[questionId].skiped = true;
    setQuestions(newQuestions);
    //sendNextQuestion();
    console.log(`question ${questionId}`);
    saveQuestions();
  };

  const arrowUpHandler = () => {
    if (questionIndex !== 0 && questions[questionIndex - 1]) {
      console.log('up', questionIndex);
      setDirection('up');
      setSelected();
    }
  };

  const arrowDownHandler = () => {
    const nextQuestion = questions[+questionIndex + 1];
    console.log(questionIndex, nextQuestion, typeof questionIndex);
    if (!nextQuestion?.skiped && !nextQuestion?.answer) return;
    //sendNextQuestion();
  };

  const keyHandler = evt => {
    const { key } = evt;
    console.log('keyHandler', key);
    if (key === 'ArrowUp') {
      arrowUpHandler();
    } else if (key === 'ArrowDown') {
      arrowDownHandler();
    }
    if (key === 'Alt') {
      skipHandler();
    } else if (
      key === 'a' ||
      key === 'b' ||
      key === 'c' ||
      key === 'd' ||
      key === 'e'
    ) {
      setAnswer(key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => {
      return window.removeEventListener('keydown', keyHandler);
    };
  }, []);

  const clickHandler = ({ target }, index, skiped) => {
    const questionId = target.getAttribute('data');
    console.log('clicked question index', index);
    //document.querySelector('.selected').classList.remove('selected');
    const question = document.querySelector(`#question-${questionId}`);
    //question.classList.add('selected');
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
    question.classList.remove('skiped');
    console.log('has answer', hasAnswer);
    //!hasAnswer && //sendNextQuestion();
  };

  const history = useHistory('/etapa4');

  // const keyHandler = useCallback(({ key, target }) => {
  //   if (key === 'Backspace') {
  //     history.push('/etapa4');
  //   } else if (key === 'Alt') {
  //     skipHandler(target.getAttribute('data'));
  //   } else if (key === '3') {
  //     console.log(getQuestions());
  //   } else if (key === ' ') {
  //     const { name } = target;
  //     if (
  //       name === 'a' ||
  //       name === 'b' ||
  //       name === 'c' ||
  //       name === 'd' ||
  //       name === 'e'
  //     ) {
  //       document
  //         .querySelector(`#question-${target.getAttribute('data')}`)
  //         .classList.remove('skiped');
  //       setAnswer(name, target.getAttribute('data'));
  //     }
  //   }
  // }, []);

  let tabIndex = 1;
  return (
    <div className="etapa-5">
      <div className="header">
        <div className="main">
          <span className="sr-only" tabIndex={tabIndex++}>
            Agora preencha o gabarito, pressione tab para ir para a primeira
            questão.
          </span>
          <BackArrow tabIndex="-1" className="going-back" to="/etapa4" />
          <button tabIndex="-1" className="login-button">
            Salvar
          </button>
        </div>
        <div className="counter" />
      </div>
      <div className="question-wrapper">
        {questions.map(({ skiped, answer, isSelected, disabled }, index) => {
          const question = (
            <Question
              id={`question-${index}`}
              key={index}
              position={index + 1}
              isSelected={isSelected}
              skiped={skiped}
              answer={answer}
              disabled={disabled}
              clickHandler={evt => clickHandler(evt, index, skiped)}
              tabIndex={tabIndex}
              skipHandler={() => skipHandler(index)}
            />
          );
          tabIndex += 7;
          return question;
        })}
      </div>
    </div>
  );
};
