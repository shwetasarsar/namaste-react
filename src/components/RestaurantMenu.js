import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

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
          itemList.map((item,index)=>(
            <ItemList key={index} item={item} isAdd={true} itemIndex={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default RestaurantMenu