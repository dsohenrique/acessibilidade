import React, { useState } from 'react';
import { Question } from '../components/question';
import { BackArrow } from '../components/backArrow';

export const Etapa5 = () => {
  const [questionIndex, setIndex] = useState(0);
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

  const setAnswer = answer => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = answer;
    newQuestions[questionIndex].skiped = false;

    setquestions(newQuestions);
  };

  const skiped = () => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = '';
    newQuestions[questionIndex].skiped = true;
    setquestions(newQuestions);
  };
  const keyHandler = evt => {
    const { key } = evt;
    if (key === 'ArrowUp') {
      questionIndex > 0 && setIndex(questionIndex - 1);

      questionIndex !== 0 &&
        document
          .querySelectorAll('.wrapper')
          .forEach(wrapper => wrapper.classList.remove('selected'));
    } else if (key === 'ArrowDown' || key === ' ') {
      if (
        key === 'ArrowDown' &&
        !questions[questionIndex].skiped &&
        questions[questionIndex].answer === ''
      )
        return;
      if (key === ' ') skiped();
      questionIndex + 1 < questions.length && setIndex(questionIndex + 1);
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
      setAnswer(key);
      document
        .querySelector(`#question-${questionIndex}`)
        .querySelectorAll('button')
        .forEach(
          button => button.name !== key && button.classList.remove('answer')
        );
      questionIndex + 1 < questions.length && setIndex(questionIndex + 1);
    }
  };
  //TODO: IMPLEMENTAR O DISABLE PARA QUESTÕES NÃO RESPONDIDAS NO HOVER DO MOUSE
  return (
    <div className="etapa-5" tabIndex="0">
      <div className="header">
        <div className="main">
          <BackArrow to="/etapa4" />
          <span>Gabarito da prova</span>
          <button className="login-button">Salvar</button>
        </div>
        <div className="counter" />
      </div>
      <div onKeyDown={evt => keyHandler(evt)}>
        {questions.map((question, index) => {
          const isSelected = questionIndex == index && true;
          return (
            <Question
              tabIndex="0"
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
    </div>
  );
};
