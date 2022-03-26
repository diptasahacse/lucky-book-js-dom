import React from 'react';

const LuckyBook = ({randomBook})=>{
    
    
    const name = randomBook?.name;
    const img = randomBook?.img;
    return(
        <div className='border border-3 p-2'>
            <h5>Lucky Book For You</h5>
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

export default LuckyBook;