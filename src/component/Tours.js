import React from 'react'
import Title from '../Title'
import { tours } from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="tour-section section" id="tour">
      <Title title="featured" subTitle="tours" />
      <div className="tour-list">
        {tours.map((tour) => {
          const {id} = tour
          return (
            <Tour key={id} {...tour}/>
          )
        })}
      </div>
      <button className="all-tour general-btn">all tour</button>
    </section>
  )
}

export default Tours
