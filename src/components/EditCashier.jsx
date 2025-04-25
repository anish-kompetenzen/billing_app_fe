import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Service from './Service';

const EditCashier = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [cashierDetails, setCashierDetails] = useState(location?.state?.cashierDetails);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await Service.editCashier(cashierDetails);
        if (response.status === 202) {
            navigate("/e"
                , {
                    state: {
                        cashierDetails: response.data
                    }
                }
            )
        }
    }

    return (
        location?.state === null ?
            <></>
            :
            <>
                <Button className='bi bi-arrow-left' onClick={() => navigate("/h", {
                    state: {
                        cashierDetails: cashierDetails
                    }
                })}></Button>
                <div className='container w-50 mt-5 pt-5'>
                    <Card>
                        <CardHeader>
                            <h1>Hi {location?.state?.cashierDetails?.cashierName}, Update your details here</h1>
                        </CardHeader>
                        <Form onSubmit={handleSubmit}>
                            <CardBody>
                                <FormControl type="text" className='mb-1' name='cashierName' value={cashierDetails.cashierName}
                                    onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                                    required placeholder='Enter your name' />
                                <FormControl type="email" className='mb-1' name='cashierEmail' readOnly
                                    onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                                    required value={location?.state?.cashierDetails?.cashierEmail} />
                                <FormControl type="password" required name='cashierPassword' value={cashierDetails.cashierPassword}
                                    onChange={(e) => { setCashierDetails({ ...cashierDetails, [e.target.name]: e.target.value }) }}
                                    placeholder='Enter your password' />
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' variant='success'>Update</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </div>
            </>
    )
}

export default EditCashier;