import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    // const [user] = useAuthState(auth);
    // const [items, setItems] = useState([]);
    // const navigate = useNavigate();
    // useEffect (() => {
    //     const getItems = async () => {
    //         const email = user.email;
    //     const url = `http://localhost:5000/myitem?email=${email}`;
    //     try{
    //         const {data} = await axiosPrivate.get(url);
    //         setItems(data);
    //     }
    //     catch (error) {
    //         console.log(error.message);
    //         if(error.response.status === 401 || error.response.status === 403) {
    //             signOut(auth);
    //             navigate('/login');
    //         }
    //     }
    // };
    // getItems();
        
    // }, [user]);

    return (
        <div>
            <h2>My Items</h2>
        </div>
    );
};

export default MyItems;