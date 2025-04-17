import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <Container style={{ height: "90vh" }} className='d-flex align-items-center justify-content-between'>
                <Link className='btn btn-warning' to="/e">Edit Cashier Details</Link>
                <Link className='btn btn-success' to="/a">Add Products</Link>
                <Link className='btn btn-primary' to="/v">View/Edit Products</Link>
            </Container>
        </div>
    )
}

export default HomePage;