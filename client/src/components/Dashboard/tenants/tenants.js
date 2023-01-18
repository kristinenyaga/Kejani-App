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
      <table className='w-full'>
        <thead className='bg-gray-50 border-b-2 border-gray-200'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'> Name</th>
            <th scope='p-3 text-sm font-semibold tracking-wide text-left'> Contact</th>
            <th scope='p-3 text-sm font-semibold tracking-wide text-left'> Location</th>
            <th scope='p-3 text-sm font-semibold tracking-wide text-left'> Email</th>
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