import React from 'react';
import Icon from './images/icon1.png'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="head-nav1 navbar-expand-lg d-flex align-items-center justify-content-between border-bottom border-light px-5 py-3" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            fontFamily: 'Baskervville SC, serif',
            position: 'absolute',
            zIndex: 1000,
        }}>
            <div className=" logo-size d-flex align-items-center gap-3">
                <img className="img-fluid" src={Icon} alt="Icon" width="40" height="40" />
                <h2 className="logo-text fs-5 fw-bold mb-0" style={{ letterSpacing: '0.1rem' }}>
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
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" to="/lawyers">Lawyers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold btn btn-secondary" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link navbar-nav1 text-decoration-none fs-6 fw-bold btn btn-secondary" to="/signup">Signup</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
