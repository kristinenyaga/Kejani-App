import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Inbox(){
   
const navigate = useNavigate();

return (
    <>
    <h1>Work on the inbox here</h1>

    <div><button onClick={()=>navigate('/sidebar')}>Back</button></div>
    </>
)
}

export default Inbox;