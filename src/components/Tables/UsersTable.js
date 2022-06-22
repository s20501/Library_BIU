import {
    Table,
} from "reactstrap";
import { Link } from "react-router-dom";

const UsersTable = (props) => {


    return (<>

        <Table className="align-items-center table-flush" >
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(b =>

                    <tr>

                        <td>
                            <Link to={`/admin/user/${b.id}`}>{b.name}</Link>
                        </td>
                        <td>{b.email}</td>

                    </tr>

                )}
            </tbody>
        </Table>


    </>)
}

export default UsersTable