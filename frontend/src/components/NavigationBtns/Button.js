import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const Btn = props => {
    return (
        <Col md={{ span: 2, offset: 1 }}>
            <NavLink exact activeClassName="active" to={props.link}>
                <Button variant="outline-light" onClick={props.click}>{props.text}</Button>
            </NavLink>
        </Col>
    );
};

export default Btn;