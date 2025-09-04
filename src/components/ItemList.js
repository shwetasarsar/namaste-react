import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { CDN_URL } from '../utils/constants';

const ItemList = ({item, isAdd, itemIndex}) => {

    const dispatch = useDispatch();

    const handleItem =(item, itemIndex)=>{
        if(isAdd){
            dispatch(addItem(item));
        }
        else{
            dispatch(removeItem(itemIndex));
        }
    }

    return (
    <div>
        <div data-testid="foodItems" className='m-2 p-2 bg-gray-100 text-left flex justify-between'>
            <div className='w-9/12'>
            <div className='font-bold'>{item.card.info.name}</div>
            <div>Rs. {item.card.info.price / 100}</div>
            <p className='text-xs '>{item.card.info.description}</p>
            </div>
            <div className='w-3/12'>
            <div className='absolute'>
                <button className='bg-black text-white px-2 py-1 mx-8 mt-15 rounded-lg cursor-pointer' 
                onClick={() => handleItem(item, itemIndex)}>{isAdd ? "Add +" : "Remove -"}</button>
            </div>
            <img src={CDN_URL+item.card.info.imageId} className='w-full'/>
            </div>
        </div>
    </div>
    )
}

export default ItemList