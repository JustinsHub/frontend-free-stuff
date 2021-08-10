import React from 'react'
import About from './About'
import SignUpNow from './SignUpNow'
import InputEmail from './InputEmail'

const Homepage = () => {
    //tell me more as homepage button and scrolls when click to about me
    //have components here?
    //how to scroll and have a modal popup 
    return (
        <section>
            <div>
                You came to the right place! Want free stuff?
                <p>What is free stuff?</p>
                <p>How can you get a chance to get something for free?</p>
                <button className="btn btn-danger">Sign Up Now to get your FREE stuff</button>
            </div>
            <section>
                <About/>
            </section>
            <section>
                <SignUpNow/>
            </section>
            <section>
                <InputEmail/>
            </section>
        </section>
    )
}

export default Homepage