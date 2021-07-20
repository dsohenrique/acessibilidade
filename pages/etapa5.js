import React, { useState, useCallback, useEffect } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';
import { globalKeyUp } from '../utils/events';
import { useHistory } from 'react-router-dom';

export const Etapa5 = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [skiped, setSkiped] = useState(false);

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
      },
      {
        id: 2,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      },
      {
        id: 3,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      },
      {
        id: 4,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      },
      {
        id: 5,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      },
      {
        id: 6,
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
      // console.log('answer hook', questionIndex);
      const newQuestions = [...questions];
      newQuestions[questionIndex].answer = answer;
      newQuestions[questionIndex].skiped = false;
      newQuestions[questionIndex].disabled = false;
      if (newQuestions[questionIndex + 1])
        newQuestions[questionIndex].isSelected = false;
      setQuestions(newQuestions);
      setAnswer('');
      // console.log('setanswer', questions);
      //saveQuestions();
      sendNextQuestion();
    }
  }, [answer]);

  useEffect(() => {
    if (direction) {
      console.log('questionIndex hook', questionIndex);
      const newQuestions = [...questions];
      const prevQuestion = newQuestions[questionIndex - 1];
      const nextQuestion = newQuestions[questionIndex + 1];
      newQuestions[questionIndex].disabled = false;
 
      if (direction === 'up' && prevQuestion && questionIndex !== 0) {
        newQuestions[questionIndex].isSelected = false;
        prevQuestion.disabled = false;
        prevQuestion.skiped = false;
        prevQuestion.isSelected = true;
        setQuestionIndex(questionIndex - 1);
      } else if (
        (nextQuestion && direction === 'nextQuestion') ||
        (direction === 'down' &&
          questionIndex + 1 < questions.length &&
          !nextQuestion.disabled)
      ) {
        newQuestions[questionIndex].isSelected = false;
        nextQuestion.disabled = false;
        nextQuestion.skiped = false;
        nextQuestion.isSelected = true;
        setQuestionIndex(questionIndex + 1);
      }
      // console.log('questions questionIndex hook', questions);
    }
    saveQuestions();
    setDirection('');
  }, [direction]);

  const sendNextQuestion = () => {
    const nextQuestion = questions[questionIndex + 1];
    if (nextQuestion) {
      setDirection('nextQuestion');
    }
  };

  const skipHandler = questionId => {
    const newQuestions = [...questions];
    newQuestions[questionId].answer = '';
    newQuestions[questionId].skiped = true;
    setQuestions(newQuestions);
    //sendNextQuestion();
    // console.log(`question ${questionId}`);
    saveQuestions();
  };

  useEffect(() => {
    if (skiped) {
      console.log('skiped hook', questionIndex);
      const newQuestions = [...questions];
      newQuestions[questionIndex].answer = '';
      newQuestions[questionIndex].skiped = true;
      newQuestions[questionIndex].disabled = false;
      setQuestions(newQuestions);
      setSkiped(false);
      // console.log('setanswer', questions);
      //saveQuestions();
      setDirection('nextQuestion');
    }
  }, [skiped]);

  const arrowUpHandler = () => {
    setDirection('up');
  };

  const arrowDownHandler = () => {
    setDirection('down');
  };

  const keyHandler = evt => {
    const { key } = evt;
    console.log('keyHandler', key);
    if (key === 'ArrowUp') {
      arrowUpHandler();
    } else if (key === 'ArrowDown') {
      arrowDownHandler();
    }
    if (key === ' ') {
      setSkiped(true);
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
  }, []);

  const clickHandler = ({ target }, index, skiped) => {
    // const questionId = target.getAttribute('data');
    // // console.log('clicked question index', index);
    // //document.querySelector('.selected').classList.remove('selected');
    // const question = document.querySelector(`#question-${questionId}`);
    // //question.classList.add('selected');
    // let hasAnswer = false;
    // const buttons = question.querySelectorAll('button');
    // buttons.forEach(button => {
    //   if (button.classList.contains('answer')) {
    //     hasAnswer = true;
    //   }
    //   if (button.name === target.name) {
    //     target.classList.add('answer');
    //     // console.log(target.name);
    //     setAnswer(target.name, questionId);
    //   } else {
    //     button.classList.remove('answer');
    //   }
    // });
    // question.classList.remove('skiped');
    // // console.log('has answer', hasAnswer);
    // //!hasAnswer && //sendNextQuestion();
  };

  const history = useHistory('/etapa4');

  // const keyHandler = useCallback(({ key, target }) => {
  //   if (key === 'Backspace') {
  //     history.push('/etapa4');
  //   } else if (key === 'Alt') {
  //     skipHandler(target.getAttribute('data'));
  //   } else if (key === '3') {
  //     // console.log(getQuestions());
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
              skipHandler={() => setSkiped(true)}
            />
          );
          tabIndex += 7;
          return question;
        })}
      </div>
    </div>
  );
};
