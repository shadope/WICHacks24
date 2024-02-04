import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './style.css'

function InputBox(fields) {
    const [zipCode, setZipCode] = useState("");
    const [weatherResponse, setWeatherResponse] = useState(null);
    const [clothesData, setClothesData] = useState(null);

    useEffect(() => {
        console.log(weatherResponse);

    }, [weatherResponse]);

    const handleSetZipCode = (e) => {
        setZipCode(e.target.value);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Zip Code:", zipCode);

        fetch(`http://api.weatherapi.com/v1/forecast.json?key=ceb4db99cfc5455fa0634034240402&q=${zipCode}&days=2&aqi=no&alerts=no`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            setWeatherResponse(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
    }

    return (
        <Form onSubmit={handleSubmit} >
            <br />
            <Form.Group className="mb-3 col-1 ">
                <div class = "row m-3">
                <Form.Label className = "feature-text">{fields.zip}</Form.Label>
                <Form.Control
                    id="zip"
                    size="sm"
                    type="text"
                    value={zipCode}
                    onChange={handleSetZipCode}
                    
                />
                </div>
            </Form.Group>
            <div class = "col-1">
            <div class = "row m-3">
            <input type="submit" value="Submit"></input>
            <br/>
            <br/>
            </div>
            </div>
        </Form>
    );
}

export default InputBox;