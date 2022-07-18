import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";
import SharedLayout from './SharedLayout';

const Input = ({setUser}) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false)
    const toggleMenu = (e) => {
        setToggle(!toggle);
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        const data ={fullName, email, password};
        const url ="http://localhost:3000/users";

        fetch(url,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log("new user added")
        })

        setUser({fullName:fullName,email:email,password:password})
            navigate("/dashboard")
    }   
    
  return (
    <div>
        <section className='signup'>
                <h1>Sign Up</h1>
                <p>Learn on your own time on protekh</p>
                
            
                    

                        
                            <form className='signup_banner' onSubmit={handleSubmit} >
                            <label name="email">FULL NAME</label>
                                <p><input name="fullname" type="text" placeholder="Full Name" required value={fullName} onChange={(e)=>setFullName(e.target.value)}></input></p>
                                <label name="email">EMAIL</label>
                                <p><input name="email" type="email" placeholder="example@email.com" required value={email} onChange={(e)=>setEmail(e.target.value)}></input></p>
                                <label name="email">PASSWORD</label>
                                <p><input name="" type="password" placeholder="input password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input></p>
                                <button type='submit'> Sign Up</button>
                            </form>
                        
                
                
                <div>
                    
                    <div className='signup_footer'>
                        <p>Already on protekh?</p>
                        <Link to='#'>Log In</Link>
                    </div>
                </div>
            </section>
    </div>

  )
}

export default Input