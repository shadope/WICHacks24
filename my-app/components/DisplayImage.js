import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function DisplayImage({sc}) {
  return (
    
    <Container>
      <Row>
        <Col>
        
          <Image src={sc} rounded width = "50%"/>
        </Col>
      </Row>
    </Container>
  );
}

export default DisplayImage;