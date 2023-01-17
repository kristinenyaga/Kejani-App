function Tenant({user}) {
    return(
        <tbody className="divide-y divide-gray-100">
            <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700">{user.username}</td>
                <td className="p-3 text-sm text-gray-700">{user.phone_number}</td>
                <td className="p-3 text-sm text-gray-700">{user.location}</td>
                <td className="p-3 text-sm text-gray-700">{user.email}</td>
            </tr>
        </tbody>
    )
};
export default Tenant