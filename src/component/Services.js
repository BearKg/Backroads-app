import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="service-section section" id="services">
      <Title title="our" subTitle="services" />
      <div className="service-container general-container">
        {services.map((service) => {
          const { id } = service
          return (
            <Service key={id} {...service}/>
          )
        })}
      </div>
    </section>
  )
}

export default Services
