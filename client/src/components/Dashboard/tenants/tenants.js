import React, { useEffect } from 'react';
import { useState } from 'react';
import Tenant from './tenant';


function Tenants() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch('/users')
    .then((r) => r.json())
    .then((data) => setUsers(data))
  }, []);

  return (
    // <div>
    //   <h3>Tenants</h3>
    // </div>
    <div className='table'>
      <h1 style={{fontFamily:"Montserrat",color:"#1A626D"}} className='text-center my-6'>Tenants</h1>
      <table className='w-11/12 shadow-2xl font-[Poppins]   mt-20 '>
        <thead className='bg-gray-50 border-b-2 border-dark-green'>
          <tr>
            <th className='p-3 text-white bg-dark-green text-sm font-semibold tracking-wide text-left'> Name</th>
            <th className='p-3 text-white bg-dark-green text-sm font-semibold tracking-wide text-left'> Contact</th>
            <th className='p-3 text-white bg-dark-green text-sm font-semibold tracking-wide text-left'> Location</th>
            <th className='p-3 text-white bg-dark-green text-sm font-semibold tracking-wide text-left'> Email</th>
          </tr>
        </thead>
        {users.map((user) =>
        <Tenant key={user.id} user={user}/>
        
        )}
      </table>
    </div>
  );
};

export default Tenants;