// Enroll.jsx
import React from "react";
import "./enroll.css";

const Enroll = ({ course, onBack, onStartCourse }) => {
  const handleGetStarted = () => {
    onStartCourse();
  };

  return (
    <div className="enroll-container">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <div className="course-details">
        <img src={course.image} alt={course.title} />
        <h1>{course.title}</h1>
        <p>Taught by: {course.tutor}</p>
        <p>Duration: {course.duration}</p>
        <p>Syllabus:</p>
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <br/>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default Enroll;
