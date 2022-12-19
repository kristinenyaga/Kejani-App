import React from 'react'
import { NavLink } from 'react-router-dom';
function NavBar(props) {

    const user=props.user 
    const setUser=props.setUser
   
   
       function handleLogoutClick() {
           fetch("/logout", { method: "DELETE" }).then((r) => {
             if (r.ok) {
               setUser(null);
             }
           });
         }    
   
       return (
           <div id='navs'>
            
               <>
               
               <NavLink to='/' >Home</NavLink>
              
               
               </>
                
               <div>
           {user ? (
             <button onClick={handleLogoutClick} className= 'lgout'>Logout</button>
           ) : (
             <div id= 'lgout1'>
               <NavLink to='/signup' className= 'lout' >Signup</NavLink>
               <NavLink to='/login' className= 'lout' >Login</NavLink>
              
             </div>
           )}
              </div>
           
           </div>
       )
   }
   
   export default NavBar;