import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import booksData from "data/books.js"
import { useState } from "react/cjs/react.production.min";


const { useParams } = require("react-router-dom");



const Book = () => {

    let { id } = useParams();
    const book = booksData.find(b => b.id === parseInt(id));

    return (
        <>
            <Header />
            <Card className="card-profile shadow">

                <CardBody className="pt-0 pt-md-4">

                    <div className="text-center">
                        <h3>
                            {book.name}, {book.ISBN}
                            <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            {book.author}
                        </div>

                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            {book.term && `Term: ${book.term}`}

                        </div>


                        <hr className="my-4" />

                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {book.term ? 'Return' : 'Borrow'}
                        </a>
                    </div>
                </CardBody>
            </Card>
        </>);
}

export default Book