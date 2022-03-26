import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './MakeItem.css'
const MakeItem = ({element}) => {
    
    const {name,img} = element;
    return(
        <div className='d-flex mt-2 list-item-parent align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <div>
                    <img src={img} className=" list-item-img" alt={name} />
                </div>
                <h6 className='m-0 ms-2'>{name}</h6>
            </div>
        </div>
    );
};

export default MakeItem;