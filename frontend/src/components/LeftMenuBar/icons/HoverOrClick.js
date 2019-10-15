import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import InnerContent from './InnerContent';

const HoverOrClick = props => {

    return (
        props.clicked ?
            <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                    <Popover id="popover-basic">
                        <Popover.Content>
                            <InnerContent
                                clickUp={props.clickUp}
                                clickDown={props.clickDown}
                                size={props.size}
                                iconName={props.iconName}
                                handleChange={props.handleChange}
                                color={props.color}
                                chooseTheme={props.chooseTheme}
                                themes={props.themes}
                            />
                        </Popover.Content>
                    </Popover>}>
                {props.children}
            </OverlayTrigger> :

            <OverlayTrigger
                placement='right'
                overlay={
                    <Tooltip id={`tooltip-right`}>
                        {props.text}
                    </Tooltip>}>
                {props.children}
            </OverlayTrigger>
    );
};

export default HoverOrClick;