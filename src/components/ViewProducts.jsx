import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Service from './Service';

const ViewProducts = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [products, setProducts] = useState([]);

    async function viewProducts() {
        const response = await Service.viewProducts();
        setProducts(response.data);
    }

    useEffect(() => {
        viewProducts();
    }, []);

    async function handleIncrease(id) {
        await Service.increaseQuantity(id);
        viewProducts();
    }

    async function handleDecrease(id) {
        await Service.decreaseQuantity(id);
        viewProducts();
    }

    return (
        <>
            <Button className='bi bi-arrow-left' onClick={() => navigate("/h", {
                state: {
                    cashierDetails: location?.state?.cashierDetails
                }
            })}></Button>
            <Table responsive bordered striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>MF Name</th>
                        <th>MF Date</th>
                        <th>Exp Date</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th colSpan={4}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pdt, index) => {
                        return (
                            <tr key={index} className=''>
                                <td>{pdt.productId}</td>
                                <td>{pdt.productName}</td>
                                <td className='text-center'><img src={pdt.productImage} style={{ height: "170px" }} /></td>
                                <td>{pdt.productManufacturer}</td>
                                <td>{pdt.productManDate}</td>
                                <td>{pdt.productExpDate}</td>
                                <td>{pdt.productCategory}</td>
                                <td>{pdt.productPrice}</td>
                                <td>{pdt.productQuantity}Nos</td>
                                <td><Button variant='success' className='bi bi-plus' onClick={() => handleIncrease(pdt.productId)}></Button></td>
                                <td><Button variant='warning' className='bi bi-dash' onClick={() => handleDecrease(pdt.productId)}></Button></td>
                                <td><Button className='bi bi-pencil'></Button></td>
                                <td><Button variant="danger" className='bi bi-trash'></Button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default ViewProducts;