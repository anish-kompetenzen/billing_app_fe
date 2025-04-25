import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap'
import Service from './Service';

const LoginPage = () => {

    const [cashierDetails, setCashierDetails] = useState({
        cashierEmail: "",
        cashierPassword: ""
    });

    async function handleSubmit(event) {
        event.preventDefault();
        // form is prevented from submitting the data
        await Service.loginCashier(cashierDetails);
    }

    return (
        <div className='container w-50 mt-5 pt-5'>
            <Card>
                <CardHeader>
                    <h1>Login Here</h1>
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                    <CardBody>
                        <FormControl type="email" className='mb-1'
                            name='cashierEmail' value={cashierDetails.cashierEmail}
                            onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                            required placeholder='Enter your email something@example.com' />
                        <FormControl type="password" required
                            name='cashierPassword' value={cashierDetails.cashierPassword}
                            onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                            placeholder='Enter your password' />
                    </CardBody>
                    <CardFooter>
                        <Button variant='success' type="submit">Login</Button>
                    </CardFooter>
                </Form>
            </Card>
        </div>
    )
}

export default LoginPage