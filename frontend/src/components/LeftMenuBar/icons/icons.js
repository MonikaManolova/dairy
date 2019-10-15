import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { TextSize } from 'styled-icons/octicons/TextSize';
import { Delete } from 'styled-icons/feather/Delete';
import { BorderColor } from 'styled-icons/material/BorderColor';
import { ColorFill } from 'styled-icons/boxicons-solid/ColorFill';
import { ImageAdd } from 'styled-icons/boxicons-regular/ImageAdd';
import HoverOrCLick from './HoverOrClick';
import './icons.css';

export default props => {

    return (
        <Col md={1} style={props.style}>
            <Row className="justify-content-md-center rw">
                <OverlayTrigger
                    placement='right'
                    overlay={
                        <Tooltip bsPrefix="tooltip" id="tooltip-right">
                            Clear all text.
                    </Tooltip>
                    }>
                    <Delete className="icon" onClick={props.clearClick} />
                </OverlayTrigger>
            </Row>

            <Row className="justify-content-md-center rw" >
                <HoverOrCLick
                    clickUp={props.clickUp}
                    clickDown={props.clickDown}
                    size={props.size}
                    clicked={props.isChangeSIzeIsCLicked}
                    text="Choose font size"
                    iconName="TextSize">
                    <TextSize onClick={props.changeSize} className="icon" />
                </HoverOrCLick>
            </Row>

            <Row className="justify-content-md-center rw">
                <HoverOrCLick
                    clicked={props.isChangeSIzeIsCLicked}
                    text="Choose text color."
                    handleChange={props.handleChange}
                    color={props.color}
                    iconName="BorderColor">
                    <BorderColor onClick={props.changeSize} className="icon" />
                </HoverOrCLick>
            </Row>

            <Row className="justify-content-md-center rw">
                <HoverOrCLick
                    clicked={props.isChangeSIzeIsCLicked}
                    text="Choose theme for background."
                    chooseTheme={props.chooseTheme}
                    themes={props.themes}
                    iconName="ColorFill">
                    <ColorFill onClick={props.changeSize} className="icon" />
                </HoverOrCLick>
            </Row>

            <Row className="justify-content-md-center rw">
                <OverlayTrigger
                    placement='right'
                    overlay={
                        <Tooltip id={`tooltip-right`}>
                            Adding image.
                    </Tooltip>
                    }>
                    <ImageAdd className="icon" />
                </OverlayTrigger>
            </Row>
        </Col>
    );
};