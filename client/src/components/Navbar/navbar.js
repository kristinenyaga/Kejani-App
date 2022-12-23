import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "./navbar.css"


function NavBar() {
  

  return (
    <div className='navbar'>
     
      <Navbar bg="rgb(27, 98, 110);" className='background' variant="light">
        <Container className='display-flex'>
          
          <Navbar.Brand className='kejani'><img src='../src/components/assets/ph_house-fill.jpg'></img>Kejani</Navbar.Brand>
          <Nav className="me-auto rightside" >
            <Nav.Link as={Link} className='auth' to="/login">Login</Nav.Link>
            <Nav.Link as={Link} className='auth' to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} className='auth' to="/contact us">Contact Us</Nav.Link>

            {/* <button className='logoutBtn'>
          Logout
        </button> */}

          </Nav>
       
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;