import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Signup = ({ show, handleClose, handleShowLogin }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="outline-danger" className="w-100 mb-3">
                    Continue with Google
                </Button>

                <p className="text-center">Or</p>

                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required />
                    </Form.Group>

                    <Form.Group controlId="formPasswordRepeat">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat Password" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me"  />
                    </Form.Group>

                    <p>
                        By creating an account, you agree to our{' '}
                        <a href="#" style={{ color: 'dodgerblue' }}>
                            Terms & Privacy
                        </a>.
                    </p>
                    <p className="text-center">
                        Already a member? <a href="#" onClick={() => { handleClose(); handleShowLogin(); }}>Login</a>
                    </p>

                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Signup;
