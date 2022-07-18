
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AllCourses from './AllCourses'
import CompleteCert from './completeCert'
import CareerStep from './careerStep'
import CoursesInfo from './coursesInfo'
import Slide from './slide'

const NewCareer = () => {
  return( <div>
    <AllCourses />
    <CareerStep />
    <CoursesInfo />
    <CompleteCert />
    <Slide />

  </div>
  )
}


 export default NewCareer