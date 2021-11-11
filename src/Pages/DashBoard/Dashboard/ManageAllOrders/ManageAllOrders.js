import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
  
  
    const handleOrderDelete = (id) => {
      const proceed = window.confirm(
        "Are you sure?"
      );
      if (proceed) {
        const url = `https://desolate-garden-12224.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          });
      }
    };
  


    return (
        <div>
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
                
                  <button onClick={()=> handleOrderDelete(order._id)} className="btn">Delete</button>
                  
                </Card.Body>
              </Card>)
                }
            </div>
        </div>
    );
};


export default ManageAllOrders;


