import React from 'react'
import { Link } from 'react-router-dom';

const SingleCustomer = ({ id, firstName, lastName, onDelete }) => {
    return (
        <div>
            <p>Customer: {firstName} {lastName}</p>
            <button onClick={() => onDelete(id)}>
                Delete
            </button>
            <button>
                <Link to={`/customers/${id}`}>Latest Purchase</Link>
            </button>
        </div>
    )
}

export default SingleCustomer