import React from 'react'

const Home = () => {
    return (
        <main id="home" className="flex-grow-1 d-flex justify-content-center py-5 px-5">
            <div className="container d-flex flex-column align-items-center">
                <div className="bg-image rounded">
                    <div className="bg-img-text mb-3">
                        <h1 className="display-4 fw-bold" style={{ fontSize: '2.5rem', marginTop: '-20%', fontFamily: 'DM Serif Text' }}>
                            Don’t Settle for Less
                        </h1>
                        <h2 className="display-4 fw-bold" style={{ fontSize: '2.5rem', fontFamily: 'DM Serif Text' }}>
                            Find the <a href="#lawyers" style={{ color: 'goldenrod', textDecoration: 'none' }}>LAWYER</a> Who Delivers!
                        </h2>
                        <p className="lead" style={{ fontSize: '1.1rem', width: '38%', fontFamily: 'ui-monospace' }}>
                            "We are a diverse community of lawyers, committed to guiding you through complex legal matters and protecting your rights with accessible, high-quality, and affordable legal services."
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
