import React, { useState } from 'react';
import '../mcq.css';

const questions = [
  {
    question: "What is Bootstrap primarily used for?",
    options: [
      "Back-end development",
      "Game development",
      "Front-end development",
      "Database management"
    ],
    answer: "Front-end development"
  },
  {
    question: "Which class is used to create a responsive layout in Bootstrap?",
    options: [
      ".container-fluid",
      ".container-fixed",
      ".container-responsive",
      ".container-layout"
    ],
    answer: ".container-fluid"
  },
  {
    question: "Which Bootstrap class is used to create a button?",
    options: [
      ".btn-primary",
      ".button-main",
      ".button-primary",
      ".btn-main"
    ],
    answer: ".btn-primary"
  },
  {
    question: "How do you include Bootstrap in a project?",
    options: [
      "Using a <link> tag to a CDN",
      "Using an <import> tag",
      "Using a <bootstrap> tag",
      "Using an <include> tag"
    ],
    answer: "Using a <link> tag to a CDN"
  },
  {
    question: "Which class provides a responsive fixed width container in Bootstrap?",
    options: [
      ".container-fluid",
      ".container-fixed",
      ".container",
      ".container-responsive"
    ],
    answer: ".container"
  },
  {
    question: "How do you create a navigation bar in Bootstrap?",
    options: [
      "Using the .nav class",
      "Using the .navbar class",
      "Using the .navigation class",
      "Using the .menu class"
    ],
    answer: "Using the .navbar class"
  },
  {
    question: "Which class is used to create a grid system in Bootstrap?",
    options: [
      ".row",
      ".grid",
      ".column",
      ".container"
    ],
    answer: ".row"
  },
  {
    question: "How can you create a dropdown menu in Bootstrap?",
    options: [
      "Using the .dropdown class",
      "Using the .menu class",
      "Using the .nav class",
      "Using the .select class"
    ],
    answer: "Using the .dropdown class"
  },
  {
    question: "Which class is used to style tables in Bootstrap?",
    options: [
      ".table",
      ".styled-table",
      ".table-class",
      ".table-styled"
    ],
    answer: ".table"
  },
  {
    question: "How do you make a button look like a link in Bootstrap?",
    options: [
      "Using the .btn-link class",
      "Using the .link-button class",
      "Using the .button-link class",
      "Using the .link-btn class"
    ],
    answer: "Using the .btn-link class"
  }
];

const MCQBootstrap = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [results, setResults] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    if (!selectedOptions[questionIndex]) {
      const isCorrect = option === questions[questionIndex].answer;
      setSelectedOptions({
        ...selectedOptions,
        [questionIndex]: option
      });
      setResults({
        ...results,
        [questionIndex]: isCorrect
      });

      if (Object.keys(selectedOptions).length + 1 === questions.length) {
        setShowSummary(true);
      }
    }
  };

  const correctAnswersCount = Object.values(results).filter(Boolean).length;
  localStorage.setItem("bootC", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("bootW", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
  localStorage.setItem("bootP", percentage);

  return (
    <div className="mcq-container">
      <h1>Bootstrap Quiz</h1>
      {!showSummary ? (
        questions.map((question, index) => (
          <div key={index} className="question-block">
            <h2>{question.question}</h2>
            <div className="options">
              {question.options.map((option, i) => (
                <button
                  key={i}
                  className={`option-button ${
                    selectedOptions[index] === option
                      ? results[index]
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(index, option)}
                  disabled={!!selectedOptions[index]}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedOptions[index] && (
              <div className="result">
                {results[index] ? (
                  <p className="correct-message">Correct answer!</p>
                ) : (
                  <p className="incorrect-message">
                    Wrong answer! The correct answer is: {questions[index].answer}
                  </p>
                )}
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="summary">
          <h2>Quiz Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Total Questions</th>
                <th>Correct Answers</th>
                <th>Wrong Answers</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{questions.length}</td>
                <td>{correctAnswersCount}</td>
                <td>{wrongAnswersCount}</td>
                <td>{percentage.toFixed(2)}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MCQBootstrap;
