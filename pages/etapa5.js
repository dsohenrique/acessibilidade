import React, { useState, useCallback } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';
import { globalKeyUp } from '../utils/events';
import { useHistory } from 'react-router-dom';

export const Etapa5 = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const getQuestions = () => {
    return JSON.parse(window.localStorage.getItem('questions'));
  };
  const [questions, setQuestions] = useState(
    getQuestions() || [
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
      }
    ]
  );
  const saveQuestions = () => {
    window.localStorage.setItem('questions', JSON.stringify(questions));
  };
  const setAnswer = (answer, id) => {
    const newQuestions = [...questions];
    newQuestions[id].answer = answer;
    newQuestions[id].skiped = false;
    newQuestions[id].disabled = false;
    setQuestions(newQuestions);
    saveQuestions();
    document
      .querySelector(`#question-${id}`)
      .querySelector('.answer').ariaPressed = 'true';
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

  const sendNextQuestion = index => {
    const actual = document.querySelector(`#question-${index}`);
    const nextQuestion = document.querySelector(`#question-${index + 1}`);

    const actualButtons = actual.querySelectorAll('button');

    if (nextQuestion) {
    }
    //   //setSelected('down');

    //   document
    //     .querySelectorAll('.wrapper')
    //     .forEach(wrapper => wrapper.classList.remove('selected'));
    //   document
    //     .querySelector(`#question-${questionIndex + 1}`)
    //     ?.classList.add('selected');
    //   document
    //     .querySelector(`#question-${questionIndex + 1}`)
    //     ?.querySelectorAll('button')
    //     .forEach(button => button.classList.remove('disabled'));
  };

  const skiped = questionId => {
    const newQuestions = [...questions];
    newQuestions[questionId].answer = '';
    newQuestions[questionId].skiped = true;
    setQuestions(newQuestions);
    //sendNextQuestion();
    console.log(`question ${questionId}`);
    const question = document.querySelector(`#question-${questionId}`);
    question
      .querySelectorAll('button')
      .forEach(button => button.classList.remove('answer'));
    question.classList.add('skiped');
    saveQuestions();
  };

  const arrowUpHandler = () => {
    if (questions[questionIndex - 1]) {
      //setSelected('up');
      console.log('up', questionIndex);
    }
  };

  const arrowDownHandler = () => {
    const nextQuestion = questions[+questionIndex + 1];
    console.log(questionIndex, nextQuestion, typeof questionIndex);
    if (!nextQuestion?.skiped && !nextQuestion?.answer) return;
    //sendNextQuestion();
  };

  //TODO: tab deve iterarar as alternativas de cada questão
  // const keyHandler = evt => {
  //   const { key } = evt;
  //   console.log(key);
  //   // if (key === 'ArrowUp') {
  //   //   arrowUpHandler();
  //   // } else if (key === 'ArrowDown') {
  //   //   arrowDownHandler();
  //   // }
  //   if (key === 'Alt') {
  //     skiped();
  //   }
  //   // else if (
  //   //   // key === 'a' ||
  //   //   // key === 'b' ||
  //   //   // key === 'c' ||
  //   //   // key === 'd' ||
  //   //   // key === 'e'
  //   //   key === 'Enter'
  //   // ) {
  //   //   console.log('enter pressed', evt.target);
  //   //   const { target } = evt;
  //   //   if (
  //   //     document
  //   //       .querySelector(`#question-${questionIndex}`)
  //   //       .classList.contains('skiped')
  //   //   ) {
  //   //     document
  //   //       .querySelector(`#question-${questionIndex}`)
  //   //       .classList.remove('skiped');
  //   //   }
  //   //   document
  //   //     .querySelector(`#question-${questionIndex}`)
  //   //     .querySelectorAll('button')
  //   //     .forEach(button => {
  //   //       console.log(button.name);
  //   //       if (button.name !== target.name) {
  //   //         console.log('ta no if');
  //   //         button.classList.remove('answer');
  //   //         button.ariaPressed = 'false';
  //   //       } else {
  //   //         console.log('ta no else');
  //   //         button.classList.add('answer');
  //   //         button.ariaPressed = 'true';
  //   //       }
  //   //     });
  //   //   setAnswer(key);
  //   //   ////sendNextQuestion();
  //   // }
  // };

  const clickHandler = ({ target }, index, skiped) => {
    const questionId = target.getAttribute('data');
    console.log('clicked question index', questionIndex);
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
    skiped &&
      document
        .querySelector(`#question-${questionId}`)
        .classList.remove('skiped');
    console.log('has answer', hasAnswer);
    //!hasAnswer && //sendNextQuestion();
  };

  const history = useHistory('/etapa4');

  const keyHandler = useCallback(({ key, target }) => {
    if (key === 'Backspace') {
      history.push('/etapa4');
    } else if (key === 'Alt') {
      skiped(target.getAttribute('data'));
    } else if (key === '3') {
      console.log(getQuestions());
    } else if (key === ' ') {
      const { name } = target;
      if (
        name === 'a' ||
        name === 'b' ||
        name === 'c' ||
        name === 'd' ||
        name === 'e'
      ) {
        document
          .querySelector(`#question-${target.getAttribute('data')}`)
          .classList.remove('skiped');
        setAnswer(name, target.getAttribute('data'));
      }
    }
  }, []);

  globalKeyUp(keyHandler);
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
              isSelected={true}
              skiped={skiped}
              answer={answer}
              disabled={false}
              clickHandler={evt => clickHandler(evt, index, skiped)}
              tabIndex={tabIndex}
            />
          );
          tabIndex += 7;
          return question;
        })}
      </div>
    </div>
  );
};
