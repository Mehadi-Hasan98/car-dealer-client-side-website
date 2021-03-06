import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import './Item.css';

const Item = ({item}) => {
    const {_id, name, price, img, description, quantity, supplier} = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading></Loading>
    }
    else{
      setLoading(false);
    }
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h5>Price: ${price}</h5>
            <p>Description: {description}</p>
            <p>Quantity: {quantity}</p>
            <h6>Supplier Name: {supplier}</h6>
            <button className='btn btn-primary' onClick={()=> navigateToItemDetail(_id)}>Manage</button>
        </div>
    );
};

export default Item;