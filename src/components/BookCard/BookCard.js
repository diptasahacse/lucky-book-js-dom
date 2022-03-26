import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BookCard.css'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const BookCard = ({product,clickHandler}) => {
    const {name,img,price,ratings} = product;
    return (
        <div  className='col'>
            <div className="card border-0 book-card shadow h-100">
                    <div className='card-image-section'>
                        <img src={img} height="320" className="w-100 " alt={name} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className='d-flex justify-content-between mt-3 align-items-center'>
                            <h6 className="card-price m-0">${price}</h6>
                            <p className='m-0'>Rating : {ratings}</p>
                        </div>
                        
                    </div>
                    <div className="card-footer bg-white border-top-0">
                        <button onClick={()=>clickHandler(product)} className="btn btn-primary form-control">
                            <span className='me-2'>
                                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                            </span>
                        Add To Cart
                        </button>
                    </div>

            </div>
            
        </div>
    );
};

export default BookCard;