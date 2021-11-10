import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Nav.css'
const Navigation = () => {
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
      <Nav.Link as={HashLink} to="/purchase">Purchase</Nav.Link>
   
      <Nav.Link as={HashLink} to="/dashboard">DashBoard</Nav.Link>
 
    </Nav>
    <Nav>
      
                
      <Nav.Link eventKey={2}>Signed in as:   
                 
                   user
                    {/* { user?.displayName ? user?.displayName : user?.email}   */}
                </Nav.Link>
                {/* {user?.email &&
                  <Nav.Link as={HashLink} to="/Login"><button onClick={logOut} className="btn-warning text-black">Logout</button></Nav.Link>} */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;