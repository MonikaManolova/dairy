import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import image from '../../images/reader.png';
import Full from './Full';
import { Link } from 'react-router-dom';

const StyledImage = styled(Card.Img)`
position: absolute;
    left: 45%;
    top: 130px;
    width: 55%;
    height: 360px;
`;

const StyledRow = styled(Row)`
margin-top: 10%;
.main-row .main-col{
border-left: 5px solid black;
}
.main-col{
    /* background: red; */
}
.main-col p{
    font-size: 22px;
    text-align: center;
    color: #747474;
}
.main-col button{
    border: none;
    outline: none;
    background: rgba(0,0,0,0.3);
    color: white;
    padding: 10px;
    font-size: 20px;
}
`;

export default props => {
    let component = null;

    if (props.isEmpty === 0) {
        component = <>
            <StyledImage src={image} alt="Card image" />
            <Card.ImgOverlay>
                <StyledRow className="  main-row">
                    <Col md={{ span: 3, offset: 4 }} className="main-col">
                        <Row className="justify-content-md-center" >
                            <p>You haven't stories yet</p>
                        </Row>
                        <Row className="justify-content-md-center" >
                            <Link to="/write">
                                <button>Add your first story</button>
                            </Link>
                        </Row>
                        <Row>
                        </Row>
                    </Col>
                </StyledRow>
            </Card.ImgOverlay>
        </>
    }
    if (props.stories && props.isEmpty !== 0) {
        component = <Full
            stories={props.stories}
            deleteClick={props.deleteClick}
            showStory={props.showStory} />
    }

    return (
        component
    )
};