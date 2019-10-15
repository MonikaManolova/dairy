import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    background: #000;
    border-bottom-left-radius: 20px;
    border-bottom: 1px solid #696868;
    color: #696868;
    position: absolute;
    left: 15px;
    min-height: 30px;
    cursor: pointer;
`;

export default props => {
    return (
        <Row >
            <StyledCol
                onClick={props.save}
                md={{ span: 3, offset: 9 }}
                className="btn-save">{props.text}</StyledCol>
        </Row>
    )
};