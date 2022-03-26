import React from 'react';
import './SelectedBook.css'
import MakeItem from '../MakeItem/MakeItem';
const SelectedBook = ({cardData}) => {
    return (
        <div className='selected-book-section mt-4'>
            <h4>Selected Books</h4>
            <div className='mt-4'>
                {
                    cardData.map(element => <MakeItem key={element.id} element={element}></MakeItem>)
                }
            </div>
        </div>
    );
};

export default SelectedBook;