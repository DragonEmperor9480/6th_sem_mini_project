import React, { useState } from 'react';
import '../mcq.css';

const questions = [
  {
    question: "What is React primarily used for?",
    options: [
      "Back-end development",
      "Game development",
      "Front-end development",
      "Database management"
    ],
    answer: "Front-end development"
  },
  {
    question: "Which method is used to create components in React?",
    options: [
      "createComponent()",
      "renderComponent()",
      "React.createElement()",
      "Component.create()"
    ],
    answer: "React.createElement()"
  },
  {
    question: "What is the purpose of JSX in React?",
    options: [
      "To write HTML in JavaScript",
      "To write CSS in JavaScript",
      "To write JavaScript in HTML",
      "To write JSON in JavaScript"
    ],
    answer: "To write HTML in JavaScript"
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    answer: "useState"
  },
  {
    question: "What is a common way to handle side effects in React?",
    options: [
      "Using the useEffect hook",
      "Using the useState hook",
      "Using the useReducer hook",
      "Using the useContext hook"
    ],
    answer: "Using the useEffect hook"
  },
  {
    question: "How do you pass data from a parent component to a child component?",
    options: [
      "Using state",
      "Using props",
      "Using context",
      "Using refs"
    ],
    answer: "Using props"
  },
  {
    question: "What is the purpose of the ReactDOM.render() method?",
    options: [
      "To create a new React component",
      "To render a React element into the DOM",
      "To update the state of a component",
      "To remove a component from the DOM"
    ],
    answer: "To render a React element into the DOM"
  },
  {
    question: "What is the significance of keys in React?",
    options: [
      "To uniquely identify elements in a list",
      "To manage component state",
      "To handle component side effects",
      "To create event handlers"
    ],
    answer: "To uniquely identify elements in a list"
  },
  {
    question: "Which hook would you use to optimize performance by memoizing a value?",
    options: [
      "useMemo",
      "useCallback",
      "useEffect",
      "useState"
    ],
    answer: "useMemo"
  },
  {
    question: "What is the default behavior of the useEffect hook?",
    options: [
      "Runs after every render",
      "Runs only once after the initial render",
      "Runs before every render",
      "Runs only when dependencies change"
    ],
    answer: "Runs after every render"
  }
];

const MCQReact = () => {
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
  localStorage.setItem("reactc", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("reactw", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
  localStorage.setItem("reactp", percentage);

  return (
    <div className="mcq-container">
      <h1>React Quiz</h1>
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

export default MCQReact;
