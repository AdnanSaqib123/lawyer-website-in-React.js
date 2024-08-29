import React from 'react';
import Image1 from '../images/lawyer2.jpg';  
import Image2 from '../images/lawyer3.jpg';

const Lawyers = () => {
    return (
        <main className="flex-grow-1 d-flex justify-content-center py-5 px-5">
            <div className="container d-flex flex-column align-items-center">
                <div>
                    <h2
                        id="lawyers"
                        className="text-dark fs-2 fw-bold text-center"
                        style={{
                            marginTop: '10rem',
                            fontFamily: "'Baskervville SC', serif",
                            letterSpacing: '0.1rem',
                        }}
                    >
                        Featured Lawyers
                    </h2>
                    <div className="row row-cols-2 row-cols-md-4 g-3 mt-3">
                        <div className="col text-center">
                            <div className="ratio ratio-1x1 bg-circle mx-auto" style={{ 
                                backgroundImage: `url(${Image1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '50%',
                                width: '200px'
                            }} />
                            <p className="text-dark fs-6 fw-medium mt-2 mb-1">Advocate Irfan Ali</p>
                            <p className="text-muted fs-6">Business Law</p>
                            <a className='icons-bt' href="#"><i class="bi bi-envelope-at"></i></a> &nbsp;&nbsp;
                            <a className='icons-bt' href="#"><i class="bi bi-whatsapp"></i></a>
                        </div>
                        <div className="col text-center">
                            <div className="ratio ratio-1x1 bg-circle mx-auto" style={{ 
                                backgroundImage: 'url("https://cdn.usegalileo.ai/stability/2c8f5b91-f48d-4b71-9c57-ea7e97087a89.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '50%',
                                width: '200px'
                            }} />
                            <p className="text-dark fs-6 fw-medium mt-2 mb-1">Advocate Khurram</p>
                            <p className="text-muted fs-6">Criminal Law</p>
                            <a className='icons-bt' href="#"><i class="bi bi-envelope-at"></i></a> &nbsp;&nbsp;
                            <a className='icons-bt' href="#"><i class="bi bi-whatsapp"></i></a>
                        </div>
                        <div className="col text-center">
                            <div className="ratio ratio-1x1 bg-circle mx-auto" style={{ 
                                backgroundImage: `url(${Image2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '50%',
                                width: '200px'
                            }} />
                            <p className="text-dark fs-6 fw-medium mt-2 mb-1">Advocate Kashif</p>
                            <p className="text-muted fs-6">Family Law</p>
                            <a className='icons-bt' href="#"><i class="bi bi-envelope-at"></i></a> &nbsp;&nbsp;
                            <a className='icons-bt' href="#"><i class="bi bi-whatsapp"></i></a>
                        </div>
                        <div className="col text-center">
                            <div className="ratio ratio-1x1 bg-circle mx-auto" style={{ 
                                backgroundImage: 'url("https://cdn.usegalileo.ai/stability/c5c2efbc-4b93-4954-8b48-461b50b758e3.png")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderRadius: '50%',
                                width: '200px'
                            }} />
                            <p className="text-dark fs-6 fw-medium mt-2 mb-1">Advocate Ahmed</p>
                            <p className="text-muted fs-6">Real Estate Law</p>
                            <a className='icons-bt' href="#"><i class="bi bi-envelope-at"></i></a> &nbsp;&nbsp;
                            <a className='icons-bt' href="#"><i class="bi bi-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Lawyers;
