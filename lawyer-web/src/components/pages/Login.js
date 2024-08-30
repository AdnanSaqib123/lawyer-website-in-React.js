import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Login = ({ show, handleClose, handleShowSignup }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mb-2 mt-3">
                        Login
                    </Button>
                </Form>

                <div className="text-center">
                    <p>Don't have an account? <a href="#" onClick={() => { handleClose(); handleShowSignup(); }}>Sign up</a></p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="me-auto" onClick={handleClose}>
                    Cancel
                </Button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </Modal.Footer>
        </Modal>
    );
};

export default Login;
