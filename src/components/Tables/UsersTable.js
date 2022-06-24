import {
    Table,
} from "reactstrap";
import UserRow from "./UserRow";

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
                {props.users.map(u =>
                    <UserRow row={u} />
                )}
            </tbody>
        </Table>


    </>)
}

export default UsersTable