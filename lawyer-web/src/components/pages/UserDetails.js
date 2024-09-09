import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const UserDetails = ({ show, handleClose, user }) => {
    console.log('UserDetails component rendered with user:', user);  // Debugging log

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title><b>User Details</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><b>Name:</b> {user.name}</h5>
                <p><b>Email:</b> {user.email}</p>
                {/* Add other user details as needed */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserDetails;
