import React from 'react'
import {Navbar} from 'react-bootstrap'

const MediaLogos = () => {
    //grid container on logos that trust this website MOCK
    //make this like a navbar and have the logos gray
    return (
        <div className="mt-5 mb-5">
            <Navbar style={{height: '10rem', backgroundColor: 'gray'}}>
                Logos here
            </Navbar>
        </div>
    )
}

export default MediaLogos