import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorCircle } from 'styled-icons/boxicons-regular/ErrorCircle';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StyledInput = styled.input`
    position: absolute;
    width: 180px;
    color: white;
    margin-left: 5px;
    margin-top: 5px;
    border: none;
    background: none;
    outline: none;
    border-bottom: 2px solid white;
`;

const StyledButton = styled(Button)`
    width: 36px;
    padding: 0;
    float: left;
    cursor: pointer;
.StyledIconBase-sc-bdy9j4{
    color: white;
}
`;

export default props => {
    const [isClick, setIsClick] = useState(false);

    let component = <Col md={{ span: 2, offset: 1 }}><Button variant="outline-light" onClick={() => {
        setIsClick(true)
    }}>SERCH STORY</Button></Col>;

    if (isClick) {
        component = <Col md={{ span: 2, offset: 1 }}>
            <StyledButton variant="outline-light" as='div' onClick={() => {
                setIsClick(false)
            }}><ErrorCircle />
            </StyledButton>
            <StyledInput /></Col>
    }
    return (
        component
    );
};