import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaYoutube, FaInstagramSquare } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className='footer'>
                <div>
                    <p><span>&copy;</span> 2022 Protekh Inc. All rights reserved.</p>
                </div>

                <section>
                    <IconContext.Provider value={{ color: 'black', size: 28 }}>
                        <ul>
                            <li> <Link to='#'><FaFacebook /></Link></li>
                            <li><Link to='#'><FaLinkedin /></Link></li>
                            <li><Link to='#'><FaTwitterSquare /></Link></li>
                            <li><Link to='#'><FaYoutube /></Link></li>
                            <li><Link to='#'><FaInstagramSquare /></Link></li>
                        </ul>
                    </IconContext.Provider>


                </section>
            </div>
        </footer>
    )
}

export default Footer