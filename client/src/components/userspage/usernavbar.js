import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/user';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';


function UserNav() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()
  function handleLogout(){
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate('/')
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" style={{color:"#1A626D",fontSize:"40px",fontFamily: 'Montserrat'}}><i class="fa-solid fa-house-circle-check"></i>Kejani</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-xl'>
            Signed in as: <a href="#login">{user.username}</a>
          </Navbar.Text>
          <Button  onClick={handleLogout} style={{backgroundColor:"#1A626D",color:"white",fontFamily: 'Montserrat'}} variant="outline-success" className='w-24 mr-1.5 h-9 text-center leading-2 pb-0.5'>Log Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNav;