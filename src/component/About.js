import React from 'react'
import aboutImage from '../img/about.jpeg'
import Title from '../Title'

const About = () => {
  return (
    <section className="about-section section" id="about">
      <Title title='about' subTitle='us'/>
      <div className="about-container general-container">
        <div className="beach-img">
          <img src={aboutImage} alt="beach image" />
        </div>
        <div className="describe-container">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button className="general-btn">read more</button>
        </div>
      </div>
    </section>
  )
}

export default About
