import React from 'react'
import { services } from '../data'

const Service = ({icon, title, text}) => {
  return (
    <div className="service-box">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <div className="description-box">
        <h4 className="service-name">{title}</h4>
        <p className="service-describe">{text}</p>
      </div>
    </div>
  )
}

export default Service
