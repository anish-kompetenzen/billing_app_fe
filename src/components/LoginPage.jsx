import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap'

const LoginPage = () => {
    return (
        <div className='container w-50 mt-5 pt-5'>
            <Card>
                <CardHeader>
                    <h1>Login Here</h1>
                </CardHeader>
                <Form>
                    <CardBody>
                        <FormControl type="email" className='mb-1' required placeholder='Enter your email something@example.com' />
                        <FormControl type="password" required placeholder='Enter your password' />
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