import React from 'react'

const Login = () => {
    return (
        <div className="container " style={{ marginTop: '10%', marginBottom: '5%' }}>
            <div className="row justify-content-center">
                <h2 className="text-center mb-4" style={{ fontFamily: 'Baskervville SC, serif', fontSize: '2.7rem' }}>Login</h2>
                <div className="col-lg-5 col-md-7">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <div className="text-center mt-3">
                                Don't have an account? <a href="/signup">Sign up</a>
                            </div>
                            <div className="text-center mt-2">
                                <a href="/forget-password">Forget your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
