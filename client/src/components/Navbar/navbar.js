import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import "./navbar.css"


function NavBar() {
  

  return (
    < div className='navbar'>
     
      <Navbar bg="light" className='background' variant="light">
        <Container className='display-flex'>
          <Navbar.Brand className='kejani'>Kejani</Navbar.Brand>
          <Nav className="me-auto rightside" >
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
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