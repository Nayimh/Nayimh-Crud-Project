import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SingleCar.css'

const SingleCar = (props) => {
    const { name, desc, image, Price } = props.car;
    return (
        <div className="singleCar">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Title>${ Price }</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
  </Card.Body>
  
  <Card.Body>
    <NavLink to="/Details"><button className="btn">Purchase</button></NavLink>
  </Card.Body>
</Card>
        </div>
    );
};

export default SingleCar;