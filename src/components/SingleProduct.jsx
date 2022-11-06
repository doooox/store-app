import React from 'react'


const SingleProduct = ({ id, name, count, onIncrement, onDecrement }) => {

    return (
        <div>
            <ul>
                <li>
                    <p>{name}</p>
                    <button onClick={() => { onIncrement(id) }}>+</button>
                    <button onClick={() => { onDecrement(id) }}>-</button>
                    <p>{count}</p>
                </li>
            </ul>
        </div>
    )
}

export default SingleProduct