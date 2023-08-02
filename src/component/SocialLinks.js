import React from 'react'
import { socialLinks } from '../data'

const SocialLinks = ({href, icon}) => {
  return (
    <li>
      <a href={href} rel="noreferrer" target="_blank">
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLinks
