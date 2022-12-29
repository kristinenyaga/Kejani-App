import { useEffect } from "react";
import Tenant from "./tenant";

function Tenants() {
    const [clients,setClients] = useEffect(null)

    useEffect(() =>{
        fetch('')
        .then((r) => r.json())
        .then((data) => setClients(data));
    }, []);

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th scope="col">Thumbnail</th>
                <th scope="col">name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email Address</th>
                <th scope="col">Room number</th>
                </tr>
            </thead>
            {clients.map((client) =>
            <Tenant key={client.id} client={client}/>
            )}
        </table>
    )
}
export default Tenants;