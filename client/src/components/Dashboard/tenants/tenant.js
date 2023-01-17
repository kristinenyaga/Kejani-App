function Tenant({user}) {
    return(
        <tbody>
            <tr>
                <td>{user.username}</td>
                <td>{user.phone_number}</td>
                <td>{user.location}</td>
                <td>{user.email}</td>
            </tr>
        </tbody>
    );
}
export default Tenant;