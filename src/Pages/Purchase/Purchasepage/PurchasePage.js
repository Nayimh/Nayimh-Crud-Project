import React, { useEffect, useState } from 'react';
import SinglePurchase from '../SinglePurchase/SinglePurchase';

const PurchasePage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/exploreCars')
            .then(res => res.json())
            .then(data => setCars(data))
    } ,[])

    return (
        <div className="my-2 py-5">
            <h3 className="header">Trending content near you {cars.length}</h3>
            <div className="carcard">
               
               {
                   cars.map(car => <SinglePurchase
                       key={car.id}
                       car={car}
                   >

                   </SinglePurchase>)
               }
           
       </div>

        </div>
    );
};

export default PurchasePage;