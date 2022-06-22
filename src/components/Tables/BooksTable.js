import {
    Table,
} from "reactstrap";
import { Link } from "react-router-dom";

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

                    <tr key={b.ISBN}>

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