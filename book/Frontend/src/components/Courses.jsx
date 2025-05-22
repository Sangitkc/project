import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Courses = () => {

  const [book,setBook] = useState([] )
  useEffect(()=>{
      const getBook = async()=>{
        try {
       const res=  await axios.get("http://localhost:4001/book")
       console.log(res.data)
       setBook(res.data)
        } catch (error) {
          console.error(error)
        }
      }
      getBook();
  },[])
  return (
    <>
     <Navbar/>
      <div className="courses ">
        <div >
          <h1>We're delighted to have you <span  className='text-pink-500'> Here! :)</span></h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eos distinctio, fugit earum ipsum enim libero provident facilis ut tempora magnam obcaecati ratione quos deleniti, molestiae vel repellendus, praesentium ducimus.
          Voluptas, nam aut repellat eaque saepe, autem quo nisi nulla et nesciunt at labore sed! Excepturi velit quasi fuga recusandae fugit aut ullam numquam, voluptatum eum ab. Illum, architecto obcaecati.</p>
         <Link to='/'>
         <button>Back</button>
         </Link>
        </div>
        <div className='card-container'>
          {
            book.map((item)=>{
            return  <Cards key={item.id} item={item}/>
            })
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Courses
