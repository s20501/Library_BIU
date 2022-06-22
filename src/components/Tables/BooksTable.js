import {

    Table,
} from "reactstrap";
import { Link } from "react-router-dom";


const { useState } = require("react");


const BooksTable = (props) => {

    const [books] = useState(props.booksData);

    return (<>

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

    </>)
}

export default BooksTable