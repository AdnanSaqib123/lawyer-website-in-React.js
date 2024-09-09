import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ show, handleClose, handleShowLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false); // For success popup
    const [errorMessage, setErrorMessage] = useState(''); // For error alerts
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Ensure the passwords match before submitting
        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Send the registration data to the server
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);

                if (!result.data.success) {
                    setErrorMessage(result.data.message);
                } else {
                    setShowSuccessModal(true); // Show the success popup
                }
            })
            .catch(err => console.log(err));
    };

    // Close success modal and navigate to login
    const handleSuccessClose = () => {
        setShowSuccessModal(false);
        handleClose();
        navigate('/login');
    };

    // Clear form fields when closing the modal
    const handleCloseModal = () => {
        setName('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setErrorMessage('');
        handleClose();
    };

    return (
        <>
            {/* Signup Modal */}
            <Modal show={show} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="outline-danger" className="w-100 mb-3">
                        Continue with Google
                    </Button>

                    <p className="text-center">Or</p>

                    {/* Error Message */}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPasswordRepeat">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Repeat Password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <p>
                            By creating an account, you agree to our{' '}
                            <a href="#" style={{ color: 'dodgerblue' }}>
                                Terms & Privacy
                            </a>.
                        </p>
                        <p className="text-center">
                            Already a member?{' '}
                            <a href="#" onClick={() => { handleCloseModal(); handleShowLogin(); }}>
                                Login
                            </a>
                        </p>

                        <div className="d-flex justify-content-between">
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="success" type="submit">
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={handleSuccessClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title><b>Registration Successful</b></Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p>Registration successfully done!</p>
                    <p><b>Thank you</b></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSuccessClose}>
                        Continue to Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Signup;
