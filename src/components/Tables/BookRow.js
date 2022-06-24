import { Link } from "react-router-dom";

const BookRow = (props) => {


    return (<>
        <tr key={props.row.ISBN}>
            <td>
                <Link to={`/admin/book/${props.row.id}`}>{props.row.name}</Link>
            </td>
            <td>{props.row.ISBN}</td>

        </tr>

    </>)
}

export default BookRow