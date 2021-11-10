
import React, { useEffect, useState } from 'react';

import SingleCar from '../SingleCar/SingleCar';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/exploreCars')
            .then(res => res.json())
            .then(data => setCars(data))
    } ,[])

    return (
        <div className="   carsContainer">
            <h1 className="header">OURS CARS COLLECTIONS </h1>
            <div className="carcard">
               
                    {
                        cars.slice(0,6).map(car => <SingleCar
                            key={car.id}
                            car={car}
                        >

                        </SingleCar>)
                    }
                
            </div>
        </div>
    );
};

export default Cars;