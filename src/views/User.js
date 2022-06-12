const { useParams } = require("react-router-dom");

const User = () => {

    let { id } = useParams();
    return <h3>Requested user ID: {id}</h3>;
}

export default User