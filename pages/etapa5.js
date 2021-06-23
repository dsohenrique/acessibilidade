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
    } else if (key === 'ArrowDown') {
      questionIndex + 1 < questions.length && setIndex(questionIndex + 1);
      questionIndex + 1 !== questions.length &&
        document
          .querySelectorAll('.wrapper')
          .forEach(wrapper => wrapper.classList.remove('selected'));
    } else if (key === ' ') {
      questionIndex + 1 < questions.length && setIndex(questionIndex + 1);
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
    }
  };

  return (
    <div
      onKeyDown={evt => keyHandler(evt)}
      tabIndex={0}
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
            answer={question.answer}
          />
        );
      })}
    </div>
  );
};
