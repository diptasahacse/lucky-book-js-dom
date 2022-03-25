import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header-section pt-3'>
            <div className="container text-center">
                <h1> <span> <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> </span> বই বিচিত্রা <span> <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> </span></h1>
                <h3>Choose 4 Books</h3>

            </div>

            
        </div>
    );
};

export default Header;