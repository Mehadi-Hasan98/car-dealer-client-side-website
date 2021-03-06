import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = data =>{
    const url = `https://fierce-eyrie-19120.herokuapp.com/item`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    .then(res=> res.json())
    .then(result => 
      console.log(result))
      toast("Item added successfully");
      reset();
  }
  
    return (
        <div className='w-50 mx-auto mt-5 text-center'>
            <h2 className='mb-3' style={{color: "coral"}}>Please add an item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mb-2' placeholder='Email' type="email" value={user.email} {...register("email")} />

      <input type="submit" value="Add New Item" />
    </form>
        </div>
    );
};

export default AddItem;