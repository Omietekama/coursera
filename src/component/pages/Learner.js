import React from 'react'
import { Link } from 'react-router-dom'
let url = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40'

const Learner = () => {
    return (
        <div className='learner'>
            <div>
                <img src={url} alt='' />
            </div>
            <div>
                <h1>Take the next step toward your personal and professional goals with Coursera.</h1>
                <p>Join now to receive personalized recommendations from the full Protekh catalog.</p>
                <section>
                    <button className='btn'>Sign Up</button>
                </section>
            </div>
            
        </div>
    )
}

export default Learner