import {
    Table,
} from "reactstrap";
import BookRow from "./BookRow";

const BooksTable = (props) => {
    return (<>

        <Table className="align-items-center table-flush" >
            <thead className="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">ISBN</th>
                </tr>
            </thead>
            <tbody>
                {props.booksData.map(b =>
                    <BookRow row={b} />
                )}
            </tbody>
        </Table>

    </>)
}

export default BooksTable