import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CDN_URL } from '../utils/constants';

const RestaurantMenu = () => {
  const { restId } = useParams();

  const [resName, setResName] = useState("");
  const [itemList, setItemList] = useState([]);

  // console.log("restId",restId)

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async () =>{
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`)
    const data = await fetch("https://mocki.io/v1/e9a5805a-4913-429b-a817-17e6b27b51fe");
    const json = await data.json();
    setResName(json.card.card.title);
    setItemList(json.card.card.categories[0].itemCards);
  }

  return (
    <div className='text-center w-6/12 mx-auto'>
      <div className='font-bold text-2xl'>{resName}</div>
      <div>
        {
          itemList.map((menu,index)=>(
            <div key={index} className='m-2 p-2 bg-gray-100 text-left flex justify-between'>
              <div className='w-9/12'>
                <div className='font-bold'>{menu.card.info.name}</div>
                <div>Rs. {menu.card.info.price / 100}</div>
                <p className='text-xs '>{menu.card.info.description}</p>
              </div>
              <div className='w-3/12'>
                <div className='absolute'>
                  <button className='bg-black text-white px-2 py-1 mx-8 mt-15 rounded-lg cursor-pointer'>Add +</button>
                </div>
                <img src={CDN_URL+menu.card.info.imageId} className='w-full'/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantMenu