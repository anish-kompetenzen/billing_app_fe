import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Form, FormControl, FormLabel, FormSelect } from 'react-bootstrap'

const AddProducts = () => {

    const [product, setProduct] = useState({
        name: '',
        image: '',
        manufacturer: '',
        mfgDate: '',
        expDate: '',
        category: '',
        price: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
    };

    function addProducts(event) {
        event.preventDefault();
        console.log(product);
    }

    return (
        <Container className='mt-5'>
            <Card>
                <CardHeader>
                    <h1>Add Books Here</h1>
                </CardHeader>
                <Form onSubmit={addProducts}>
                    <CardBody>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product name : </FormLabel>
                            <FormControl
                                type='text'
                                required
                                name='name'
                                placeholder='Enter product name'
                                value={product.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product image : </FormLabel>
                            <FormControl
                                type='url'
                                required
                                name='image'
                                placeholder='Enter product image'
                                value={product.image}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product manufacturer name : </FormLabel>
                            <FormControl
                                type='text'
                                required
                                name='manufacturer'
                                placeholder='Enter product manufacturer name'
                                value={product.manufacturer}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product manufacturing date : </FormLabel>
                            <FormControl
                                type='date'
                                required
                                name='mfgDate'
                                value={product.mfgDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product expiry date : </FormLabel>
                            <FormControl
                                type='date'
                                required
                                name='expDate'
                                value={product.expDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product category : </FormLabel>
                            <FormSelect
                                required
                                name='category'
                                value={product.category}
                                onChange={handleChange}
                            >
                                <option value=''>-- Select Category --</option>
                                <option value='Dairy'>Dairy</option>
                                <option value='Stationary'>Stationary</option>
                                <option value='Beverages'>Beverages</option>
                                <option value='Groceries'>Groceries</option>
                                <option value='Snacks'>Snacks</option>
                                <option value='Meat'>Meat</option>
                            </FormSelect>
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product price : </FormLabel>
                            <FormControl
                                type='number'
                                required
                                name='price'
                                placeholder='Enter product price'
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex align-items-center mb-1'>
                            <FormLabel style={{ width: "350px" }}>Product quantity : </FormLabel>
                            <FormControl
                                type='number'
                                required
                                name='quantity'
                                placeholder='Enter product quantity'
                                value={product.quantity}
                                onChange={handleChange}
                            />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button variant='success' type='submit'>Add Product</Button>
                    </CardFooter>
                </Form>
            </Card>
        </Container>
    )
}

export default AddProducts;