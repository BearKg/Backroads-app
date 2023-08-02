import React from 'react'
import { tours } from '../data'

const Tour = ({img, date, title, text, location, duration, cost}) => {
  return (
    <div className="tour-container">
      <div className="img-box">
        <img src={img} alt="" className="tour-img" />
        <p>{date}</p>
      </div>
      <div className="description-box">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="tour-footer">
        <p>
          <i className="fas fa-map" style={{ textTransform: 'capitalize' }}></i>
          {location}
        </p>
        <p>{duration}</p>
        <p>{cost}</p>
      </div>
    </div>
  )
}

export default Tour
