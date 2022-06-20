
// reactstrap components
import {
    Card,
    CardHeader,
    Table,
    Container,
    Row,
    Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import booksData from "data/books.js"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Books = () => {

    const [books] = useState(booksData);
    const history = useHistory();

    return (
        <>
            <Header />
            <Container className="mt--20" fluid>

                <Row className="mt--20">
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Add new</h3>
                                <Button
                                    color="primary"
                                    size="sm"
                                    className="float-right"
                                    onClick={() => history.push(`/admin/bookEdit/new`)}

                                >
                                    Add new
                                </Button>
                            </CardHeader>
                            <Table className="align-items-center table-flush" >
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">ISBN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(b =>

                                        <tr>

                                            <td>
                                                <Link to={`/admin/book/${b.id}`}>{b.name}</Link>
                                            </td>
                                            <td>{b.ISBN}</td>

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

export default Books;
