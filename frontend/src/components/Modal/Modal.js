import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
.modal-content{
    border: none;
    border-radius: none;
    /* box-shadow: 0px 0px 23px 4px rgba(0,0,0,0.6); */
}
.modal-header{
    background: #000;
    text-align: center;
    border-radius: 0;
}
.modal-title{
    margin-left: auto;
    color: white;
}
.close{
    color: white;
}
.modal-body{
    min-height: 400px;
    background-size: cover;
    background-image: ${props => props.theme ? `url(${props.theme})` : 'none'};
}
`;

export default props => {
    return (
        <StyledModal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={props.style}>
                <p style={props.fontSize}>
                    {props.story}
                </p>
            </Modal.Body>
        </StyledModal>
    );
};