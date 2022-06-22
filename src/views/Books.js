
// reactstrap components
import {
    Card,
    CardHeader,
    Container,
    Row,
    Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import booksData from "data/books.js"
import { useHistory } from "react-router-dom";
import BooksTable from "components/Tables/BooksTable";
import SearchBox from "components/SearchBox";
import { useState } from "react";


const Books = () => {
    const [books, setBooks] = useState(booksData);

    const history = useHistory();


    function handeSetData(data) {
        setBooks(booksData.filter(b => (b.name.trim().toLowerCase()).includes(data.trim().toLowerCase())))
    }



    return (
        <>
            <Header />
            <Container className="mt--20" fluid>

                <Row className="mt--20">
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Books</h3>

                                <Button
                                    color="primary"
                                    size="sm"
                                    className="float-right"
                                    onClick={() => history.push(`/admin/bookEdit/new`)}

                                >
                                    Add new
                                </Button>

                            </CardHeader>
                            <SearchBox setData={handeSetData} />

                            <BooksTable booksData={books} />

                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Books;
