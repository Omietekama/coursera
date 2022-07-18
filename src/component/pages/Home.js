import React from 'react'
import Hero from './hero'
import Learner from './Learner'
import Course from './Course'
import Slide from './slide'
import CareerStep from './careerStep'



const Home = () => {
  return (
    <div>
      <Hero />
       {/* add your slider */}
      {/* <Course /> */}
      <CareerStep />
      <Slide />
      
      <Learner />



    </div>
  )
}

export default Home