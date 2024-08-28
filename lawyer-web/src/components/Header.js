import React from 'react';
import Icon from './images/icon1.png'; 

const Header = () => {
    return (
        <header
            className="head-nav1 d-flex align-items-center z-1 justify-content-between border-bottom border-light px-5 py-3"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                color: 'white',
                fontFamily: 'Baskervville SC, serif',
            }}
        >
            <div className="d-flex align-items-center z-1 gap-3">
                <img className="img-fluid z-1" src={Icon} alt="Icon" width="40" height="40" />
                <h2
                    className="fs-5 fw-bold mb-0"
                    style={{ letterSpacing: '0.1rem' }}
                >
                    Justice Shield
                </h2>
            </div>

            <nav className="d-flex justify-content-end gap-4">
                <a
                    className="navbar-nav1 text-decoration-none fs-6 fw-bold"
                    style={{
                        color: 'white',
                        fontFamily: 'Baskervville SC, serif',
                        letterSpacing: '0.2rem',
                    }}
                    href="#home"
                >
                    Home
                </a>
                <a
                    className="navbar-nav1 text-decoration-none fs-6 fw-bold"
                    style={{
                        color: 'white',
                        fontFamily: 'Baskervville SC, serif',
                        letterSpacing: '0.2rem',
                    }}
                    href="#services"
                >
                    Services
                </a>
                <a
                    className="navbar-nav1 text-decoration-none fs-6 fw-bold"
                    style={{
                        color: 'white',
                        fontFamily: 'Baskervville SC, serif',
                        letterSpacing: '0.2rem',
                    }}
                    href="#lawyers"
                >
                    Lawyers
                </a>
                <a
                    className="navbar-nav1 text-decoration-none fs-6 fw-bold"
                    style={{
                        color: 'white',
                        fontFamily: 'Baskervville SC, serif',
                        letterSpacing: '0.2rem',
                    }}
                    href="#about"
                >
                    About
                </a>
                <a
                    className="navbar-nav1 text-decoration-none fs-6 fw-bold"
                    style={{
                        color: 'white',
                        fontFamily: 'Baskervville SC, serif',
                        letterSpacing: '0.2rem',
                    }}
                    href="#contact"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
