import React from 'react'
import './Home.css'
import car1 from '../assets/car1.jpeg'
import car2 from '../assets/car2.jpeg'
import car3 from '../assets/car3.jpeg'
import car4 from '../assets/car4.jpeg'
import car5 from '../assets/car5.jpeg'
import car6 from '../assets/car6.jpeg'
import car7 from '../assets/car7.jpeg'
import car8 from '../assets/car8.jpeg'
import car9 from '../assets/car9.jpeg'
import car10 from '../assets/car10.jpeg'
import car11 from '../assets/car11.jpeg'
import car12 from '../assets/car12.jpeg'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <h2>Latest Cars </h2>
      <div className="cars">
         <div className="car">
            <img src={car1} alt="" />
           <div className="text">
           <p>Name:Sports Car</p>
            <p>Manufactrued:USA</p>
            <p>Price:10000$</p>
           </div>
         </div>
         <div className="car">
            <img src={car2} alt="" />
          <div className="text">
          <p>Name:Sports Car</p>
            <p>Manufactrued:France</p>
            <p>Price:30000$</p>
          </div>
         </div>
         <div className="car">
            <img src={car3} alt="" />
            <div className="text">
            <p>Name:Dugati Car</p>
            <p>Manufactrued:Italy</p>
            <p>Price:40000$</p>
            </div>
         </div>
         <div className="car">
           <div className="text">
           <img src={car4} alt="" />
            <p>Name:Luxirious Car</p>
            <p>Manufactrued:China</p>
            <p>Price:20000$</p>
           </div>
         </div>
         
      </div>
      <div className="cars">
         <div className="car">
            <img src={car5} alt="" />
            <div className="text">
            <p>Name:Mercides Car</p>
            <p>Manufactrued:India</p>
            <p>Price:130000$</p>
            </div>
         </div>
         <div className="car">
            <img src={car6} alt="" />
            <div className="text">
            <p>Name:Roof Car</p>
            <p>Manufactrued:Dubai</p>
            <p>Price:70000$</p>
            </div>
         </div>
         <div className="car">
            <img src={car7} alt="" />
           <div className="text">
           <p>Name:Sports Car</p>
            <p>Manufactrued:Korea</p>
            <p>Price:50000$</p>
           </div>
         </div>
         <div className="car">
            <img src={car8} alt="" />
            <div className="text">
            <p>Name:Ford Car</p>
            <p>Manufactrued:India</p>
            <p>Price:1000$</p>
            </div>
         </div>
         
      </div>
      <div className="cars">
         <div className="car">
            <img src={car9} alt="" />
            <div className="text">
            <p>Name:Simple Car</p>
            <p>Manufactrued:Germany</p>
            <p>Price:120000$</p>
            </div>
         </div>
         <div className="car">
            <img src={car10} alt="" />
            <div className="text">
            <p>Name:Roll Royalce Car</p>
            <p>Manufactrued:France</p>
            <p>Price:140000$</p>
            </div>
         </div>
         <div className="car">
            <img src={car11} alt="" />
            <div className="text">
            <p>Name:Racing Car</p>
            <p>Manufactrued:Russia</p>
            <p>Price:170000$</p>
            </div>
         </div>
         <div className="car">
            <img src={car12} alt="" />
            <div className="text">
            <p>Name:Racing Car</p>
            <p>Manufactrued:Chilly</p>
            <p>Price:190000$</p>
            </div>
         </div>
         
      </div>
      <Footer/>
     
    </div>
  
  )
}

export default Home
