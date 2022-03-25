import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import SelectedBook from '../SelectedBook/SelectedBook';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cardData, setCardData] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // useEffect(()=>{
    //     console.log(cardData)
        
        
        
    // },[cardData])

    const clickHandler = (product)=>{
        

        console.log(product)

        
    }

    return (
        <div className="row m-0">
                <div className="col-12 col-md-9 products-section">
                    <h2 className='products-section-title'>All Books</h2>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            products.map(product => <BookCard key={product.id} product={product} clickHandler={clickHandler}></BookCard>)

                        }

                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <SelectedBook cardData={cardData}></SelectedBook>
                </div>
        </div>
    );
};

export default Shop;