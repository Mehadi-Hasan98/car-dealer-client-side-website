import React, { useState } from 'react';

const UpdateInventory = () => {
    const [product, setProduct] = useState({});
    const {quantity} = product;

    function removeOne (id) {
        let newQuantity = quantity - 1 ;
        const newProduct = {...product, quantity: newQuantity}
        setProduct(newProduct)
        if(newQuantity > -1){
            const url = `https://fierce-eyrie-19120.herokuapp.com/Inventory/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                        'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
        }
    }

    return (
        <div>
            <button onClick={() => removeOne()}>Update</button>
        </div>
    );
};

export default UpdateInventory;