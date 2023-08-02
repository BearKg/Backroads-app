import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="contact-container">
        <div className="question-script">
          <h3>want latest tour info and updates?</h3>
          <p>sign up for newsletter and stay up to date</p>
        </div>
        <div className="contact-box">
          <input type="email" placeholder="Your Email" />
          <button className="general-btn">submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
