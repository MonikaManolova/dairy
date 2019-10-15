import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const style = {
    padding: "0px"
}
const StyledImg = styled.img`
width: 100%;
height: 40px;
object-fit: cover;
cursor: pointer;
`;

export default props => {

    return (
        <Card >
            <ListGroup variant="flush">
                {props.themes.map((theme, index) => (
                    <ListGroup.Item style={style}
                        key={index}
                        onClick={() => props.chooseTheme(index)}>
                        <StyledImg src={theme} alt="first" />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};