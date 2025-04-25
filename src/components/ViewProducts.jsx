import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewProducts = () => {

    const navigate = useNavigate();
    const location = useLocation();

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
                    <tr>
                        <td>1</td>
                        <td>Pencil</td>
                        <td><img src="https://www.rapiddeliveryservices.in/uploads/webp/natraj-621-penci_27559-.webp" style={{ width: "200px" }} /></td>
                        <td>Nataraj</td>
                        <td>2025-04-17</td>
                        <td>2029-04-17</td>
                        <td>Stationaries</td>
                        <td>₹2</td>
                        <td>100Nos</td>
                        <td>Inc Qty</td>
                        <td>Dec Qty</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Pencil</td>
                        <td><img src="https://www.rapiddeliveryservices.in/uploads/webp/natraj-621-penci_27559-.webp" style={{ width: "200px" }} /></td>
                        <td>Nataraj</td>
                        <td>2025-04-17</td>
                        <td>2029-04-17</td>
                        <td>Stationaries</td>
                        <td>₹2</td>
                        <td>100Nos</td>
                        <td>Inc Qty</td>
                        <td>Dec Qty</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Pencil</td>
                        <td><img src="https://www.rapiddeliveryservices.in/uploads/webp/natraj-621-penci_27559-.webp" style={{ width: "200px" }} /></td>
                        <td>Nataraj</td>
                        <td>2025-04-17</td>
                        <td>2029-04-17</td>
                        <td>Stationaries</td>
                        <td>₹2</td>
                        <td>100Nos</td>
                        <td>Inc Qty</td>
                        <td>Dec Qty</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Pencil</td>
                        <td><img src="https://www.rapiddeliveryservices.in/uploads/webp/natraj-621-penci_27559-.webp" style={{ width: "200px" }} /></td>
                        <td>Nataraj</td>
                        <td>2025-04-17</td>
                        <td>2029-04-17</td>
                        <td>Stationaries</td>
                        <td>₹2</td>
                        <td>100Nos</td>
                        <td>Inc Qty</td>
                        <td>Dec Qty</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default ViewProducts;