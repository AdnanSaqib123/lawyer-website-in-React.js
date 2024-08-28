import React from 'react'

const Services = () => {
    return (
        <div id="services" className="container mt-5">
            <h2 className="text-dark fw-bold fs-1 mb-4 text-center" style={{ fontFamily: 'Baskervville SC, serif' }}>
                Legal Services
            </h2>
            <p className="text-dark fs-5 mb-5">
                Our community of lawyers and legal professionals offer a wide range
                of services, including business law, tax law, real estate law, health
                law, personal injury law, and contract law.
            </p>
            <div className="row g-3">
                <div className='row g-3 d-flex'>

                    <div className="col-md-4">
                        <div className="card h-100 service-card"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/b508032c-ea77-4233-82b9-7c9110337e98.png")' }}>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Business Law</h5>
                            <p className="card-text text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 service-card"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e86574fa-2725-4db3-bc7c-14eed934bd7c.png")' }}>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Tax Law</h5>
                            <p className="card-text text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 service-card"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/19530135-f5c7-4acb-baea-b7e34b5ebaf6.png")' }}>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Real Estate Law</h5>
                            <p className="card-text text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row g-3 d-flex' style={{ marginTop: '10%' }}>

                    <div className="col-md-4">
                        <div className="card h-100 service-card"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/8afc24d2-b928-4671-83ef-24a67e49c8cc.png")' }}>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Health Law</h5>
                            <p className="card-text text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 service-card"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/2b93da0f-c608-468f-89a9-02b948c80bdf.png")' }}>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Personal Injury Law</h5>
                            <p className="card-text text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100 service-card"
                            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/fbfac7eb-cbd6-4528-a6f9-11d4ea3cbf4d.png")' }}>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Contract Law</h5>
                            <p className="card-text text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
