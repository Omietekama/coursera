import React,{useState} from 'react'
import useFetch from '../../custom_hooks/useFetch'
import { useParams } from 'react-router-dom';
import "../scss/Home.scss"

const SearchSingleCourse = () => {
    const [course, setCourse] = useState([]);
    const {ID} = useParams();

    const data = useFetch("http://localhost:3000/results");

    const findCourse = data.find((info)=>{
        return info.id === ID
    });

    const courseEvery = findCourse;
  return (
    <div>{<CourseReturn  {...courseEvery}/>}</div>
  )
}

const CourseReturn =(props)=>{
    return(
        <section className='section'>
            
            <img className='img' src={props.uri} alt="" />
            <h3>{props.name}</h3>
            <p>{props.short_description}</p>
        </section>
    )
}

export default SearchSingleCourse