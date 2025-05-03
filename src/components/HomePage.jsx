import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        location?.state === null ?
            <>
            </>
            :
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between mt-5'>
                    <h2>Hi {location?.state?.cashierDetails?.cashierName}, Welcome to the BillingSuite</h2>
                    <Button className='bi bi-person-circle' onClick={() => navigate("/e"
                        , {
                            state: {
                                cashierDetails: location?.state?.cashierDetails
                            }
                        }
                    )} style={{ borderRadius: "50%" }}></Button>
                </div>
                <Container style={{ height: "65vh" }} className='d-flex align-items-center justify-content-between'>
                    <Button className='btn btn-success' onClick={() => navigate("/a"
                        , {
                            state: {
                                cashierDetails: location?.state?.cashierDetails
                            }
                        }
                    )}>Add Products</Button>
                    <Button className='btn btn-primary' onClick={() => navigate("/v"
                        , {
                            state: {
                                cashierDetails: location?.state?.cashierDetails
                            }
                        }
                    )}>View/Edit Products</Button>
                    <Button className='btn btn-info' onClick={() => navigate("/b"
                        , {
                            state: {
                                cashierDetails: location?.state?.cashierDetails
                            }
                        }
                    )}>Billing</Button>
                    <Button className='btn btn-warning' onClick={() => navigate("/vb"
                        , {
                            state: {
                                cashierDetails: location?.state?.cashierDetails
                            }
                        }
                    )}>View Bills</Button>
                    <Link className='btn btn-danger' to="/">Logout</Link>
                </Container>
            </div>
    )
}

export default HomePage;