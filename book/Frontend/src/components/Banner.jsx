import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
  <>
  <div className='banner'>
   <div className="lf">
      <h1>
         Hello, welcomes here to learn something {""}
         <span>new everyday!!!</span>
      </h1>
      <p>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quas, quasi libero voluptates iste rem placeat aut repudiandae dolor veniam reiciendis eligendi exercitationem adipisci beatae voluptatum vero sapiente doloremque commodi.
      </p>
      <input type="text" placeholder='Enter your email'/>
     <li><button>Secondary</button></li>
   </div>
   <div className="rg">
      <img src={banner} alt="" />
   </div>
  </div>
  </>
  )
}

export default Banner
