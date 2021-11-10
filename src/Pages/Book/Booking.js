import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Booking.css'
import Bookingdetails from './BookingDetails/Bookingdetails';

const Booking = () => {
    const { carId } = useParams();
    
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setCars(data.length))
    } ,[])


    return (
        <div className="pt-5 my-5 bookingContainer">
           
            <h1>car id : {carId}</h1>
            <div className="carcard">
               
                    {
                        cars.map(car => <Bookingdetails
                            key={car.id}
                            car={car}
                        >

                        </Bookingdetails>)
                    }
                
            </div>
            
        </div>
    );
};  

export default Booking;