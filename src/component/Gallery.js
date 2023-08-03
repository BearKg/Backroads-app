import React from 'react'
import { gallery } from '../data'

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      {gallery.map(image => {
        const {id, img} = image
        return (
          <div key={id} className="gallery-box">
            <img src={img} alt="tour image"/>
            <a href="#">
              <i className="fas fa-search fa-lg"></i>
            </a>
          </div>
        )
      })}
    </section>
  )
}

export default Gallery
