import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import CustomerService from '../services/CustomerService'
import ProductService from '../services/ProductService'

const Buy = () => {
    const { id } = useParams();
    let history = useHistory();

    const [products, setProducts] = useState(ProductService.get(id));
    const allCustomers = CustomerService.getAll()
    const [selectedCustomer, setSelectedCustomers] = useState()

    const selectCustomerHandler = (e) =>{
        setSelectedCustomers(e.target.value)
    }

    const confirmHandler = () => {
        if (!selectedCustomer) {
            return alert('Plese select a customer')
        }

        CustomerService.productsUpdate(selectedCustomer, products.name);
        const newCount = ProductService.decrement(id);
        setProducts({ ...products, count: newCount })

        
    }
    const cancelHandler = () => {
        history.push("/products");
    }
    if (products.count === 0) {
        return (
            <Link to="/products">{`There are no more available ${products.name}, back to products`}</Link>
        )
    }
   
    return (
        <div>
            <h1>Cart</h1>
            <h2>Product: <strong>{products.name}</strong>, and there are <strong>{products.count} </strong>left in stock</h2>
            <select
            value={selectedCustomer}
            onChange={selectCustomerHandler}
            >
            {allCustomers.map((customer)=> (
            <option
            key={customer.id}
            value={customer.id}
            >
                {`${customer.firstName} ${customer.lastName}`}
            </option>))}    
            </select>
            <div>
                <button
                onClick={confirmHandler}
                >
                    Confirm
               </button>
               <button
               onClick={cancelHandler}
               >
                Cancel
               </button>
            </div>
        </div>
    )
}

export default Buy