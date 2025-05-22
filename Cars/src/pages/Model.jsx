import React from 'react'
import './Mode.css'
import mercides1 from '../assets/mercides1.jpeg'
import mercides2 from '../assets/mercides2.jpeg'
import mercides3 from '../assets/mercides3.jpeg'
import mercides4 from '../assets/mercides4.jpeg'
import mercides from '../assets/mercides.jpeg'
import rolls from '../assets/rolls.jpeg'
import rolls1 from '../assets/rolls1.jpeg'
import rolls2 from '../assets/rolls2.jpeg'
import rolls3 from '../assets/rolls3.jpeg'
import rolls4 from '../assets/rolls4.jpeg'
import bmw from '../assets/bmw.jpeg'
import bmw1 from '../assets/bmw1.jpeg'
import bmw2 from '../assets/bmw2.jpeg'
import bmw3 from '../assets/bmw3.jpeg'
import bmw5 from '../assets/bmw5.jpeg'
import bugati from '../assets/bugati.jpeg'
import bugati1 from '../assets/bugati1.jpeg'
import bugati2 from '../assets/bugati2.jpeg'
import bugati3 from '../assets/bugati3.jpeg'
import bugati4 from '../assets/bugati4.jpeg'

const Model = () => {
  return (
    <div className='model'>
      <div className="head">
      <h2>Mercides <img src={mercides} alt="" /></h2>
      </div>
      <div className="cars">
        <img src={mercides1} alt="" />
        <img src={mercides2} alt="" />
        <img src={mercides3} alt="" />
        <img src={mercides4} alt="" />
      </div>
      <div className="head1">
        <h2>Rolls Royce <img src={rolls} alt="" /></h2>
      </div>
      <div className="cars">
        <img src={rolls1} alt="" />
        <img src={rolls2} alt="" />
        <img src={rolls3} alt="" />
        <img src={rolls4} alt="" />
      </div>
      <div className="head2">
        <h2>BMW <img src={bmw} alt="" /> </h2>
      </div>
      <div className="cars">
        <img src={bmw1} alt="" />
        <img src={bmw2} alt="" />
        <img src={bmw3} alt="" />
        <img src={bmw5} alt="" />
      </div>
      <div className="head2">
        <h2>Dugati <img src={bugati} alt="" /> </h2>
      </div>
      <div className="cars">
        <img src={bugati1} alt="" />
        <img src={bugati2} alt="" />
        <img src={bugati3} alt="" />
        <img src={bugati4} alt="" />
      </div>
    </div>
  )
}

export default Model
