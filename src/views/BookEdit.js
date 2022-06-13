import Header from "components/Headers/Header.js";
const { useParams } = require("react-router-dom");



const BookEdit = () => {

    let { id } = useParams();
    return (
        <>
            <Header /> Edit {id}

        </>);
}

export default BookEdit