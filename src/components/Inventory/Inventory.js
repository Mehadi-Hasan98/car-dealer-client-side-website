import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const navigate = useNavigate();
    const navigateToAddItem = () => {
        navigate('/additem')
    }
    return (
        <div>
            <h2>Manage Inventory</h2>
            <button className='btn btn-primary' onClick={() => navigateToAddItem()}>Add New Item</button>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </div>
    );
};

export default Inventory;