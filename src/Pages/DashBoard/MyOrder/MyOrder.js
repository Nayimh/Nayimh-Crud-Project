import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    
    
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://desolate-garden-12224.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders, user.email])

   
    
    
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://desolate-garden-12224.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.length);
                    if (data.deletedCount) {
                        const remaining = orders.filter((order) => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }




    return (
        <div >
            <h1 className="header"> Orders</h1>
            <div className="carcard">
                {
                orders.map(order => <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={order.img} />
                <Card.Body>
                        <Card.Title>Name: { order.name }</Card.Title>
                        
                  <Card.Text>
                    {order.desc}
                  </Card.Text>
                
                  <button onClick={() => handleDelete(order._id)} className="btn">Cancel</button>
                </Card.Body>
              </Card>)
                }
            </div>

        </div>
    );
};

export default MyOrder;