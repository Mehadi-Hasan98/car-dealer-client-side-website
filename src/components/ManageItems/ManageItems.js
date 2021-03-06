import React from 'react';
import useItems from '../../hooks/useItems';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
            const url = `https://fierce-eyrie-19120.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res=> res.json())
            .then(data=> {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }


    return (
        <div className='w-50 mx-auto'>
           <h2>Manage Your Items</h2> 
           {
               items.map(item => <div key={item._id}>
                   <h5>{item.name} <button onClick={()=> handleDelete(item._id)} className='btn btn-primary'>Delete</button> </h5>
               </div>)
           }
        </div>
    );
};

export default ManageItems;