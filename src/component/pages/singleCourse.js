import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const styled = {
    video:{
        marginLeft: "0px"
    },
    p:{
        textAlign: "left",
        width: "50%",
        marginLeft: "390px",
        marginTop: "30px"
    },
    h3:{
        marginLeft: "0px",
        textAlign:  "center"
    }
}

const SingleCourse = () => {
    const [course, setCourse] = useState([]);
    const {ID} = useParams();

    const url = "http://localhost:3000/results";

    const fetchCourse = async ()=>{
        const response = await fetch(url);
        const data = await response.json();

        setCourse(data)

    }

    useEffect(()=>{
        fetchCourse();
    },[])

    const findCourse = course.find((info)=>{
        return info.id === ID
    })


    const courseEvery = findCourse;
    
  return (
    <div>
        
         <CourseReturn {...courseEvery} />  
    hello</div>
  )
}

const CourseReturn =(props)=>{
    return(
        <section>
            
            <iframe style={styled.video} width="75%" height="500"frameborder="0" title="YouTube video player"  src={props.blocks_url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <h3 style={styled.h3}>{props.name}</h3>
            <p style={styled.p}>{props.short_description}</p>
        </section>
    )
}

export default SingleCourse