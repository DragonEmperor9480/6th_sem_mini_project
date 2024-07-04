import React, { useState } from 'react';
import './mcq.css';

const questions = [
  {
    question: "What is the output of `print(2 ** 3)` in Python?",
    options: ["5", "6", "8", "9"],
    answer: "8"
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    options: ["str", "tuple", "list", "int"],
    answer: "list"
  },
  {
    question: "What does the `len()` function do in Python?",
    options: ["Returns the length of an object", "Converts a value to an integer", "Adds two numbers", "Returns the type of an object"],
    answer: "Returns the length of an object"
  },
  {
    question: "Which of the following is used to define a block of code in Python?",
    options: ["Brackets", "Indentation", "Parentheses", "Quotation marks"],
    answer: "Indentation"
  },
  {
    question: "What is the correct syntax to create a function in Python?",
    options: ["def functionName():", "function functionName():", "create functionName():", "func functionName():"],
    answer: "def functionName():"
  },
  {
    question: "How do you create a list in Python?",
    options: ["list = {}", "list = []", "list = ()", "list = <>"],
    answer: "list = []"
  },
  {
    question: "What is the output of `print('Hello, World!'.upper())`?",
    options: ["hello, world!", "HELLO, WORLD!", "Hello, World!", "None of the above"],
    answer: "HELLO, WORLD!"
  },
  {
    question: "Which of the following is a keyword in Python?",
    options: ["else", "function", "var", "constant"],
    answer: "else"
  },
  {
    question: "How do you start a comment in Python?",
    options: ["//", "/*", "#", "--"],
    answer: "#"
  },
  {
    question: "Which method is used to add an element to a set in Python?",
    options: ["add()", "append()", "insert()", "extend()"],
    answer: "add()"
  }
];

const MCQ = () => {
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
  localStorage.setItem("pyc", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("pyw", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
  localStorage.setItem("pyp", percentage);

  return (
    <div className="mcq-container ">
      <h1>Python MCQ Quiz</h1>
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

export default MCQ;
