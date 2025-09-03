import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearItem } from '../utils/cartSlice';

const Cart = () => {

  const itemList = useSelector((store)=> store.cart.items);
  // console.log("itemlist", itemList)

  const dispatch = useDispatch();

  return (
    <div className='text-center w-6/12 mx-auto'>
      <div className='font-bold text-2xl p-4'>Cart</div>
      <button onClick={() => dispatch(clearItem())} className='bg-black text-white px-4 py-2 rounded-lg cursor-pointer'>Clear Cart</button>
      <div className='m-4'>{!itemList.length && "Cart is empty, Add items to the cart!"}</div>
      <>
      {
        itemList.map((item,index)=>(
          <ItemList key={index} item={item} isAdd={false} itemIndex={index}/>
        ))
      }
      </>
    </div>
  )
}

export default Cart