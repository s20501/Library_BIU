import { Link } from "react-router-dom";

const UserRow = (props) => {
    return (<>
        <tr>
            <td>
                <Link to={`/admin/user/${props.row.id}`}>{props.row.name}</Link>
            </td>
            <td>{props.row.email}</td>

        </tr>

    </>)
}

export default UserRow