import React, { useState } from 'react';
import '../mcq.css';

const questions = [
  {
    question: "What is Node.js?",
    options: [
      "A JavaScript library",
      "A JavaScript runtime",
      "A JavaScript framework",
      "A JavaScript compiler"
    ],
    answer: "A JavaScript runtime"
  },
  {
    question: "Which module in Node.js is used to work with the file system?",
    options: ["http", "url", "fs", "path"],
    answer: "fs"
  },
  {
    question: "How do you install a package using npm?",
    options: [
      "npm download <package_name>",
      "npm init <package_name>",
      "npm install <package_name>",
      "npm update <package_name>"
    ],
    answer: "npm install <package_name>"
  },
  {
    question: "Which of the following is a core module in Node.js?",
    options: ["express", "mongodb", "lodash", "http"],
    answer: "http"
  },
  {
    question: "How do you create an HTTP server in Node.js?",
    options: [
      "http.createServer()",
      "http.Server()",
      "http.initServer()",
      "http.startServer()"
    ],
    answer: "http.createServer()"
  },
  {
    question: "Which of the following is a popular framework for Node.js?",
    options: ["Django", "Rails", "Laravel", "Express"],
    answer: "Express"
  },
  {
    question: "How do you read environment variables in Node.js?",
    options: [
      "process.env",
      "process.variables",
      "process.config",
      "process.envVars"
    ],
    answer: "process.env"
  },
  {
    question: "What is the default package manager for Node.js?",
    options: ["Yarn", "npm", "Bower", "Composer"],
    answer: "npm"
  },
  {
    question: "Which method is used to import modules in Node.js?",
    options: ["require()", "import()", "include()", "fetch()"],
    answer: "require()"
  },
  {
    question: "How do you handle asynchronous operations in Node.js?",
    options: [
      "Callbacks",
      "Promises",
      "Async/Await",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const MCQnode1 = () => {
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
  localStorage.setItem("nodec", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("nodew", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
  localStorage.setItem("nodep", percentage);

  return (
    <div className="mcq-container">
      <h1>Node.js Quiz</h1>
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

export default MCQnode1;
