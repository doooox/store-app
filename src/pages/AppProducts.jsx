import React, { useState } from 'react'
import SingleProduct from '../components/SingleProduct';
import ProductService from '../services/ProductService'

const AppProducts = () => {
    const allProducts = ProductService.getAll();
    const [products, setProducts] = useState( allProducts )
    return(
        <div>
            <h1>Products</h1>

            {products.map((product) =>
                <SingleProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                />)}
        </div>
    )
}

export default AppProducts