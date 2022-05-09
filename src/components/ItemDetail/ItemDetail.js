import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// import useItemDetail from '../../hooks/useItemDetail';


const ItemDetail = () => {
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate('/inventory')
    }
    const {itemId} = useParams();
    const [newData, setNewData] = useState(false);
    const [stockNumber, setStockNumber] = useState({
      stock: "",
    });
    let name, value;
    const getUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      setStockNumber({ ...stockNumber, [name]: value });
      e.preventDefault();
    };
    // const [item] = useItemDetail(itemId);
    const [item, setItem] = useState([]);
    useEffect( ()=> {
      const url = `https://fierce-eyrie-19120.herokuapp.com/item/${itemId}`;

      fetch(url)
      .then(res=> res.json())
      .then(data => setItem(data))
  }, [itemId, newData]);
    
    const handleDelivered = async (id, quantity) => {
      const getQuantity = parseInt(quantity) - 1;
      const newQuantity = {
        quantity: getQuantity.toString(),
      };
  
      // send data to the monogod server and update
      const url = `http://localhost:5000/item/${id}`
      await axios.put(url, newQuantity).then((response) => {
        const { data } = response;
        if (data) {
          setNewData(!newData);
        }
      });
    };
    const handleUpdate = async (id, quantity) => {
      const {stock} = stockNumber;
      console.log(stock)
      const getQuantity = parseInt(quantity) + parseInt(stock);

      const newQuantity = {
        quantity: getQuantity.toString(),
      };
      
  
      // send data to the monogod server and update
      const url = `http://localhost:5000/item/${id}`
      await axios.put(url, newQuantity).then((response) => {
        const { data } = response;
        if (data) {
          setNewData(!newData);
        }

      });

    };
    return (
        <div className='mt-5'>
            <Card className='mx-auto' style={{ width: '20rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title>Name: {item.name}</Card.Title>
    <Card.Text>
     {item.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price: ${item.price}</ListGroupItem>
    <ListGroupItem>Quantity: {item.quantity}</ListGroupItem>
    <ListGroupItem>Supplier: {item.supplier}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <button className='btn btn-primary ms-2' onClick={() => handleDelivered(item._id, item.quantity)}>Delivered</button>
  </Card.Body>
</Card>
    
        <div className='mt-5 text-center'>
            <input type="number" id='stock' name='stock' placeholder='Enter Quantity Number' value={stockNumber.stock} onChange={getUserData}/>
            <button style={{bgcolor: "blue"}} className='ms-3'  onClick={() => handleUpdate(item._id, item.quantity)}>Restock</button>
        </div>
        <div className='text-center mt-4'>
            <button className='btn btn-primary mt-4' onClick={()=> navigateToInventory()}>Manage Inventories</button>
        </div>
    </div>
    );
};

export default ItemDetail;