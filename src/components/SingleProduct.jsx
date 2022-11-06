import React from 'react'
import { Link } from 'react-router-dom';


const SingleProduct = ({ id, name, count, onIncrement, onDecrement }) => {

    return (
        <div>
            <ul>
                <li>
                    <p>{name}</p>
                    <button onClick={() => { onIncrement(id) }}>+</button>
                    <button onClick={() => { onDecrement(id) }}>-</button>
                    <p>{count}</p>
                    <Link to={`/products/${id}`}>Buy</Link>
                </li>
            </ul>
        </div>
    )
}

export default SingleProduct