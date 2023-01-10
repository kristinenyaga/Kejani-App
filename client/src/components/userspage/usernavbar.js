import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom'
import "./usernav.css"
function UserNavbar({setUser}) {
const nav = useNavigate();
    function handleLogoutClick() {
      fetch("/logout", {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin":"no-cors",
          "Content-Type": "application/json",
        }
       }).then((r) => {
        if (r.ok) {
          // setUser(null);
          setUser(null)
          nav("/")
        }
      });
    }
  return (
    <>
    <Navbar variant="light">
      <Container className='display-flex'>
      <Navbar.Brand className='kejani'><i class="fa-solid fa-house-circle-check"></i>Kejani</Navbar.Brand>
        <Nav className="me-auto rightside" >
          <Nav.Link as={Link} to="/contact">contact us</Nav.Link>
          <button className='logoutBtn' onClick={handleLogoutClick}>
        Logout
      </button>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}
export default UserNavbar;