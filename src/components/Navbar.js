import React from 'react'
import { Container, Navbar as FreeStuffNavbar } from 'react-bootstrap'

const Navbar = () => {
    return (
        <div className="mb-5">
            <FreeStuffNavbar bg="dark" expand="lg">
                <Container>
                    <FreeStuffNavbar.Brand href="#home" style={{color: "white"}}>FreeStuff.com</FreeStuffNavbar.Brand>
                    <FreeStuffNavbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </FreeStuffNavbar>
        </div>
    )
}

export default Navbar