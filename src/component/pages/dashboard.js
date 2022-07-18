import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../scss/courses.scss"

const styled = {
    dashboard:{
        marginLeft: "200px",
        width:"80%"
        
    },
    course_card_dashboard:{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        textDecoration: "none",
        color: "black"
    },
    card_info :{
        width : "20%",
        backgroundColor: "#e1e7ea",
        marginLeft: "20px",
        marginTop: "20px",
        borderRadius: "5px",
        boxShadow: "1px 2px 3px darkgray"
    },
    image:{
        width: "100%"
    },
    h6:{
        textAlign: "left",
        padding: "10px"
    },
    link:{
        textDecoration: "none",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "600",
       
    }

    
}

const Dashboard = ({user}) => {

    
    const [course,setCourse] = useState([]);
    const url = "http://localhost:3000/results";
    const fetchCourses = async()=>{
        const response = await fetch(url);
        const courseInfo = await response.json();
        setCourse(courseInfo);
        console.log(course)
    }

    useEffect(()=>{
        fetchCourses()
    },[])

    const mapCourseInfo = course.map((info)=>{
        return <ReturnCourseInfo {...info} />
    })
  return (
    <div className='dashboard' style={styled.dashboard}><h1>WELCOME  {user?.fullName}</h1>
    <h2>Our Free Courses Avaliable to You</h2>
        <p>Whatever your background or interests are, Protehk have you covered.</p>
        <div className='course_card-dashboard' style={styled.course_card_dashboard}>{mapCourseInfo}</div>
     </div> 
  )
}

const ReturnCourseInfo = (props)=>{
    return(
        <div key={props.course_id} className='card_info' style={styled.card_info}>
            <img src={props.media.image.large} style={styled.image} alt="" /> 
            <h5 style={styled.h6}>{props.name}</h5>
            <p style={styled.h6}>{props.org}</p>
            
             
             { <Link style={styled.link} to={`/dashboard/${props.id}`}>Take Course</Link> }
        
             
        </div>
    )
}


export default Dashboard