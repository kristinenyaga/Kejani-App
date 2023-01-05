import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Logout({user, setUser}){

    // const [user, setUser] = useState(null)

    // useEffect(() => {
    //     fetch("/me").then((r) => {
    //       if (r.ok) {
    //         r.json().then((user) => setUser(user));
    //       }
    //     });
    //   }, []);

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }    

    return(
        <>
        {user ? (
          <button onClick={handleLogoutClick} >Logout</button>
        ) : (
          <div >
            <Nav.Link as={Link} className='auth' to="/login">Login</Nav.Link>
            <Nav.Link as={Link} className='auth' to="/signup">Signup</Nav.Link>
            
          </div>
        )}
        </>
    )
}

export default Logout;