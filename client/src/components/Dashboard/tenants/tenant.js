import React from 'react'


function Tenant({user}) {
    return(
        <tbody className="divide-y divide-gray-100 hover:scale-105 duration-300">
            <tr className="bg-gray-50 ">
                <td style={{fontFamily:"Montserrat"}} className="p-3 text-base  text-gray-700">{user.username}</td>
                <td style={{fontFamily:"Montserrat"}} className="p-3 text-base text-gray-700">{user.phone_number}</td>
                <td style={{fontFamily:"Montserrat"}}className="p-3 text-base text-gray-700">{user.location}</td>
                <td style={{fontFamily:"Montserrat"}}className="p-3 text-base text-gray-700">{user.email}</td>
            </tr>
        </tbody>
    )
};
export default Tenant