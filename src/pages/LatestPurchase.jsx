import React from 'react'
import { useParams } from 'react-router-dom'
import CustomerService from '../services/CustomerService';

const LatestPurchase = () => {
    let { id } = useParams();
    const customer = CustomerService.get(id)
    return (
        <div>
            <div>
                <h3>Customer:</h3>
                <p>{customer.firstName} {customer.lastName} </p>
            </div>
            <div>
                {!customer.product ?
                    <p>No items</p> :
                    customer.product.map((product) => <li>{product}</li>
                    )}
            </div>
        </div>
    )
}

export default LatestPurchase
