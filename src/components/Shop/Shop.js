import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="row m-0">
                <div className="col-12 col-md-9 products-section">
                    <h2 className='products-section-title'>All Books</h2>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            products.map(product => <BookCard key={product.id} product={product}></BookCard>)

                        }

                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <h3>Cart Details</h3>
                </div>
        </div>
    );
};

export default Shop;