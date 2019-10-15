import React from 'react';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import Icons from './icons/icons';

const StyledRow = styled(Row)`
margin-right: 0;
 `;

export default props => {

    return (
        <StyledRow className="justify-content-md-center">
            <Icons
                style={props.style}
                clearClick={props.clearClick}
                isChangeSIzeIsCLicked={props.isChangeSIzeIsCLicked}
                clickUp={props.clickUp}
                clickDown={props.clickDown}
                size={props.size}
                changeSize={props.changeSize}
                handleChange={props.handleChange}
                color={props.color}
                chooseTheme={props.chooseTheme}
                themes={props.themes}
            />
            {props.children}
        </StyledRow>
    )
}