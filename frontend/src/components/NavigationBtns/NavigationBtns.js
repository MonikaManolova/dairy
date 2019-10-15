import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Button from './Button';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Serch from './ChangeBtn';
import Col from 'react-bootstrap/Col';

const StyledContainer = styled(Container)`
margin-bottom: 4%;
@media (min-width: 576px){
    padding-top: 2%;
}
.active .btn-outline-light{
    color: #000;
    border: 2px solid #000;
    box-shadow: none; 
}
.active .btn-outline-light:hover{
    background:  rgba(000,000,000,.5);
}
`;


const NavButtons = props => {
    // const [isClick, setIsClick] = useState(false);
    // let component = <div onClick={() => { setIsClick(!isClick) }}>Hello</div>;
    // if (isClick) { component = <div><ErrorCircle /></div> }

    return (
        <StyledContainer>
            <Row className="justify-content-md-center">
                <Button link="/all-stories" text="SEE ALL STORIES" />
                <Button link="/write" text="WRITE A STORY" />
                {/* <Button link="/serch" text="" className="serch-btn" text="heelo"></Button> */}
                <Serch />
            </Row>
        </StyledContainer>
    );
};

export default NavButtons;