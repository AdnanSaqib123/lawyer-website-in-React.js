import React, { useState } from 'react';
import Icon from './images/icon1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Signup from './pages/Signup';
import Login from './pages/Login';

const Header = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCloseSignupModal = () => setShowSignupModal(false);
    const handleShowSignupModal = () => setShowSignupModal(true);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    return (
        <>
            <header className="head-nav1 navbar-expand-lg d-flex align-items-center justify-content-between border-bottom border-light px-5 py-3" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                fontFamily: 'Baskervville SC, serif',
                position: 'absolute',
                zIndex: 1000,
            }}>
                <div className="logo-size d-flex align-items-center gap-3">
                    <img className="img-fluid" src={Icon} alt="Icon" width="40" height="40" />
                    <h2 className="logo-text fs-5 fw-bold mb-0" style={{ letterSpacing: '0.1rem' }}>
                        Justice Shield
                    </h2>
                </div>

                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-lg-flex justify-content-end gap-4">
                        <li className="nav-item">
                            <a className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" href="#lawyers">Lawyers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link navbar-nav1 buttons2 text-decoration-none fs-6 fw-bold  " onClick={handleShowLoginModal}>
                                Login
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link navbar-nav1 buttons2 text-decoration-none fs-6 fw-bold " onClick={handleShowSignupModal}>
                                Signup
                            </Button>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Login Modal Component */}
            <Login show={showLoginModal} handleClose={handleCloseLoginModal} handleShowSignup={() => { handleCloseLoginModal(); handleShowSignupModal(); }} />

            {/* Signup Modal Component */}
            <Signup show={showSignupModal} handleClose={handleCloseSignupModal} handleShowLogin={() => { handleCloseSignupModal(); handleShowLoginModal(); }} />
        </>
    );
};

export default Header;
