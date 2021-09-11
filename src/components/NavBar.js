import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const NavBar = () => {
    const handleClick = () => {
        window.location.reload();
    }
    return(
        <Navbar bg="dark" variant="dark" fixed="top" style={{color : 'white'}} >
            <Container>
                <strong>CONTACT LIST</strong>
                <Button className="primary" onClick={handleClick} >Refresh</Button>
            </Container>
        </Navbar>
    )
}
export default NavBar