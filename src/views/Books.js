
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


const Books = () => {

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
                            <BooksTable booksData={booksData} />

                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Books;
