import {
    Button,
    Card,
    CardHeader,
    CardBody,

} from "reactstrap";
import Header from "components/Headers/Header.js";
import booksData from "data/books.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";




const { useParams } = require("react-router-dom");



const Book = () => {

    let { id } = useParams();
    const [book, setBook] = useState(booksData.find(b => b.id === parseInt(id)));
    const history = useHistory();

    function bookChangeStatus(e) {
        e.preventDefault()
        if (book.term) {
            setBook({ ...book, term: '' })
            return
        }

        const userName = prompt("Provide user name");

        setBook({
            ...book,
            term: dayjs().add(14, 'day').format("DD-MM-YYYY"),
            owner: userName

        })

    }

    return (
        <>
            <Header />
            <Card className="card-profile shadow">

                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-end">

                        <Button
                            className="float-right"
                            color="default"
                            onClick={() => history.push(`/admin/bookEdit/${id}`)}
                            size="sm"
                        >
                            Edit
                        </Button>
                    </div>
                </CardHeader>

                <CardBody className="pt-0 pt-md-4">

                    <div className="text-center">
                        <h3>
                            {book.name}, {book.ISBN}
                            <span className="font-weight-light"></span>
                        </h3>
                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            Author: {book.author}
                        </div>

                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            {book.term && `Term: ${book.term}`}

                        </div>

                        <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            {book.owner && `Owner: ${book.owner}`}
                        </div>

                        <hr className="my-4" />

                        <a href="#pablo" onClick={bookChangeStatus}>
                            {book.term ? 'Return' : 'Borrow'}
                        </a>
                    </div>
                </CardBody>
            </Card>
        </>);
}

export default Book