import React from 'react'
import { pageLinks } from '../data'

const PageLinks = ({href, content}) => {
  return (
    <li>
      <a href={href} className="home-link">
        {content}
      </a>
    </li>
  )
}

export default PageLinks
