import React, { useEffect, useState } from 'react';
import './SelectedBook.css'
import MakeItem from '../MakeItem/MakeItem';
const SelectedBook = ({cardData,chooseAgainHandler,randValue,randomBookHandler}) => {
    return (
        <div className='selected-book-section mt-4'>
            <h4>Selected Books</h4>
            <div className='mt-4' >
                {
                    cardData.map(element => <MakeItem key={element.id} element={element}></MakeItem>)
                }
            </div>
            <div className={randValue !== 0 && cardData.length !==0 ?"p-2":"d-none"}>
                {
                    
                    randValue === 0 ? <p></p> : <LuckyBook randomBook={cardData[randValue-1]} ></LuckyBook>

                    
                }
                {
                    console.log(randValue,cardData.length)
                }

            </div>
            <div className='my-4'>
                <div className='d-flex justify-content-between'>
                    <button onClick={randomBookHandler} className={cardData.length > 0 ? "btn btn-primary btn-sm" : 'd-none'}>Choose 1 For Me</button>
                    <button onClick={chooseAgainHandler} className={cardData.length > 0 ? "btn btn-danger btn-sm" : 'd-none'}>Choose again</button>
                </div>
                
            </div>
        </div>
    );
};

const LuckyBook = ({randomBook})=>{
    
    const name = randomBook?.name;
    const img = randomBook?.img;
    
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