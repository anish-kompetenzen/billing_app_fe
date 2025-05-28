import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardHeader, FormControl, FormSelect, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Service from './Service';

const ViewProducts = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({}); // this is the single selected product to be edited

    async function viewProducts() {
        const response = await Service.viewProducts();
        setProducts(response.data);
    }

    useEffect(() => {
        viewProducts();
    }, []);

    async function handleIncrease(id, qty) {
        if (qty >= 100) {
            alert("Max quantity reached!");
        }
        await Service.increaseQuantity(id);
        viewProducts();
    }

    async function handleDecrease(id, qty) {
        if (qty <= 0) {
            alert("Did you mean to delete the product? Delete to continue...");
        }
        await Service.decreaseQuantity(id);
        viewProducts();
    }

    async function handleDelete(id) {
        const res = confirm("Are you sure you need to delete the product?");
        if (res) {
            await Service.deleteProduct(id);
            viewProducts();
            alert("Product deleted successfully!");
        }
    }

    function handleEdit(pdt) {
        setProduct(pdt);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
    };

    async function handleSave() {
        const response = await Service.updateProduct(product);
        if (response.status === 202) {
            alert("Product updated successfully!");
        }
        setProduct({});
        viewProducts();
    }

    return (
        <>
            <Card>
                <CardHeader className='d-flex align-items-center'>
                    <Button className='bi bi-arrow-left me-2' onClick={() => navigate("/h", {
                        state: {
                            cashierDetails: location?.state?.cashierDetails
                        }
                    })}></Button>
                    <h2>Product Details</h2>
                </CardHeader>
                <CardBody>
                    <Table responsive bordered striped hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Manufacturer</th>
                                <th>Mfg Date</th>
                                <th>Expiry Date</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((pdt, index) => {
                                return (
                                    <tr key={index} className=''>
                                        <td>{index + 1}</td>
                                        {product.productId === pdt.productId ?
                                            <>
                                                <td><FormControl
                                                    type='text'
                                                    required
                                                    name='productName'
                                                    placeholder='Enter product name'
                                                    value={product.productName}
                                                    onChange={handleChange}
                                                /></td>
                                                <td>
                                                    <FormControl
                                                        type='url'
                                                        required
                                                        name='productImage'
                                                        placeholder='Enter product image'
                                                        value={product.productImage}
                                                        onChange={handleChange}
                                                    />
                                                </td>
                                                <td>
                                                    <FormControl
                                                        type='text'
                                                        required
                                                        name='productManufacturer'
                                                        placeholder='Enter product manufacturer'
                                                        value={product.productManufacturer}
                                                        onChange={handleChange}
                                                    />
                                                </td>
                                                <td>
                                                    <FormControl
                                                        type='date'
                                                        required
                                                        name='productManDate'
                                                        value={product.productManDate}
                                                        onChange={handleChange}
                                                    />
                                                </td>
                                                <td>
                                                    <FormControl
                                                        type='date'
                                                        required
                                                        name='productExpDate'
                                                        value={product.productExpDate}
                                                        onChange={handleChange}
                                                    />
                                                </td>
                                                <td>
                                                    <FormSelect
                                                        required
                                                        name='productCategory'
                                                        value={product.productCategory}
                                                        onChange={handleChange}
                                                    >
                                                        <option value=''>-- Select Category --</option>
                                                        <option value='Dairy'>Dairy</option>
                                                        <option value='Stationary'>Stationary</option>
                                                        <option value='Beverages'>Beverages</option>
                                                        <option value='Groceries'>Groceries</option>
                                                        <option value='Snacks'>Snacks</option>
                                                        <option value='Meat'>Meat</option>
                                                        <option value='Other'>Other</option>
                                                    </FormSelect>
                                                </td>
                                                <td>
                                                    <FormControl
                                                        type='number'
                                                        required
                                                        name='productPrice'
                                                        placeholder='Enter product price'
                                                        value={product.productPrice}
                                                        onChange={handleChange}
                                                    />
                                                </td>
                                                <td>
                                                    <FormControl
                                                        type='number'
                                                        required
                                                        name='productQuantity'
                                                        placeholder='Enter product quantity'
                                                        value={product.productQuantity}
                                                        onChange={handleChange}
                                                    />
                                                </td>
                                            </>
                                            :
                                            <>
                                                <td>{pdt.productName}</td>
                                                <td className='text-center'><img src={pdt.productImage} style={{ height: "100px", borderRadius: "10px", border: "5px solid white" }} /></td>
                                                <td>{pdt.productManufacturer}</td>
                                                <td>{pdt.productManDate}</td>
                                                <td>{pdt.productExpDate}</td>
                                                <td>{pdt.productCategory}</td>
                                                <td>₹{pdt.productPrice}/-</td>
                                                <td>{pdt.productQuantity} Nos</td>
                                            </>
                                        }
                                        <td>
                                            <ButtonGroup>
                                                <Button variant='success' className='bi bi-plus' onClick={() => handleIncrease(pdt.productId, pdt.productQuantity)}></Button>
                                                <Button variant='warning' className='bi bi-dash' onClick={() => handleDecrease(pdt.productId, pdt.productQuantity)}></Button>
                                            </ButtonGroup>
                                        </td>
                                        <td>
                                            <ButtonGroup>
                                                {product.productId === pdt.productId ?
                                                    <Button className='bi bi-floppy' variant='info' onClick={handleSave}></Button>
                                                    : <Button className='bi bi-pencil' onClick={() => handleEdit(pdt)}></Button>
                                                }<Button variant="danger" className='bi bi-trash' onClick={() => handleDelete(pdt.productId)}></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </>
    )
}

export default ViewProducts;