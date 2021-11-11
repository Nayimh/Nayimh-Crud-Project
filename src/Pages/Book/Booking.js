import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'


const Booking = () => {
    const { carId } = useParams();
    const { user } = useAuth();
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/exploreCars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    
    useEffect(() => {
        const findcars = cars.find(car => car._id === carId)
        setCar(findcars);
        
    }, [carId, cars])
    

    // form functionality
const handleOrderSubmit = (e) => {
    const email = user.email;
    const carId = car?.carId;
    const name = car.name;
    const img = car.image;
    const desc = car.desc;
    const price = car.Price;
    const ordersInfo = { email, carId, name, desc, img, price };

    fetch("https://desolate-garden-12224.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ordersInfo),
    });
    alert("Order has been placed successfully");

    e.target.reset();
    e.preventDefault();
  };




    return (
    <div className="pt-5 my-5 bookingContainer">
        
        <h1>car id : {carId}</h1>
            <h2 className="header">Purchase your Dream Car : { car?.name }</h2>
        <div className="carDetails">
               
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={car?.image} />
<Card.Body>
                <Card.Title>Name: { car?.name }</Card.Title>
                <Card.Title>Price ${ car?.Price }</Card.Title>
<Card.Text>
    {car?.desc}
</Card.Text>
</Card.Body>

 
</Card>
    
            </div>
            {/* -------------- */}
            <div>
          <form onSubmit={handleOrderSubmit}>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              defaultValue={user?.displayName || ""}
            />
            <input
              type="email"
              className="w-75 my-2 p-1"
              name=""
              id=""
              defaultValue={user?.email || ""}
            />
            <input
              type="number"
              className="w-75 my-2 p-1"
              name=""
              id=""
              placeholder="Your Phone Number"
            />

            <textarea
              name=""
              placeholder="Home Address"
              id=""
              className="w-75"
              required
            ></textarea>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              required
              placeholder="City, Country"
            />
            <input
              className="w-75 btn-danger border-0 p-2 my-2 rounded-1"
              type="submit"
              value="Purchase"
            />
          </form>
        </div>
            
        </div>
    );
};  

export default Booking;