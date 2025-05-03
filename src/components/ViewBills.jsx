import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import Service from './Service';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewBills = () => {
    const [bills, setBills] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        async function getAllBills() {
            const response = await Service.viewAllBills();
            setBills(groupBillsByCustomer(response.data));
        }
        getAllBills();
    }, []);

    const groupBillsByCustomer = (data) => {
        const grouped = {};

        data.forEach(entry => {
            if (!grouped[entry.customerId]) {
                grouped[entry.customerId] = {
                    customerId: entry.customerId,
                    billTime: entry.billTime,
                    billDate: entry.billDate,
                    cashierName: entry.cashierName,
                    products: [],
                    totalAmount: 0
                };
            }

            const productTotal = entry.productPurchaseQuantity * entry.productPrice;

            grouped[entry.customerId].products.push({
                billId: entry.billId,
                productId: entry.productId,
                productName: entry.productName,
                productManufacturer: entry.productManufacturer,
                productPurchaseQuantity: entry.productPurchaseQuantity,
                productPrice: entry.productPrice,
                total: productTotal
            });

            grouped[entry.customerId].totalAmount += productTotal;
        });

        return Object.values(grouped).sort((a, b) => b.customerId - a.customerId);
    };

    return (
        <div className="m-4">
            <Card>
                <CardHeader className='d-flex align-items-center'>
                    <Button className='bi bi-arrow-left me-3' onClick={() => navigate("/h", {
                        state: {
                            cashierDetails: location?.state?.cashierDetails
                        }
                    })}></Button>
                    <h2>View Bills Here</h2>
                </CardHeader>
                <CardBody>
                    {bills.length > 0 ?
                        bills.map((bill, index) => (
                            <div key={index} className="mb-4 border p-3 rounded bg-light">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src='https://marhaba.qa/wp-content/uploads/2020/11/logo-lulu-safely.png' style={{ borderRadius: "15px", width: "20vw" }} />
                                    </div>
                                    <div>
                                        <h5 className='d-flex justify-content-between'><span>Customer ID: {bill.customerId}</span> <Button className='bi bi-eye' onClick={() => {
                                            navigate("/v1b", {
                                                state: {
                                                    cashierDetails: location?.state?.cashierDetails,
                                                    bill: bill
                                                }
                                            })
                                        }}></Button></h5>
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
                        )) :
                        <>
                            <h3>No Bills Generated</h3>
                        </>
                    }
                </CardBody>
            </Card>
        </div>
    );
};

export default ViewBills;
