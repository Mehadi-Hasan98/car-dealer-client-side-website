import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate('/inventory')
    }
    const {id, name, price, img, description} = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <p>Quantity:</p>
            <p>Supplier Name:</p>
            <button className='btn btn-primary' onClick={()=> navigateToInventory(id)}>Manage</button>
        </div>
    );
};

export default Item;