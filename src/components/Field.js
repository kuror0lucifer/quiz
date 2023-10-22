import React, { useState } from "react";

export const questions = [
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

export default function Field() {
  let [count, setCount] = useState(0);
  return (
    <div className="wrapper">
      <div className="progress">
        <div className="progress-bar"></div>
      </div>
      <div className="question">{questions[count].title}</div>
      <ul className="list">
        {questions[count].variants.map((variants, i) => (
          <li
            key={i + 1}
            onClick={() => {
              setCount(count + 1);
            }}
            className="list-item"
          >
            {variants}
          </li>
        ))}
      </ul>
    </div>
  );
}
