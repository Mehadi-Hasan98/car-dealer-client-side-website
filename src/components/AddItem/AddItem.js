import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    // const navigate = useNavigate();
    const [user] = useAuthState(auth);


    const onSubmit = data =>{
    // const addItem = {
    //   id: data._id,
    //   supplier: data.supplier,
    //   price: data.price,
    //   description: data.description,
    //   image: data.img,
    //   quantity: data.quantity,
    //   name: data.name,
    //   email: user.email
    // }

    // axios.post("http//localhost:5000/myitem", addItem)
    // .then((response) => {
    //   const {data} = response;
    //   if(data.insertedId) {
    //     toast("Your item has been added");
    //   }
    //   reset();
    // })

    const url = `http://localhost:5000/item`;
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
    
  }
  
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please add an item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2' placeholder='Supplier' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mb-2' type="email" value={user?.email} name="email" id="" placeholder='Your Email Address' required/>
      <input type="submit" value="Add New Item" />
    </form>
        </div>
    );
};

export default AddItem;