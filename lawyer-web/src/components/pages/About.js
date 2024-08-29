import React from 'react'

const About = () => {
    return (
        <div>
            <section id="about" className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 text-center">
                            <h2 className="text-dark mb-4" style={{ fontFamily: 'Baskervville SC, serif' }}>
                                About Us
                            </h2>
                            <p className="text-dark">
                                Our legal team has a wealth of experience in a variety of practice areas, including
                                <a href="#services"> Business Law</a>, <a href="#services"> Criminal Law</a>,
                                <a href="#services"> Family Law</a>, <a href="#services"> Health Law</a>,
                                <a href="#services"> Personal Injury Law</a>, <a href="#services"> Real Estate Law</a>,
                                and <a href="#services"> Tax Law</a>, and we are equipped to handle even the most challenging
                                legal matters.
                            </p>
                            <p className="text-dark">
                                We take pride in our ability to provide effective legal representation that is tailored to each
                                client's unique needs, and we are committed to maintaining the highest standards of
                                professionalism and integrity in all that we do.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
