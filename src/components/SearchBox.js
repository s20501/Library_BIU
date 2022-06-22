import { useState } from "react";
import { Form, Input, InputGroup } from "reactstrap"

const SearchBox = (props) => {

    const [search, setSearch] = useState("");

    function handleSearchChange(e) {
        setSearch(e.target.value)
        props.setData(e.target.value);
    }
    return (<>

        <Form className="mb-3 mx-3">
            <InputGroup className="input-group-rounded input-group-merge">
                <Input
                    aria-label="Search"
                    className="form-control-rounded form-control-prepended"
                    placeholder="Search"
                    type="search"
                    bsSize="sm"
                    value={search}
                    onChange={handleSearchChange}
                />
            </InputGroup>
        </Form>

    </>)
}

export default SearchBox