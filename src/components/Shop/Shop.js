import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)

    return (
        <div className='container'>
            <div className="row">
                <div className="col-9 products-section">
                    <h2 className='products-section-title'>All Books</h2>
                    <div className='row'>
                        {

                        }

                    </div>
                </div>
                <div className="col-3">
                    <h3>Cart Details</h3>
                </div>
            </div>
            
            
        </div>
    );
};

export default Shop;