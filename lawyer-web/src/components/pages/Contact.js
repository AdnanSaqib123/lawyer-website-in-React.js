import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 text-center">
                        <h2 className="text-dark mb-4" style={{ fontFamily: 'Baskervville SC, serif' }}>
                            Contact Us
                        </h2>
                        <p className="text-dark">
                            Please use the form below to send us a message or request a consultation.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <form action="" method="post" className="mb-4">
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Name" required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Subject" required />
                            </div>
                            <div className="form-group mb-3">
                                <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="send-bt btn btn-primary d-block mx-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="bg-white p-4 rounded-3">
                            <h5 className="text-dark mb-3">Address</h5>
                            <p className="text-dark mb-3">123 Main Street, Anytown, Lahore.</p>
                            <h5 className="text-dark mb-3">Phone</h5>
                            <p className="text-dark mb-3">+923 123 456 789</p>
                            <h5 className="text-dark mb-3">Email</h5>
                            <p className="text-dark mb-3">info@justiceshield.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
