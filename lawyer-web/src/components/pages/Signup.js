import React from 'react'

const Signup = () => {
    return (

        <div className="container" style={{ marginTop: '10%', marginBottom: '2%' }}>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h2 className="text-center mb-4" style={{ fontFamily: 'Baskervville SC, serif',fontSize: '2.7rem' }}>Sign Up</h2>
                    <div className="card p-4">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                                </div>
                                <div className="form-group">
                                    <label for="password2">Confirm Password</label>
                                    <input type="password" className="form-control" id="password2" placeholder="Enter password again" />
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-muted">Already a member? <a href="/login">Login</a></p>
                                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                                </div>
                                <hr />
                                <div className="text-center">
                                    <button type="button" className="btn btn-light w-100">
                                        <i className="bi bi-google me-2"></i> Continue with Google
                                    </button>
                                    <button type="button" className="btn btn-primary w-100 mt-2">
                                        <i className="bi bi-facebook me-2"></i> Continue with Facebook
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup
