import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import { Animate } from 'react-simple-animate'
const Home= () => {
  const navigate=useNavigate();
  const handleContactShow=()=>{
navigate('/contact'); 
  }
  return (
    <section className='home' id='home'>
      <div className="home__wrapper">
        <h1>
          Hello! I am Kamil
          <br/>I am a Frontend  Developer 
        </h1>
      </div>
      <div className="image">
         
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      
      start={{
        transform: 'translateY(550px)' 
      }}
      end={{
        transform: 'translatex(0px)' 
      }}
      
      >
      <div className="home__contact-content">
        <button onClick={handleContactShow}>Hire ME</button>
      </div>
      </Animate>
      
      
    </section>
  )
}

export default Home;
