import React, {useEffect, useState} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Logout({user, setUser}){
const navigate = useNavigate()
   

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate('/')
          }
        });
      }    

    return(
        <>
        
          <button onClick={handleLogoutClick} >Logout</button>
        
        </>
    )
}

export default Logout;