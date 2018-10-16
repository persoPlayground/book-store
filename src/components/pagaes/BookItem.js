import React from 'react';
import {  Well, Col, Button, Row } from 'react-bootstrap';

 export default ({ id, title, description, price, addToCart, added }) => (
       
        <Well>
                <Row>
                    <Col xs={12} >
                        <h6>{title}</h6>
                        <p>{description}</p>
                        <h6>{price}</h6>
                        {added.indexOf(id) === -1 ? <Button bsStyle="primary" onClick={() => addToCart([{id, title, description, price, quantity: 1}])}>Add</Button> : 
                        <Button bsStyle="success" >Added</Button>
                    }
                        
                    </Col>
                </Row>
        </Well>
    );