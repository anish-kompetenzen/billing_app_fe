import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';

const EditCashier = () => {
    const [userDetails, setUserDetails] = useState({
        userName: "",
        userEmail: "someone@example.com",
        userPass: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        // form is prevented from submitting the data
        console.log(userDetails);
    }
    return (
        <div className='container mt-5'>
            <Card>
                <CardHeader>
                    <h3>Edit Cashier Details</h3>
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <FormControl type='text' required name='userName'
                            onChange={(e) => { setUserDetails({ ...userDetails, [e.target.name]: e.target.value }) }}
                            placeholder='Enter your name' className='mb-1' />
                        <FormControl type='email' readOnly className='mb-1' name='userEmail'
                            onChange={(e) => { setUserDetails({ ...userDetails, [e.target.name]: e.target.value }) }}
                            value={userDetails.userEmail} />
                        <FormControl type='password' required name='userPass'
                            onChange={(e) => { setUserDetails({ ...userDetails, [e.target.name]: e.target.value }) }}
                            placeholder='Enter your password' className='mb-1' />
                    </CardBody>
                    <CardFooter>
                        <Button variant='success' type='submit'>Save Details</Button>
                    </CardFooter>
                </Form>
            </Card>
        </div>
    )
}

export default EditCashier;