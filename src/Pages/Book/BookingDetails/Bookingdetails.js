import React from 'react';
import { Card } from 'react-bootstrap';

const Bookingdetails = (props) => {
    const { name, desc, image, Price} = props.car;
    return (
        <div className="my-5 pt-5">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Title>${ Price }</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
  </Card.Body>
  
 
</Card>
        </div>
    );
};

export default Bookingdetails;