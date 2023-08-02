import React from 'react'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="footer section">
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
            return <SocialLinks key={id} {...link} />
          })}
        </ul>
      </div>
      
      <p>
        Copyright &copy; Backroads Travel Tours Company{' '}
        <span id="date">{new Date().getFullYear()}</span>. All Rights Reserved
      </p>

    </footer>
  )
}

export default Footer
