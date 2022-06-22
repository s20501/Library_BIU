
// reactstrap components
import {
    Card,
    CardHeader,
    Container,
    Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import usersData from "data/users.js"
import { useState } from "react";
import UsersTable from "components/Tables/UsersTable";

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
                            <UsersTable users={users} />

                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Users;
