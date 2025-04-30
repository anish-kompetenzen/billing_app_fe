import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormSelect, Table } from 'react-bootstrap';
import Service from './Service';
import { useLocation, useNavigate } from 'react-router-dom';

const BillingPage = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timer);
    }, []);

    const timeWithAMPM = dateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Ensures AM/PM format
    });

    const [products, setProducts] = useState([]);
    const [cashierDetails, setCashierDetails] = useState(location?.state?.cashierDetails);
    const [checkoutProducts, setCheckoutProducts] = useState([]);

    async function getProducts() {
        const response = await Service.viewProducts();
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    function handleAddProduct() {
        if (checkoutProducts.length < products.length) {
            setCheckoutProducts([...checkoutProducts, {
                productId: "",
                productName: "",
                productManufacturer: "",
                productPurchaseQty: 1,
                productPrice: ""
            }]);
        } else {
            alert("Limit reached!!");
        }
    }

    function handleSelectedPdt(e, index) {
        const selectedProduct = products.filter((pdt) => {
            if (Number(pdt.productId) === Number(e.target.value)) {
                return pdt;
            }
        });
        const updatedCheckoutProducts = checkoutProducts.map((cpdt, cindex) => {
            if (cindex === index) {
                return { ...selectedProduct.at(0), productPurchaseQty: 1 };
            } else {
                return cpdt;
            }
        });
        setCheckoutProducts(updatedCheckoutProducts);
    }

    async function handleViewBill() {
        const response = await Service.generateBill(checkoutProducts, cashierDetails.cashierName);
        console.log(response.data);
    }

    function handleChangeQuantity(e, id, cpdt) {
        if (Number(e.target.value) <= 0) {
            alert("Did you mean to delete the product?");
            setCheckoutProducts(checkoutProducts.map((pdt, index) => {
                if (index === id) {
                    return { ...cpdt, productPurchaseQty: 1 };
                } else {
                    return pdt;
                }
            }));
        } else if (Number(e.target.value) > cpdt.productQuantity) {
            alert("Quantity limit reached?");
            setCheckoutProducts(checkoutProducts.map((pdt, index) => {
                if (index === id) {
                    return { ...cpdt, productPurchaseQty: cpdt.productQuantity };
                } else {
                    return pdt;
                }
            }));
        } else {
            setCheckoutProducts(checkoutProducts.map((pdt, index) => {
                if (index === id) {
                    return { ...cpdt, productPurchaseQty: Number(e.target.value) };
                } else {
                    return pdt;
                }
            }));
        }
    }

    function handleDelete() {

    }

    return (
        <div className='card m-2'>
            <div className='card-header d-flex justify-content-between align-items-end'>
                <h6>Date : {dateTime.toLocaleDateString()}</h6>
                <img src='https://marhaba.qa/wp-content/uploads/2020/11/logo-lulu-safely.png' style={{ borderRadius: "15px", width: "20vw" }} />
                <div>
                    <h6>Cashier : {cashierDetails.cashierName}</h6>
                    <h6>Time : {timeWithAMPM}</h6>
                </div>
            </div>
            <div className='card-body'>
                <div className='d-flex d-flex justify-content-between align-items-center'>
                    <h2>Products</h2>
                    <h5>Add new product <Button variant='info' className='bi bi-plus-lg' onClick={handleAddProduct}></Button></h5>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Price per item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checkoutProducts.map((cpdt, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <FormSelect onChange={(e) => handleSelectedPdt(e, index)}>
                                            <option>Choose a product to proceed</option>
                                            {products.map((pdt, indexPdt) => {
                                                return (
                                                    <option key={indexPdt} value={pdt.productId}>{pdt.productName}</option>
                                                )
                                            })}
                                        </FormSelect>
                                    </td>
                                    <td>
                                        <FormControl value={cpdt.productManufacturer} readOnly placeholder='Choose a product to continue' />
                                    </td>
                                    <td>
                                        <FormControl value={"₹" + cpdt.productPrice + "/-"} readOnly placeholder='Choose a product to continue' />
                                    </td>
                                    <td>
                                        <FormControl value={cpdt.productPurchaseQty} onChange={(e) => handleChangeQuantity(e, index, cpdt)} type='number' placeholder='Choose a product to continue' />
                                    </td>
                                    <td>
                                        <FormControl value={cpdt.productPrice * cpdt.productPurchaseQty} readOnly placeholder='Choose a product to continue' />
                                    </td>
                                    <td><Button onClick={handleDelete} className='btn btn-danger bi bi-trash'></Button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <Button onClick={handleViewBill} className='bi-cash'>{" "}<span className='bi-receipt'>{" "}</span>Generate Bill</Button>
            </div>
        </div>
    )
}

export default BillingPage;