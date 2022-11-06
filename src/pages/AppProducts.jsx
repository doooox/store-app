import React, { useState } from 'react'
import SingleProduct from '../components/SingleProduct';
import ProductService from '../services/ProductService'

const AppProducts = () => {
    const allProducts = ProductService.getAll();
    const [products, setProducts] = useState(allProducts);
    const [filter, setFilter] = useState('');


    const incrementHandler = (id) => {
        const newCount = ProductService.increment(id);

        setProducts([...products]);
    };
    const decrementHandler = (id) => {
        const newCount = ProductService.decrement(id);

        setProducts([...products]);
    };
    const filterHandler = (e) => {
        setFilter(e.target.value)
    }
    const filterProducts = products.filter((product) => product.name.toLowerCase().includes(filter.toLocaleLowerCase()))
    return (
        <div>
            <h1>Products</h1>
            <div>
                <h4>Search products</h4>
                <input type="text" value={filter} onChange={filterHandler} />
            </div>
            {filterProducts.map((product) =>
                <SingleProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    count={product.count}
                    onIncrement={incrementHandler}
                    onDecrement={decrementHandler}
                />)}
        </div>
    )
}

export default AppProducts