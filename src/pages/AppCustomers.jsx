import React, { useState } from 'react';
import SingleCustomer from '../components/SingleCustomer';
import CustomerForm from '../components/CustomerForm'
import CustomerService from '../services/CustomerService'


const AppCustomers = () => {
    const allCustomers = CustomerService.getAll();
    const [customers, setCustomers] = useState(allCustomers)

    const addCustomerHandler = (firstName, lastName) => {
        const newCustomer = CustomerService.create({ firstName, lastName });
        setCustomers([...customers, newCustomer]);

    }
    console.log(customers);
    const deleteHandler = (id) => {
        const isDeleted = CustomerService.delete(id);
        if (isDeleted) {
            setCustomers(customers.filter((customer) => customer.id !== id));
        }
    };

    return (
        <div>
            <CustomerForm onAddCustomer={addCustomerHandler} />
            {customers.map((customer) =>
                <SingleCustomer
                    key={customer.id}
                    id={customer.id}
                    firstName={customer.firstName}
                    lastName={customer.lastName}
                    onDelete={deleteHandler}
                />)}
        </div>
    )
}

export default AppCustomers