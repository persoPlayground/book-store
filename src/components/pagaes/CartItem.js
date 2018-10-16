import React from 'react';
import { Panel, Row, Col, Label, ButtonGroup, Button  } from 'react-bootstrap';

export default ({ id, title, price, delteFromCart, quantity }) => (
    <Panel>
        <Row>
            <Col xs={12} sm={4}>
                <h6>{title}</h6>
            </Col>
            <Col xs={12} sm={2}>
                <h6>{price}</h6>
            </Col>
            <Col xs={12} sm={2}>
                <h6><Label bsStyle="success">{quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
                <ButtonGroup style={{minWidth: '300px'}}>
                    <Button bsStyle="default" bsSize="small">-</Button>
                    <Button bsStyle="default" bsSize="small">+</Button>{' '}
                    <Button bsStyle="danger" bsSize="small" onClick={() => delteFromCart([{id}])}>Delete</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </Panel>
)