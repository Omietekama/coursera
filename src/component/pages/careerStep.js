import React from "react";
import { step } from "../data/data";

const CareerStep = ()=>{

    const careerMap = step.map((data)=>{
        return <ReturnCareerStep {...data} />
    })
    return (
        <div className="career-section">
            <h2 className="career-heading">Take the first step toward your new career</h2>
            <p className="career-para">Take the first step toward your new career
</p>
         <div className="all-career-card">{careerMap}</div>
        
        </div>
    )
}

const ReturnCareerStep = (props)=>{
    return (
        <div className="career-card" key={props.id}>
            <img className="career-image" src={props.image} alt="" />
            <h3 className="career-experience">{props.experience}</h3>
            <p className="career-skill">{props.skill}</p>
            <div className="small-line"></div>
            <div className="career-div">
                <h4 className="career-num">{props.number}</h4>
                <p className="career-field">{props.field}</p>
            </div>
        </div>
    )
}

export default CareerStep