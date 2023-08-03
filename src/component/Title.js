import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <h1 className="about-heading" style={{ color: 'black' }}>
      {title} <span style={{ color: 'hsl(185, 62%, 45%)' }}>{subTitle}</span>
    </h1>
  )
}

export default Title
