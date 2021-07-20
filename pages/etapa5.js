import React, { useState, useCallback, useEffect } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';
import { globalKeyUp } from '../utils/events';
import { useHistory } from 'react-router-dom';

export const Etapa5 = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [skiped, setSkiped] = useState(false);

  const getQuestions = () =>
    JSON.parse(window.localStorage.getItem('questions'));

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
      },
      {
        id: 7,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      },
      {
        id: 8,
        answer: '',
        skiped: false,
        disabled: true,
        isSelected: false
      },
      {
        id: 9,
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
      setQuestions(newQuestions);
      setAnswer('');
      // console.log('setanswer', questions);
      //saveQuestions();
      setDirection('nextQuestion');
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
        questions.forEach(question => (question.isSelected = false));
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
        questions.forEach(question => (question.isSelected = false));
        nextQuestion.disabled = false;
        nextQuestion.skiped = false;
        nextQuestion.isSelected = true;
        setQuestionIndex(questionIndex + 1);
      }
      // console.log('questions questionIndex hook', questions);
    }
    //saveQuestions();
    setDirection('');
  }, [direction]);

  useEffect(() => {
    if (skiped) {
      console.log('skiped hook', questionIndex);
      const newQuestions = [...questions];
      newQuestions[questionIndex].answer = '';
      newQuestions[questionIndex].skiped = true;
      newQuestions[questionIndex].disabled = false;
      setQuestions(newQuestions);
      setSkiped(false);
      setDirection('nextQuestion');
    }
  }, [skiped]);

  const arrowUpHandler = () => {
    setDirection('up');
  };

  const arrowDownHandler = () => {
    setDirection('down');
  };
  const navigationHandler = useCallback(({ key }) => {
    if (key === 'Backspace') {
      history.push('/etapa4');
    }
  }, []);

  globalKeyUp(navigationHandler);
  const keyHandler = evt => {
    const { key } = evt;
    console.log('keyHandler', key);
    if (key === 'Backspace') {
      //history.push('/etapa4');
    } else if (key === 'ArrowUp') {
      arrowUpHandler();
    } else if (key === 'ArrowDown') {
      arrowDownHandler();
    } else if (key === ' ') {
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

  const clickHandler = ({ target }) => {
    const questionId = target.getAttribute('data');
    if (!questions[questionId].disabled) {
      setQuestionIndex(+questionId);
      setAnswer(target.getAttribute('name'));
    }
  };

  const history = useHistory();

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
