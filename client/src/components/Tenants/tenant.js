function Tenant({clients}) {
    return(
        <tbody>
            <tr>
                <td>{clients.thumbnail}</td>
                <td>{tenant.name}</td>
                <td>{tenant.phonenumber}</td>
                <td>{tenant.email}</td>
                <td>{tenant.roomnumber}</td>
            </tr>
        </tbody>
    );
}
export default Tenant;