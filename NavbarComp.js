import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/logo/download.png'
import LoginRegister from './LoginRegister';
import { BsFillCartCheckFill } from "react-icons/bs";


const NavbarComp = () => {
  

  return (
    <>
    <header style={{ position: "sticky", top: 0, zIndex: 1111 }}>
    <Navbar sticky='top'  collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: '#1b75bc'}}>
        <Container>
            <Navbar.Brand className='topNav' as={Link} to="/">GET YOUR CORPORATE DEALS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto myNav">
                    <Nav.Link as={NavLink} to="/blog">BLOG</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">ABOUT US</Nav.Link>
                    <Nav.Link as={NavLink} to="/story">OUR STORY</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
                    <Nav.Link as={NavLink} to="/covid">COVID-19</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>   

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logoImg" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 secondNav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="MEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="KIDS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="COMBOS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="MOBILE COVER" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="KEY CHAIN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="MUG" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>


        <LoginRegister />
        <BsFillCartCheckFill style={{ fontSize: "30px" }} />

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
  )
}

export default NavbarComp
