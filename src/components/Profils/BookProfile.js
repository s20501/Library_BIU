const BookProfile = (props) => {
    return (
        <>
            <h3>
                {props.book.name}, {props.book.ISBN}
                <span className="font-weight-light"></span>
            </h3>
            <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                Author: {props.book.author}
            </div>

            <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {props.book.term && `Term: ${props.book.term}`}

            </div>

            <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {props.book.owner && `Owner: ${props.book.owner}`}
            </div>

        </>);
}

export default BookProfile