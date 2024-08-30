import React from 'react';
// import image from '../images/bg5.jpg';

const Home = () => {
    const profiles = [
        {
            whatsappLink: 'https://wa.me/your-whatsapp-number'
        }
    ];
    return (
        <main id="home" className="flex-grow-1 d-flex justify-content-center py-5 px-5">
            <div className="container d-flex flex-column align-items-center">
                {/* Background Image and Text */}
                <div
                    className="bg-image rounded d-flex flex-column justify-content-end text-white"
                    style={{
                        // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${image})',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '116%',
                        height: '90vh',
                        padding: '2.5rem',
                        marginTop: '-11%',
                        boxSizing: 'border-box',
                    }}
                >
                    <div className="bg-img-text mb-3 text-center">
                        <h1 className="display-4 fw-bold" style={{ fontSize: '2.5rem', fontFamily: 'DM Serif Text', marginTop: '-20%' }}>
                            Don’t Settle for Less
                        </h1>
                        <h2 className="display-4 fw-bold" style={{ fontSize: '2.5rem', fontFamily: 'DM Serif Text' }}>
                            Find the{' '}
                            <a href="#lawyers" style={{ color: 'goldenrod', textDecoration: 'none' }}>
                                LAWYER
                            </a>{' '}
                            Who Delivers!
                        </h2>
                        <p className="lead" style={{ fontSize: '1.1rem', fontFamily: 'ui-monospace', maxWidth: '100%', margin: '0 auto', width: '100%', textAlign: 'center' }}>
                            "We are a diverse community of lawyers, committed to guiding you through complex legal matters and protecting your rights with accessible, high-quality, and affordable legal services."
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
