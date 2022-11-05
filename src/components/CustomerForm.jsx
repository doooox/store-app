import React, { useState } from 'react'

const CustomerForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const customerFirstNameHandler = (e) => {
        setFirstName(e.target.value)
    }
    const customerLastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        props.onAddCustomer(firstName, lastName);
        setFirstName('');
        setLastName('');
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Enter first name</label>
            <input
                required
                type="text"
                value={firstName}
                onChange={customerFirstNameHandler}
            />
            <label>Enter last name</label>
            <input
                type="text"
                required
                value={lastName}
                onChange={customerLastNameHandler}
            />
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default CustomerForm