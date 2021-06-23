import React, { useState } from 'react';
import { Question } from '../components/question';

export const Etapa5 = () => {
  const [questionIndex, setIndex] = useState(0);
  const [questions, setquestions] = useState([
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    },
    {
      answer: ''
    }
  ]);

  const setAnswer = answer => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answer = answer;
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
      if (key === 'ArrowDown' && questions[questionIndex].answer === '') return;
      questionIndex + 1 < questions.length && setIndex(questionIndex + 1);
      questionIndex + 1 !== questions.length &&
        document
          .querySelectorAll('.wrapper')
          .forEach(wrapper => wrapper.classList.remove('selected'));
    } else if (key === ' ') {
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

  return (
    <div onKeyDown={evt => keyHandler(evt)}>
      {questions.map((question, index) => {
        const isSelected = questionIndex == index && true;
        return (
          <Question
            id={`question-${index}`}
            key={index}
            position={index + 1}
            isSelected={(index === 0 && true) || isSelected}
            answer={question.answer}
            tabIndex={0}
          />
        );
      })}
    </div>
  );
};
