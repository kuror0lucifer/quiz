import React, { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
    id: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
    id: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
    id: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="wrapper">
      <h2 className="result">
        Вы ответили на {correct} из {questions.length}
      </h2>
    </div>
  );
}
function Field({ question, count, onClickAnswer }) {
  const percentage = Math.round((count / questions.length) * 100);

  return (
    <div className="wrapper">
      <div className="progress">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="question">{question.title}</div>
      <ul className="list">
        {question.variants.map((variants, i) => (
          <li
            key={i + 1}
            className="list-item"
            onClick={() => onClickAnswer(i)}
          >
            {variants}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  let [count, setCount] = useState(0);
  let [correct, setCorrect] = useState(0);
  let question = questions[count];

  const onClickAnswer = (el) => {
    setCount(count + 1);
    console.log(question.correct, el);
    if (el === question.correct) {
      setCorrect(correct + 1);
      console.log(correct);
    }
  };

  return (
    <main>
      {count !== questions.length ? (
        <Field
          onClickAnswer={onClickAnswer}
          count={count}
          question={question}
        />
      ) : (
        <Result correct={correct} />
      )}
    </main>
  );
}
