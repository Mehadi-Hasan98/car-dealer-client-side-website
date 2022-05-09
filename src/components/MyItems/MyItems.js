import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import InventoryShow from '../InventoryShow/InventoryShow';

const MyItems = () => {
    
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    // const [refresh, setRefresh] = useState(false);
    useEffect (() => {
        const email = user.email;
        const url = `https://fierce-eyrie-19120.herokuapp.com/myitem?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
        // setRefresh(!refresh);
        
    }, [user]);
    
    return (
        <div className='text-center mt-5'>
            <h2  style={{color: "coral"}} className='mb-5'>My Items</h2>
       <div className='items-container'>
       {
            items.map(item =>
                <InventoryShow
                key={item._id}
                item={item}
                ></InventoryShow>
                
            )
        }
       </div>
        </div> 
        
    );
};

export default MyItems;



