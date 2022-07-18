import React from 'react'
import { Link } from 'react-router-dom'

const AllCourses = () => {
  return (
    <div className='courses'>
        <section className='hero'>
            <div className='hero-left'>
                <h1>Launch your new career with a Professional Certificate on Protekt</h1>
                <p>Professional Certificates offer flexible, online training designed to get you job-ready for high-growth fields.</p>
                <h5>7 day free trial | Starting at $39 per month | Less than 6 months at your own pace</h5>
                <button className='btn btn-hero'>Explore Career</button>
            </div>
            
            <div className='hero-right'>
                <img src='./images/learnerImage.png'  alt/>
            </div>
        </section>
    {/* <Link to="/register">register Page</Link>
    <Link to="/login">Login</Link> */}
    </div>
  )
}

export default AllCourses