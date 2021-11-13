import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Nav.css'
const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
  <Container>
  <Navbar.Brand href="/home"><span className="green">Uniquify -</span> <span className="tomato">X</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                
            
      <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/explore">Explore Cars</Nav.Link>   
      {user?.email && <Nav.Link as={HashLink} to="/dashBoard">DashBoard</Nav.Link>}
 
    </Nav>
    <Nav>
      
                
                            <Nav.Link eventKey={2}>
                            { user?.displayName ? user?.displayName : user?.email} 
                 
        {
                                    user?.email ?  <button onClick={logout} style={{color: 'white', background: 'tomato',  borderStyle: 'none' , marginLeft: '15px'}}>Logout</button>
                                        :
                                        <NavLink to="/login"><button style={{color: 'white', background: 'tomato', borderStyle: 'none', marginLeft: '15px'}} className="login">Login</button></NavLink>
        }                   
                   
                    
                </Nav.Link>
               
                        
                        </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;