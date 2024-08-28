import React from 'react';
import Icon from './images/icon1.png'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included

const Header = () => {
    return (
        <header className="head-nav1 navbar-expand-lg d-flex align-items-center justify-content-between border-bottom border-light px-5 py-3" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            fontFamily: 'Baskervville SC, serif',
            position: 'relative',
            zIndex: 1000,
        }}>
            <div className=" logo-size d-flex align-items-center gap-3">
                <img className="img-fluid" src={Icon} alt="Icon" width="40" height="40" />
                <h2 className="fs-5 fw-bold mb-0" style={{ letterSpacing: '0.1rem' }}>
                    Justice Shield
                </h2>
            </div>

            {/* Navbar Toggler for Mobile Screens */}
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Menu */}
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
                </ul>
            </div>
        </header>
    );
};

export default Header;
