const UserProfile = (props) => {
    return (
        <>
            <h3>
                {props.user.name}
                <span className="font-weight-light"></span>
            </h3>
            <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />
                {props.user.email}
            </div>

        </>);
}

export default UserProfile