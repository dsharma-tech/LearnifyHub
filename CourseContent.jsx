// CourseContent.jsx
import React, { useState } from "react";
import "./courseContent.css"; // Import your CSS file for styling if needed

const CourseContent = ({ course, onBack }) => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState(Array(10).fill(null));
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      question: "What is the main feature of C++?",
      options: ["Object-Oriented Programming", "Functional Programming", "Procedural Programming", "None of the above"],
      answer: 0
    },
    {
      question: "Which of the following is a data type in C++?",
      options: ["int", "float", "double", "All of the above"],
      answer: 3
    },
    {
      question: "What does the 'public' keyword indicate in C++?",
      options: ["Access specifier", "Function return type", "Class type", "None of the above"],
      answer: 0
    },
    {
      question: "What is the extension of a C++ source file?",
      options: [".c", ".cpp", ".java", ".py"],
      answer: 1
    },
    {
      question: "Which operator is used to access the address of a variable?",
      options: ["&", "*", "&&", "^"],
      answer: 0
    },
    {
      question: "Which of the following is used to define a class in C++?",
      options: ["class", "struct", "object", "None of the above"],
      answer: 0
    },
    {
      question: "What is the size of an int in C++?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
      answer: 3
    },
    {
      question: "Which of the following is a loop structure in C++?",
      options: ["for", "while", "do-while", "All of the above"],
      answer: 3
    },
    {
      question: "What is the use of 'cin' in C++?",
      options: ["Output", "Input", "Error", "None of the above"],
      answer: 1
    },
    {
      question: "Which of the following is a keyword in C++?",
      options: ["new", "delete", "class", "All of the above"],
      answer: 3
    }
  ];

  const handleModuleClick = (index) => {
    setSelectedModule(course.modules[index]);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setQuizAnswers(Array(10).fill(null));
    setQuizSubmitted(false);
  };

  const handleQuizOptionChange = (questionIndex, optionIndex) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = optionIndex;
    setQuizAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  const getCorrectAnswersCount = () => {
    return quizAnswers.reduce((count, answer, index) => {
      if (answer === quizQuestions[index].answer) {
        count += 1;
      }
      return count;
    }, 0);
  };

  return (
    <div className="course-content">
      <div className="course-details"><br /><br /><br /><br />
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <h1>{course.title}</h1>
        <h3>Course Instructor: {course.tutor}</h3><br />
        <div className="modules-list">
          {course.modules.map((module, index) => (
            <div className="module-item" key={index} onClick={() => handleModuleClick(index)}>
              <h2>{module.title}</h2>
            </div>
          ))}
        </div>
        <button className="start-quiz-button" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </div>
      <div className="video-player">
        <br /><br /><br /><br /><br /><br /><br />
        {selectedModule && (
          <div className="video-wrapper">
            <iframe
              title={selectedModule.title}
              width="100%"
              height="400"
              src={selectedModule.video}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            
          </div>
        )}
        {selectedModule && (
          <div className="notes">
            <h2>{selectedModule.title}</h2>
            <p>{selectedModule.notes}</p>
          </div>
        )}
      </div>
      {showQuiz && (
        <div className="quiz-section">
          <br /><br /><br />
          <h2>Quiz</h2>
          {quizQuestions.map((question, index) => (
            <div key={index} className="quiz-question">
              <h3>{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="quiz-option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={optionIndex}
                    checked={quizAnswers[index] === optionIndex}
                    onChange={() => handleQuizOptionChange(index, optionIndex)}
                  />

                  <label>{option}</label>
                </div>
              ))}
            </div>
          ))}
          {!quizSubmitted ? (
            <button className="submit-quiz-button" onClick={handleSubmitQuiz}>
              Submit Quiz
            </button>
          ) : (
            <div className="quiz-results">
              <h3>Quiz Results</h3>
              <p>
                You answered {getCorrectAnswersCount()} out of {quizQuestions.length} questions correctly.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseContent;