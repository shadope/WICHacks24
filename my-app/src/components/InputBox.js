import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './style.css';

function InputBox({ qfields, handleZipCode }) {
  const [zipCode, setZipCode] = useState("");
  const [weatherResponse, setWeatherResponse] = useState(null);
  const [clothesData, setClothesData] = useState(null);

 

  const handleSetZipCode = (e) => {
    setZipCode(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Zip Code:", e);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <Form.Group className="mb-3 col-1 ">
        <div className="row m-3">
        <Form.Label className="feature-text">Zip Code</Form.Label>  
          <Form.Control
            id="zip"
            size="sm"
            type="text"
            value={zipCode}
            onChange={handleSetZipCode}
          />
        </div>
      </Form.Group>
      <div className="col-1">
        <div className="row m-3">
          <input type="submit" value="Submit" />
          <br />
          <br />
        </div>
      </div>
    </Form>
  );
}

export default InputBox;
