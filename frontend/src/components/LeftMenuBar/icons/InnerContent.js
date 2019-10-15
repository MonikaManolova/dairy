import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Theme from './ThemeComponent';
import { UpArrow } from 'styled-icons/boxicons-solid/UpArrow';
import { DownArrow } from 'styled-icons/boxicons-solid/DownArrow';
import { ChromePicker } from 'react-color';

export default props => {
    let a = null;

    switch (props.iconName) {
        case "TextSize":
            a = <>
                <ButtonGroup vertical>
                    <Button
                        onClick={props.clickUp}
                        variant="dark" style={{ width: "20px", padding: "0" }}><UpArrow /></Button>
                    <Button
                        onClick={props.clickDown}
                        variant="dark" style={{ width: "20px", padding: "0" }}><DownArrow /></Button>
                </ButtonGroup>
                <div style={{
                    padding: "10px",
                    float: "left",
                    fontSize: "18px"
                }}> {`${props.size}px`}</div>
            </>
            break;
        case "BorderColor":
            a = <ChromePicker
                color={props.color}
                onChangeComplete={props.handleChange}
            />
            break;
        case "ColorFill":
            a = <Theme
                chooseTheme={props.chooseTheme}
                themes={props.themes} />
            break;
        default:
        // code block
    }

    return a
};