import React from 'react'
import logo from '../img/logo.svg'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Home = () => {
  return (
    <header id="home">
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <div className="vertical-link">
            <ul>
              {pageLinks.map((link) => {
                const { id, href, content } = link
                return (
                  <li key={id}>
                    <a href={href} className="home-link">
                      {content}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="horizontal-link">
          <ul>
            {pageLinks.map((link) => {
              const { id } = link
              return <PageLinks key={id} {...link} />
            })}
          </ul>
        </div>

        <div className="contact-link">
          <ul>
            {socialLinks.map((link) => {
              const { id, href, icon } = link
              return (
                <SocialLinks key={id} {...link}/>
              )
            })}
          </ul>
        </div>

        <div className="link-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="hero">
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <button className="explore-btn">explore tours</button>
      </div>
    </header>
  )
}

export default Home
