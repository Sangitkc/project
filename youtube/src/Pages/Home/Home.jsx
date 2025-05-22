import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Video from '../Video/Video'

const Home = () => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar category={category} setCategory={setCategory} />
      <div className='container'>
        <Feed category={category} />
      </div>
    </>
  );
};
export default Home