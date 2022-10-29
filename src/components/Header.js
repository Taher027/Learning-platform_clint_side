import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container >
                <Navbar.Brand className='App-logo' alt='logo'>
                    <Link to='/'><img src={logo} /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/courses" className='text-primary'>Courses</Link>
                        <Link to="/faq" className='text-primary'>FAQ</Link>
                        <Link to="/blog" className='text-primary'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Link to="/login" className='text-primary'>Login</Link>
                        <Link eventKey={2} to="/memes" className='text-primary'>
                          Dark theme
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;