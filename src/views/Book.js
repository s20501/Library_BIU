const { useParams } = require("react-router-dom");

const Book = () => {

    let { id } = useParams();
    return <h3>Requested book ID: {id}</h3>;
}

export default Book