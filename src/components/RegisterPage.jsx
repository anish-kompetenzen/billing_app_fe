import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap'
import Service from './Service';

const RegisterPage = () => {

    const [cashierDetails, setCashierDetails] = useState({
        cashierName: "",
        cashierEmail: "",
        cashierPassword: ""
    });

    async function handleSubmit(event) {
        event.preventDefault();
        // form is prevented from submitting the data
        const response = await Service.registerCashier(cashierDetails);
        if (response.status === 201) {
            alert("Registration successful, You can login now!");
        }
    }

    return (
        <div className='container w-50 mt-5 pt-5'>
            <Card>
                <CardHeader>
                    <h1>Register Page</h1>
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <FormControl type="text" className='mb-1' name='cashierName'
                            onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                            required placeholder='Enter your name' />
                        <FormControl type="email" className='mb-1' name='cashierEmail'
                            onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                            required placeholder='Enter your email something@example.com' />
                        <FormControl type="password" required name='cashierPassword'
                            onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                            placeholder='Enter your password' />
                    </CardBody>
                    <CardFooter>
                        <Button type='submit'>Register</Button>
                    </CardFooter>
                </Form>
            </Card>
        </div>
    )
}

export default RegisterPage