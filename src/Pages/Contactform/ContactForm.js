
import React from 'react';
import { Form } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div id="contact" className="my-5 bg-secondary p-2">
            <h4 className="text-white ">Contact Us</h4>
            <Form className="w-75 mx-auto my-5 ">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="text-white">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="text-white">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
                
  <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
 <br />
  <button className="btn">Submit</button>
</Form>
        </div>
    );
};

export default ContactForm;