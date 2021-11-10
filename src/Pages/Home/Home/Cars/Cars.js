
import React, { useEffect, useState } from 'react';

import SingleCar from '../SingleCar/SingleCar';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setCars(data))
    } ,[])

    return (
        <div className="   carsContainer">
            <h1 className="header">OURS CARS COLLECTIONS {cars.length}</h1>
            <div className="carcard">
               
                    {
                        cars.map(car => <SingleCar
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