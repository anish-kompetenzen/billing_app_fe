import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Form, FormControl, FormLabel, FormSelect } from 'react-bootstrap'

const AddProduct = () => {
    return (
        <Container className='mt-5'>
            <Card>
                <CardHeader>
                    <h1>Add Product Here</h1>
                </CardHeader>
                <Form>
                    <CardBody>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product name : </FormLabel>
                            <FormControl type='text' required placeholder='Enter product name' />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product image : </FormLabel>
                            <FormControl type='url' required placeholder='Enter product image' />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product manufacturer name : </FormLabel>
                            <FormControl type='text' required placeholder='Enter product manufacturer name' />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product manufacturing date : </FormLabel>
                            <FormControl type='date' required />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product expiry date : </FormLabel>
                            <FormControl type='date' required />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product category : </FormLabel>
                            <FormSelect required>
                                <option>Dairy</option>
                                <option>Stationary</option>
                                <option>Beverages</option>
                                <option>Groceries</option>
                                <option>Snacks</option>
                                <option>Meat</option>
                            </FormSelect>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product price : </FormLabel>
                            <FormControl type='number' required placeholder='Enter product price' />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product quantity : </FormLabel>
                            <FormControl type='number' required placeholder='Enter product quantity' />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button variant='success'>Add Product</Button>
                    </CardFooter>
                </Form>
            </Card>
        </Container>
    )
}

export default AddProduct