import React from "react"
import "./about.css"
import Back from "../common/back/Back"


const About = () => {
  return (
    <>
      <Back title='About Us' />
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>Welcome to our E-learning platform, where knowledge meets innovation! We are committed to providing high-quality education accessible to everyone, anywhere in the world. Whether you're a student looking to enhance your skills or a professional aiming for career advancement, our platform offers a diverse range of courses to cater to your learning needs.</p>
        <div className="about-content">
          <div className="section">
            <h3>What We Offer</h3>
            <p>Our E-learning platform offers a wide range of courses covering various subjects from arts to sciences, designed to meet the learning needs of students and professionals alike. With our interactive learning materials, engaging video lectures, and comprehensive assessments, you can gain valuable knowledge at your own pace.</p>
          </div>
          <div className="section">
            <h3>Why Choose Us</h3>
            <p>Choosing our platform means choosing quality education tailored to your needs. We provide:</p>
            <ul>
              <li>Expert instructors with real-world experience</li>
              <li>Interactive learning resources</li>
              <li>Flexible learning schedules</li>
              <li>Access to a diverse range of courses</li>
            </ul>
          </div>
          <div className="section">
            <h3>Benefits</h3>
            <p>By choosing our E-learning platform, you can enjoy numerous benefits including:</p>
            <ul>
              <li>Convenience: Learn anytime, anywhere</li>
              <li>Cost-effectiveness: Save on travel and accommodation expenses</li>
              <li>Flexibility: Customize your learning experience</li>
              <li>Community: Connect with like-minded learners</li>
            </ul>
          </div>
          <div className="section">
            <h3>About Certification</h3>
            <p>Upon successful completion of a course, you will receive a certification that demonstrates your proficiency in the subject matter. Our certificates are recognized by industry professionals and employers, enhancing your credibility and career prospects.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
