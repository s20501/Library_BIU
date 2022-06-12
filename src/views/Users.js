
// reactstrap components
import {
    Card,
    CardHeader,
    Table,
    Container,
    Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import usersData from "data/users.js"
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {

    const [users] = useState(usersData);

    return (
        <>
            <Header />
            <Container className="mt--20" fluid>

                <Row className="mt--20">
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Users</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" >
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(b =>

                                        <tr>

                                            <td>
                                                <Link to={`/admin/user/${b.id}`}>{b.name}</Link>
                                            </td>
                                            <td>{b.email}</td>

                                        </tr>

                                    )}
                                </tbody>
                            </Table>

                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Users;
