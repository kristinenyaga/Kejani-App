import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css"


function NavBar() {
  const nav = useNavigate();
  function handleClick() {
    nav('/signup')

  }

  function click() {
    nav('/contact')

  }
  return (
    <div className='navbar'>

      <Navbar className='navbar-background' variant="light">
        <Container className='display-flex'>

          <Navbar.Brand className='kejani'><i class="fa-solid fa-house-circle-check"></i>Kejani</Navbar.Brand>
          <Nav className="me-auto rightside" >
            <Nav.Link as={Link} className='auth' to="/login">Login</Nav.Link>
            {/* <Nav.Link as={Link} className='auth' to="/">Kejani</Nav.Link> */}
            <Nav.Link as={Link} className='auth' to="/signup" onClick={handleClick}>Signup</Nav.Link>
            <Nav.Link as={Link} className='auth' to="/contact" onClick={click}>Contact Us</Nav.Link>

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