import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserDetails from './UserDetails'; // Import the new UserDetails component

const Login = ({ show, handleClose, handleShowSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);  // State to hold user data after login
    const [showUserDetails, setShowUserDetails] = useState(false);  // State to control the UserDetails modal
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log('Login result:', result); // Debugging log

                if (result.data.success && result.data.user) {  // Check if the response has success and user
                    setUser(result.data.user);  // Set the user data after login
                    setShowUserDetails(true);  // Show the UserDetails modal
                    handleClose();  // Close the login modal
                } else {
                    alert('Login failed! Incorrect email or password.');
                }
            })
            .catch(err => {
                console.error('Login error:', err);  // Debugging error
                alert('An error occurred during login. Please try again.');
            });
    };

    const handleUserDetailsClose = () => {
        setShowUserDetails(false);
        navigate('/home');  // Navigate to home after viewing details
    };

    // Clear form fields when modal is closed
    const handleModalClose = () => {
        handleClose();
        setEmail('');  // Clear email field
        setPassword('');  // Clear password field
    };

    return (
        <>
            {/* Login Modal */}
            <Modal show={show} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-2 mt-3">
                            Login
                        </Button>
                    </Form>

                    <div className="text-center">
                        <p>Don't have an account? <a href="#" onClick={() => { handleModalClose(); handleShowSignup(); }}>Sign up</a></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="me-auto" onClick={handleModalClose}>
                        Cancel
                    </Button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </Modal.Footer>
            </Modal>

            {/* UserDetails Modal */}
            {user && (
                <UserDetails 
                    show={showUserDetails} 
                    handleClose={handleUserDetailsClose} 
                    user={user} 
                />
            )}
        </>
    );
};

export default Login;
