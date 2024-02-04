import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function InputBox(fields) {
    const [zipCode, setZipCode] = useState("");

    const handleSetZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Zip Code:", zipCode);
        // Add additional logic or send the zip code to the server as needed
    }

    return (
        <Form onSubmit={handleSubmit}>
            <br />
            <Form.Group className="mb-3">
                <Form.Label>{fields.zip}</Form.Label>
                <Form.Control
                    id="zip"
                    size="sm"
                    type="text"
                    value={zipCode}
                    onChange={handleSetZipCode}
                />
            </Form.Group>
            <input type="submit" value="Submit"></input>
        </Form>
    );
}

export default InputBox;
