import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Ratings.css'

const Ratings = () => {
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch('https://desolate-garden-12224.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    useEffect(() => {
        fetch('')
    }
    , [])


    return (
        <div className="ratingContainer">
            <h1 className="header">What Our Clients say</h1>
            <div className="carcard">
                {
                    reviews.map(review => <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={review.image} />
                    <Card.Body>
                      <Card.Title>Name: {review.name} </Card.Title>
                      <Card.Title>Ratings: {review.star} </Card.Title>
                      <Card.Text>
                        Review: {review.desc}
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>)
                }
                </div>
        </div>
    );
};

export default Ratings;