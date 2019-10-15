import React from 'react';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const StyledTextarea = styled(Row)`
background: none;
border: none; 
outline: none; 
margin: 0; 
width: 100%;
resize: none;
overflow:hidden;
height: 400px;
font-weight: 100;
::placeholder{
    font-size: 20px;
}
`;

export default props => (
    <StyledTextarea
        as="textarea"
        rows="13"
        placeholder="Start writing..."
        defaultValue={props.value}
        onChange={props.onChange}
        style={props.style}>
    </StyledTextarea>
)