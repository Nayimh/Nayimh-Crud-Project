import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';


const ManageAllProducts = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/exploreCars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const handleCarDelete = (id) => {
        const proceed = window.confirm("Are you sure wanna delete this car?");
        if (proceed) {
          const url = `https://desolate-garden-12224.herokuapp.com/exploreCars/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const remaining = cars.filter((car) => car._id !== id);
                setCars(remaining);
              }
            });
        }
      };



    return (
        <div className="my-2 py-5">
            <h3 className="header">Manage All Cars {cars.length}</h3>
            <div className="carcard">
               
                {
                    cars.map(car=> <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={car.image} />
                    <Card.Body>
                            <Card.Title>Name: { car.name }</Card.Title>
                      <Card.Text>
                                { car.desc}
                      </Card.Text>
                      <button onClick={()=>handleCarDelete(car._id)} className="btn">Delete</button>
                    </Card.Body>
                  </Card>)
               }
           
       </div>

        </div>
    );
};

export default ManageAllProducts;




