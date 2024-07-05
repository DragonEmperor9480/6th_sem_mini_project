import React, { useState } from 'react';
import '../mcq.css';

const questions = [
  {
    question: "Which library is commonly used for 2D game development in JavaScript?",
    options: ["React", "Three.js", "PixiJS", "Node.js"],
    answer: "PixiJS"
  },
  {
    question: "What is the purpose of the `requestAnimationFrame` method in JavaScript game development?",
    options: ["To create a game loop", "To load assets", "To handle user input", "To manage audio"],
    answer: "To create a game loop"
  },
  {
    question: "Which of the following is a popular game engine for JavaScript?",
    options: ["Unity", "Unreal Engine", "Godot", "Phaser"],
    answer: "Phaser"
  },
  {
    question: "What does the `context.fillRect` method do in HTML5 Canvas?",
    options: ["Fills a rectangle with color", "Draws the outline of a rectangle", "Clears a rectangle area", "Resizes a rectangle"],
    answer: "Fills a rectangle with color"
  },
  {
    question: "Which method is used to detect collisions in JavaScript games?",
    options: ["checkCollision()", "isColliding()", "intersects()", "collide()"],
    answer: "intersects()"
  },
  {
    question: "How can you load images for use in a JavaScript game?",
    options: ["Using the `Image` object", "Using `fetch` API", "Using `XMLHttpRequest`", "Using `loadImage`"],
    answer: "Using the `Image` object"
  },
  {
    question: "What is the role of a game loop in JavaScript game development?",
    options: ["To initialize the game", "To manage the game state", "To render frames and update game logic", "To handle user inputs"],
    answer: "To render frames and update game logic"
  },
  {
    question: "Which of the following can be used for physics simulation in JavaScript games?",
    options: ["jQuery", "Matter.js", "React", "Express"],
    answer: "Matter.js"
  },
  {
    question: "How do you play audio in a JavaScript game?",
    options: ["Using the `Audio` object", "Using the `Sound` object", "Using `playAudio` method", "Using `mediaElement`"],
    answer: "Using the `Audio` object"
  },
  {
    question: "Which HTML element is used to create a drawing surface for JavaScript games?",
    options: ["<canvas>", "<svg>", "<div>", "<img>"],
    answer: "<canvas>"
  }
];

const MCQGamedev = () => {
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
  localStorage.setItem("gamec", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("gamew", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
localStorage.setItem("gamep", percentage);
  return (
    <div className="mcq-container">
      <h1>JavaScript Game Development Quiz</h1>
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

export default MCQGamedev;
