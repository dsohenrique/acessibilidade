import React, { useState, useEffect } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';
import { Hint } from '../components/hint';

export const Etapa5 = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setquestions] = useState([
    {
      answer: '',
      skiped: false
    },
    {
      answer: '',
      skiped: false
    },
    {
      answer: '',
      skiped: false
    },
    {
      answer: '',
      skiped: false
    }
  ]);

  const setAnswer = (answer, questIndex) => {
    //TODO: ESSE CARA TÀ BUGANDO A PORRA TODA ARRUMA AE
    console.log('setAnswer', answer, questIndex);
    const newQuestions = [...questions];
    newQuestions[questIndex].answer = answer;
    newQuestions[questIndex].skiped = false;

    setquestions(newQuestions);
  };

  const skiped = () => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = '';
    newQuestions[questionIndex].skiped = true;
    setquestions(newQuestions);
  };
  const keyHandler = ({ key }) => {
    console.log('keyHandler', key);
    if (key === 'ArrowUp') {
    } else if (key === 'ArrowDown' || key === ' ' || key === 'Tab') {
      if (
        (key === 'ArrowDown' || key === 'Tab') &&
        !questions[questionIndex].skiped &&
        questions[questionIndex].answer === ''
      )
        return;
      if (key === ' ') skiped();
      questionIndex + 1 < questions.length &&
        setQuestionIndex(questionIndex + 1);
      questionIndex + 1 !== questions.length &&
        document
          .querySelectorAll('.wrapper')
          .forEach(wrapper => wrapper.classList.remove('selected'));
    } else if (
      key === 'a' ||
      key === 'b' ||
      key === 'c' ||
      key === 'd' ||
      key === 'e'
    ) {
      const questIndex =
        document.querySelector('.selected').getAttribute('data') - 1;
      console.log(key, questIndex);
      //setAnswer(key, questIndex);
      // document
      //   .querySelector(`#question-${questionIndex}`)
      //   .querySelectorAll('button')
      //   .forEach(
      //     button => button.name !== key && button.classList.remove('answer')
      //   );
      // questionIndex + 1 < questions.length &&
      //   setQuestionIndex(questionIndex + 1);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('keyup', keyHandler);
    return () => {
      console.log('return');
      window.addEventListener('keyup', keyHandler);
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
        {questions.map((question, index) => {
          const isSelected = questionIndex == index && true;
          return (
            <Question
              id={`question-${index}`}
              key={index}
              position={index + 1}
              isSelected={isSelected}
              skiped={question.skiped}
              answer={question.answer}
            />
          );
        })}
      </div>
      <Hint
        title="Mais fácil de marcar o seu cartão"
        description="Para marcar, use as letras correspondentes a sua resposta e as setas para navegar entre questões"
      />
    </div>
  );
};
