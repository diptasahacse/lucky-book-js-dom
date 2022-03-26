import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import SelectedBook from '../SelectedBook/SelectedBook';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [randValue,setRandValue] =  useState(0)
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const clickHandler = (product)=>{
        let cardArray = [...cardData];
        if(cardArray.length > 3){
            alert("You can not add more than 4")

        }
        else{
            const isProductThere = cardArray.find(element => element.id === product.id);
            if(isProductThere === undefined){
                cardArray = [...cardData,product];
                setCardData(cardArray);
            }
            else{
                alert("Already Added")
            }

        }
        
        
    }
    const randomBookHandler = ()=>{
        const cartLength = cardData.length;
        if(cartLength === 0){
            setRandValue(0)

        }
        else{
            const randValue = Math.floor(Math.random() * cartLength) + 1;
            setRandValue(randValue)

        }
        
    }
    const chooseAgainHandler = ()=>{
        setCardData([])
        setRandValue(0)

    }
    

    return (
        <div className="row m-0">
                <div className="col-12 col-lg-9 products-section">
                    <h2 className='products-section-title'>All Books</h2>
                    <div className='row row-cols-1 row-cols-lg-3 row-cols-sm-2 g-4'>
                        {
                            products.map(product => <BookCard key={product.id} product={product} clickHandler={clickHandler}></BookCard>)

                        }

                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <SelectedBook randValue={randValue} randomBookHandler={randomBookHandler} chooseAgainHandler={chooseAgainHandler} cardData={cardData}></SelectedBook>
                </div>
        </div>
    );
};

export default Shop;