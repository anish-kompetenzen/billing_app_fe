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
                <h2 className='mt-5'>Hi {location?.state?.cashierDetails?.cashierName}, Welcome to the BillingSuite</h2>
                <Container style={{ height: "65vh" }} className='d-flex align-items-center justify-content-between'>
                    <Button className='btn btn-warning' onClick={() => navigate("/e"
                        , {
                            state: {
                                cashierDetails: location?.state?.cashierDetails
                            }
                        }
                    )}>Edit Cashier Details</Button>
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
                    <Link className='btn btn-danger' to="/">Logout</Link>
                </Container>
            </div>
    )
}

export default HomePage;