import React, { useState, useContext } from 'react';
import { ThemeStore } from "../utility/ThemeContext";
import { motion } from 'framer-motion';
import '../mcq.css';

const questions = [
  {
    question: "How do you enter insert mode in Vim?",
    options: ["i", "a", "o", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which command is used to save and exit a file in Vim?",
    options: [":q", ":wq", ":w", ":x"],
    answer: ":wq"
  },
  {
    question: "How do you undo the last change in Vim?",
    options: ["u", "Ctrl+z", ":undo", "U"],
    answer: "u"
  },
  {
    question: "How do you move to the beginning of the file in Vim?",
    options: ["gg", "G", "0", "^"],
    answer: "gg"
  },
  {
    question: "Which command is used to delete a line in Vim?",
    options: ["dd", "D", "dl", ":del"],
    answer: "dd"
  },
  {
    question: "How do you search for a pattern in Vim?",
    options: ["/pattern", "?pattern", ":search pattern", ":find pattern"],
    answer: "/pattern"
  },
  {
    question: "How do you switch to visual mode in Vim?",
    options: ["v", "V", "Ctrl+v", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "How do you copy (yank) a line in Vim?",
    options: ["yy", "Y", ":y", "yw"],
    answer: "yy"
  },
  {
    question: "Which command is used to paste text in Vim?",
    options: ["p", "P", ":paste", "pp"],
    answer: "p"
  },
  {
    question: "How do you open a new file in the current Vim session?",
    options: [":e filename", ":n filename", ":open filename", ":edit filename"],
    answer: ":e filename"
  }
];

const MCQvim = () => {
  const { theme, toggleTheme } = useContext(ThemeStore);
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
  localStorage.setItem("vimc", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("vimw", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
  localStorage.setItem("vimp", percentage);

  return (
    <div className={`mcq-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
    <motion.button
      className={`fixed top-4 right-4 p-2 rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
    >
    </motion.button>
          <h1>Vim Quiz</h1>
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

export default MCQvim;
