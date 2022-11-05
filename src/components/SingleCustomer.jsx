import React from 'react'

const SingleCustomer = ({ id, firstName, lastName, onDelete }) => {
    return (
        <div>
            <p>Customer: {firstName} {lastName}</p>
            <button onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default SingleCustomer