import React, { useEffect, useState } from 'react';
import './SelectedBook.css'
import MakeItem from '../MakeItem/MakeItem';
const SelectedBook = ({cardData}) => {
    const [randValue,setRandValue] =  useState(-1)
    const chooseAgainHandler = ()=>{
        const cartLength = cardData.length;
        if(cartLength === 0){
            setRandValue(-1)

        }
        else{
            const randValue = Math.floor(Math.random() * cartLength) + 1;
            setRandValue(randValue)

        }
        
    }

    
    

    return (
        <div className='selected-book-section mt-4'>
            <h4>Selected Books</h4>
            <div className='mt-4' >
                {
                    cardData.map(element => <MakeItem key={element.id} element={element}></MakeItem>)
                }
            </div>
            <div className={randValue !== -1?"p-2":"d-none"}>
                {
                    randValue === -1 ? <p></p> : <LuckyBook randonBook={cardData[randValue-1]} ></LuckyBook>

                    
                }

            </div>
            <div className='my-4'>
                <div className='d-flex justify-content-between'>
                    <button onClick={chooseAgainHandler} className='btn btn-primary btn-sm'>Choose 1 For Me</button>
                    <button className='btn btn-danger btn-sm'>Choose again</button>
                </div>
                
            </div>
        </div>
    );
};

const LuckyBook = ({randonBook})=>{
    const {name,img} = randonBook;
    
    return(
        <div className='border border-3 p-2'>
            <h5>Lucky Book</h5>
            <div className='list-item-parent mt-3'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img src={img} className=" list-item-img" alt={name} />
                    </div>
                    <h6 className='m-0 ms-2'>{name}</h6>
                </div>
            </div>

        </div>
        
    );
}

export default SelectedBook;