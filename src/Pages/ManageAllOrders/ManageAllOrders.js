import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    } ,[])


    return (
        <div className="mt-2 py-5">
            <h1 className="header">Manage All Orders : { orders.length }</h1>
            <div className="carcard mb-5">
                
                {
                    
                orders.map(order => <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={order.img} />
                <Card.Body>
                        <Card.Title>Name: { order.name }</Card.Title>
                  <Card.Text>
                    {order.desc}
                  </Card.Text>
                
                  <button  className="btn">Cancel</button>
                </Card.Body>
              </Card>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;