import { useEffect } from "react";
// import UserNav from "../userspage/usernavbar";
import Tenant from "./tenant";

function Tenants() {
    const [users,setUsers] = useEffect(null)

    useEffect(() =>{
        fetch('/users')
        .then((r) => r.json())
        .then((data) => setUsers(data));
    }, []);

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th scope="col">User name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email Address</th>
                <th scope="col">Location</th>
                </tr>
            </thead>
            {users.map((user) =>
            <Tenant key={user.id} user={user}/>
            )}
        </table>
    )
}
export default Tenants;