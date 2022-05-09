import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';


const Inventory = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    const navigateToAddItem = () => {
        navigate('/additem')
    }

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
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
        <div className='mt-5'>
            <h2>Manage Inventory</h2>
            {
               items.map(item => <div key={item._id}>
                   <h5>{item.name}  </h5>
                   <h6>${item.price}</h6>
               </div>)
            }
            <button className='btn btn-primary mb-5' onClick={() => navigateToAddItem()}>Add New Item</button>
           

        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Item Name</th>
      <th>Email</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Supplier</th>
      <th>Option</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>Mark</td>
      <td>Otto</td>
      <td></td>
      <td></td>
      <td><button onClick={()=> handleDelete(items._id)} className='btn btn-primary'>Delete</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td></td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    );
};

export default Inventory;