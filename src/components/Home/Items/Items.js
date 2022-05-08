import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate('/inventory')
    }
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/item')
        .then(res=> res.json())
        .then(data => setItems(data))
    }, [])

    return (
        <div className='mt-5 mb-5'>
            <h2 className='mt-5 mb-5'>Inventory Items</h2>
           <div className='items-container'>
           {
                items.slice(0, 6).map(item => <Item
                key ={item._id}
                item={item}
                ></Item>)
            }
           </div>
           <button className='btn btn-primary' onClick={()=> navigateToInventory()}>Manage Inventories</button>
        </div>
    );
};

export default Items;