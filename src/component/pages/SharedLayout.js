import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Search from './Search'
import { FaAngleDown, FaTimes } from "react-icons/fa";
import Footer from './Footer';

const styled = {
  text: {
    textDecoration: "none"
  },
  color: {
    color: "white",
    textDecoration: "none"
  }
}


const SharedLayout = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [toggle, setToggle] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = "http://localhost:3000/users"
    const data = {
      fullName,
      email,
      password
    }
    console.log(data)
    fetch(
      url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    ).then(() => {
      console.log('new user')
    })


  }
  const toggleMenu = (e) => {
    setToggle(!toggle);
  }

  if (toggle) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <header>
        <nav>
          <Link to='/' className='logo'>Protekh</Link>
          <button className='btn_'>Explore <FaAngleDown /></button>
          <Search />
          <ul>
            <NavLink to=''><li>Online Degree</li></NavLink>
            <NavLink to='/exploreCert'><li>Find your New Career</li></NavLink>
            <NavLink to='#'><li>For Universities</li></NavLink>

          </ul>
          <Link Link style={styled.text} color="white" to='/login' className='a'>Log In</Link>
          <button className='btn'><Link style={styled.color }  to="/register">Sign Up</Link></button>
          {/* {toggle && (
            <form className='signup' onSubmit={handleSubmit}>
              <div className='overlay'>
                <section className='signup_inner'>
                  <FaTimes onClick={toggleMenu} />
                  <h1>Sign Up</h1>
                  <p>Learn on your own time on protekh</p>



                  <section className='signup_inner_banner'>
                    <label>Full Name</label>
                    <p><input name='fullname' value={fullName} type='text' required onChange={(e) => setFullName(e.target.value)}></input></p>
                    <label>Email</label>
                    <p><input name='email' value={email} type='email' required onChange={(e) => setEmail(e.target.value)}></input></p>
                    <label>Password</label>
                    <p><input name='password' value={password} type='password' required onChange={(e) => setPassword(e.target.value)}></input></p>

                  </section>



                  <div>
                    <button type='submit' className='btn'>Sign Up</button>
                    <div className='signup_footer'>
                      <p>Already on protekh?</p>
                      <Link to=''>Log In</Link>
                    </div>
                  </div>

                </section>
              </div>

            </form >

          )
          } */}


        </nav>

      </header>
      <Outlet />

          <Footer />
    </div>
  )
}

export default SharedLayout