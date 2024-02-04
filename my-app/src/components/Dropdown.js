import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Dropdown({ field, one, two, three, four, five }) {
    const [drop, setDrop] = useState("");

    const handleSetDrop = (e) => {
        const selectedValue = e.target.value;
        setDrop(selectedValue);

        // Use the selectedValue directly instead of drop, as drop might not have been updated yet.
        console.log("Drop:", selectedValue);
    };

    return (
        <Form className="row g-3">
            <div className="input-group mb-3">
            <div class = "row m-3">
                <br />
                <select className="custom-select" id="inputGroupSelect02" onChange={handleSetDrop}>
                    <option selected>{field}</option>
                    <option value="1">{one}</option>
                    <option value="2">{two}</option>
                    <option value="3">{three}</option>
                    <option value="4">{four}</option>
                    <option value="5">{five}</option>
                </select>
            </div>
            </div>
        </Form>
    );
}

export default Dropdown;
