import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../context/AuthProvider';
import './Header.css'

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
   const logoutHandle = ()=>{
    logOut();
   }
   const [theme, setTheme] = useState('light');
  const mode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
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
                    {
                    user?  <Link className='text-primary' onClick={logoutHandle}>Logout</Link>:<Link to="/login" className='text-primary'>Login</Link>
                    }
        <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode}/>
       </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;