import React from 'react'
import './About.css'
import wall from '../assets/wall.webp'
import wall2 from '../assets/wall2.webp'

const About = () => {
  return (
    <div className='about'>
      <h2>Welcome to the world of automotive Cars!</h2>
     <div className="cars">
    <div className="car">
    <img src={wall}  />
    <p>Cars are not just a mode of transportation; they embody innovation, design, and engineering prowess. From the roaring engines of sports cars to the silent efficiency of electric vehicles, cars reflect our quest for speed, sustainability, and style.</p>
    </div>
     <div className="car">
     <img src={wall2} alt="" />
     <p>
     Cars are fascinating machines with a rich history and an ever-evolving technology landscape. They have transformed from simple steam-powered vehicles in the 18th century to today's high-tech, self-driving, electric marvels.</p>
     </div>
     </div>
    
     
    </div>
  )
}

export default About
