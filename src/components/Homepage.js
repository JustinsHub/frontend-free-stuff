import React from 'react'
import MediaLogos from './MediaLogos'
import About from './About'
import SignUpNow from './SignUpNow'
import Client from './clientApi'
import './Homepage.css'


const Homepage = () => {
    //tell me more as homepage button and scrolls when click to about me
    //have components here?
    //how to scroll and have a modal popup 

    const registerClient = async (clientInfo) => {
        const res = await Client.registerClient(clientInfo)
        return res
    }

    return (
        <section>
            <section className="Homepage-bg container">
                <div className="text-center p-5" style={{marginTop: "7rem"}}>
                    <div className="m-5">
                        <h1>
                            You came to the right place! Want free stuff?
                        </h1>
                        <p className="container">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger m-3">How it works!</button>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="Homepage-bg container">
                <About/>
            </section>
            
            <section className="Homepage-bg">
                <MediaLogos/>
            </section>

            <section className="">
                <SignUpNow registerClient={registerClient}/>
            </section>

        </section>
    )
}

export default Homepage