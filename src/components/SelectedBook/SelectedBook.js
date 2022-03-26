import './SelectedBook.css'
import MakeItem from '../MakeItem/MakeItem';
import LuckyBook from '../LuckyBook/LuckyBook';
const SelectedBook = ({cardData,chooseAgainHandler,randValue,randomBookHandler}) => {
    return (
        <div className='selected-book-section mt-4'>
            <h4 className='selected-book-title'>Selected Books</h4>
            <div className='mt-4' >
                {
                    cardData.map(element => <MakeItem key={element.id} element={element}></MakeItem>)
                }
            </div>
            <div className={randValue !== 0 && cardData.length !==0 ?"p-2":"d-none"}>
                {        
                    randValue === 0 ? <p></p> : <LuckyBook randomBook={cardData[randValue-1]} ></LuckyBook>
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

export default SelectedBook;