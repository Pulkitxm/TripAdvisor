import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, bodyContent, Color }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>WanderAI</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div style={{ color:Color  }} >{bodyContent}</div>
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
