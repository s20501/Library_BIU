import Header from "components/Headers/Header.js";
import { useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
import booksData from "data/books.js";

const { useParams } = require("react-router-dom");



const BookEdit = () => {

    let { id } = useParams();
    const [book] = useState(booksData.find(b => b.id === parseInt(id)) || {});

    function handleSubmit(event) {
        alert('Book saved!');
        event.preventDefault();
    }

    return (
        <>
            <Header />
            <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                        <Col xs="8">
                            <h3 className="mb-0">Book</h3>
                        </Col>

                    </Row>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <div className="pl-lg-4">
                            <Row>
                                <Col lg="6">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                        >
                                            Name
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            defaultValue={book.name}
                                            placeholder="Name"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                        >
                                            Author
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            defaultValue={book.author}
                                            placeholder="Author"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6">
                                    <FormGroup>
                                        <label
                                            className="form-control-label"
                                        >
                                            ISBN
                                        </label>
                                        <Input
                                            className="form-control-alternative"
                                            defaultValue={book.ISBN}
                                            placeholder="ISBN"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row><Col>
                                <Button
                                    color="primary"
                                    size="sm"
                                    type="submit"
                                >
                                    Save
                                </Button></Col></Row>
                        </div>

                    </Form>
                </CardBody>
            </Card>

        </>);
}

export default BookEdit