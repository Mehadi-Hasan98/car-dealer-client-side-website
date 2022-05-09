import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading></Loading>
    }
    else{
      setLoading(false);
    }

    useEffect( () =>{
        fetch('https://fierce-eyrie-19120.herokuapp.com/item')
        .then(res=> res.json())
        .then(data => setItems(data))
    }, [])

    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center mt-5 mb-5'>Inventory Items</h2>
           <div className='items-container'>
           {
                items.slice(0, 6).map(item => <Item
                key ={item._id}
                item={item}
                ></Item>)
            }
           </div>
        </div>
    );
};

export default Items;