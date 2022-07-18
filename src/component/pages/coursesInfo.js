import React, { useEffect, useState } from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from 'react-router-dom';

const CoursesInfo = () => {
    const [category,setCategory] = useState([]);
    const url = "http://localhost:3000/category";
    const fetchCategory = async()=>{
        const response = await fetch(url);
        const categoryInfo = await response.json();
        setCategory(categoryInfo);
        console.log(category)
    }

    useEffect(()=>{
        fetchCategory()
    },[])

    const mapCourseInfo = category.map((info)=>{
        return <ReturnCourseInfo {...info} />
    })
  return (
    <div className='course_section'>
        <h2>Find a career that works for you</h2>
        <p>Whatever your background or interests are, Professional Certificates have you covered.
</p>
        <div className='course_card'>{mapCourseInfo}</div>
     </div>
    
  )
}

const ReturnCourseInfo = (props)=>{
    return(
        <div className='card-info'>
            <img src={props.img_url} alt="" /> 
            <div className='card-content'>
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-write-up'>{props.description}</p>
            <ul> 
                <p>{props.like.name}:</p>
                <li>{props.like.a}</li>
                <li>{props.like.b}</li>
                <li>{props.like.c}</li>
                </ul>
            </div>
            <div className='divider'></div>
                <div className='recommended_certificate'>
                    <h4>{props.certificate}</h4>
                    <div className='card-footer'>
                        <img src={props.src_img} alt="" />
                    <Link className='course-link' to="#">{props.src}</Link>
                   <span className='arrow'> <AiOutlineArrowRight /></span> 
                    </div>
                </div>
            
        
        
        </div>
    )
}
export default CoursesInfo