import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { navLinks } from '../data/index.js'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavbarComponent = () => {
  const[changeColor, setChangeColor] = useState(false);

  const changeBgColor = () =>{
    if(window.scrollY > 10){
        setChangeColor(true);
    }else{
        setChangeColor(false);
    }
  }

  useEffect(() =>{
    changeBgColor();

    window.addEventListener('scroll', changeBgColor);
  })

  
  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand className='fs-3 fw-bold' href="#home">EatCode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map(data => {
                return( 
                    <div key={data.id}  className={"nav-link"}>
                        <NavLink to={data.path} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            } end>{data.text}
                        </NavLink>
                    </div>
                )
            })}
          </Nav>
          <div className='text-center'>
            <Button variant="outline-danger">Join Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent