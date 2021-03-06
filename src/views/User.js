import {
    Card,
    CardHeader,
    CardBody,

} from "reactstrap";
import Header from "components/Headers/Header.js";
import usersData from "data/users.js";
import { useMemo, useState } from "react";
import BooksTable from "components/Tables/BooksTable";
import booksData from "data/books.js"
import UserProfile from "components/Profils/UserProfile";

const { useParams } = require("react-router-dom");
const User = () => {

    let { id } = useParams();
    const [user] = useState(usersData.find(b => b.id === parseInt(id)));
    const booksFiltered = useMemo(() => booksData.filter(b => b.owner === user.name), [user.name]);

    return <>
        <Header />
        <Card className="card-profile shadow">

            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-end">

                </div>
            </CardHeader>

            <CardBody className="pt-0 pt-md-4">

                <div className="text-center">
                    <UserProfile user={user} />

                    <hr className="my-4" />
                </div>

                <p>Borrowed books:</p >
                <BooksTable booksData={booksFiltered} />
            </CardBody>
        </Card>
    </>;
}

export default User