import React, { useState } from 'react';
import '../mcq.css';

const questions = [
  {
    question: "What does AI stand for?",
    options: ["Artificial Integration", "Automated Intelligence", "Artificial Intelligence", "Automated Integration"],
    answer: "Artificial Intelligence"
  },
  {
    question: "Which of the following is a type of supervised learning algorithm?",
    options: ["K-means clustering", "Linear regression", "Apriori algorithm", "Genetic algorithm"],
    answer: "Linear regression"
  },
  {
    question: "What is the purpose of a confusion matrix?",
    options: ["To measure the accuracy of a classifier", "To plot data points", "To perform dimensionality reduction", "To optimize a neural network"],
    answer: "To measure the accuracy of a classifier"
  },
  {
    question: "Which technique is used for reducing the dimensionality of data?",
    options: ["Support Vector Machine", "Principal Component Analysis", "K-nearest neighbors", "Random Forest"],
    answer: "Principal Component Analysis"
  },
  {
    question: "What is the primary goal of unsupervised learning?",
    options: ["To predict future outcomes", "To classify data into predefined categories", "To discover hidden patterns in data", "To optimize an objective function"],
    answer: "To discover hidden patterns in data"
  },
  {
    question: "Which algorithm is commonly used for anomaly detection?",
    options: ["Decision Tree", "K-means clustering", "Isolation Forest", "Logistic Regression"],
    answer: "Isolation Forest"
  },
  {
    question: "What does overfitting refer to in machine learning?",
    options: ["A model that performs well on training data but poorly on new data", "A model that performs well on new data but poorly on training data", "A model that has high bias", "A model that has low variance"],
    answer: "A model that performs well on training data but poorly on new data"
  },
  {
    question: "Which of the following is a loss function used for regression tasks?",
    options: ["Cross-entropy loss", "Hinge loss", "Mean squared error", "F1 score"],
    answer: "Mean squared error"
  },
  {
    question: "What is the purpose of a validation set in machine learning?",
    options: ["To train the model", "To test the final model", "To tune hyperparameters", "To collect new data"],
    answer: "To tune hyperparameters"
  },
  {
    question: "Which metric is used to evaluate the performance of a binary classification model?",
    options: ["R-squared", "Mean Absolute Error", "F1 Score", "Silhouette Score"],
    answer: "F1 Score"
  }
];

const MCQgenai = () => {
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
  localStorage.setItem("genaiC", correctAnswersCount);
  const wrongAnswersCount = questions.length - correctAnswersCount;
  localStorage.setItem("genaiW", wrongAnswersCount);
  const percentage = (correctAnswersCount / questions.length) * 100;
  localStorage.setItem("genaiP", percentage);

  return (
    <div className="mcq-container">
      <h1>Non-Generative AI Quiz</h1>
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

export default MCQgenai;
