import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import InventoryShow from '../InventoryShow/InventoryShow';

const MyItems = () => {
    
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect (() => {
        const email = user.email;
        const url = `http://localhost:5000/myitem?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
        
        
    }, [user]);
    
    return (
        <div className='text-center mt-5 items-container'>
        {
            items.map(item =>
                <InventoryShow
                key={item._id}
                item={item}
                ></InventoryShow>
                
            )
        }
        </div> 
        
    );
};

export default MyItems;



