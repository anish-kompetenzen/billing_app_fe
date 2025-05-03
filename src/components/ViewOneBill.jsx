import React from 'react'
import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';

const ViewOneBill = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bill = location?.state?.bill;

    return (
        <div className='m-4'>
            <Card>
                <CardHeader className='d-flex align-items-center'>
                    <Button className='bi bi-arrow-left me-3' onClick={() => navigate("/vb", {
                        state: {
                            cashierDetails: location?.state?.cashierDetails
                        }
                    })}></Button>
                    <h2>View & Print Bill</h2>
                </CardHeader>
                <CardBody>
                    <div className="mb-4 border p-3 rounded bg-light">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <img src='https://marhaba.qa/wp-content/uploads/2020/11/logo-lulu-safely.png' style={{ borderRadius: "15px", width: "20vw" }} />
                            </div>
                            <div>
                                <h5 className='d-flex justify-content-between'><span>Customer ID: {bill.customerId}</span> <Button className='bi bi-printer' onClick={() => { window.print() }}></Button></h5>
                                <p>Date: {bill.billDate} | Time: {bill.billTime}</p>
                                <p>Cashier: {bill.cashierName}</p>
                            </div>
                        </div>
                        <table className="table table-bordered table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>Manufacturer</th>
                                    <th>Price Per Item (₹)</th>
                                    <th>Quantity</th>
                                    <th>Price (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bill.products.map((product, pIndex) => (
                                    <tr key={pIndex}>
                                        <td>{product.productId}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.productManufacturer}</td>
                                        <td>{"₹" + product.productPrice + "/-"}</td>
                                        <td>{product.productPurchaseQuantity}</td>
                                        <td>{"₹" + product.total + "/-"}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="5" className="text-end fw-bold">Total</td>
                                    <td className="fw-bold">₹{bill.totalAmount}/-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ViewOneBill