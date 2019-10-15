import React from 'react';
import Col from 'react-bootstrap/Col';

const style = {
    border: "none",
    background: "black",
    borderRight: "1px solid #696868",
    borderTopLeftRadius: "30px",
    color: "#696868",
    fontSize: "20px",
    letterSpacing: "2px",
    outline: "none"
}

export default props => {

    return (
        <Col
            as="input"
            style={style}
            className="pt-5 pb-2"
            md={{ span: 6, offset: 6 }}
            placeholder="TITLE"
            onChange={props.onChange}
            defaultValue={props.value}></Col>
    );
};