import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';


const ItemDetail = () => {
    const {itemId} = useParams();
    const [item] = useItemDetail(itemId);
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
  <button className='btn btn-success mx-3'>Update</button>
    <button className='btn btn-primary'>Delivered</button>
  </Card.Body>
</Card>
        <div className='mt-5'>
            <input type="text" placeholder='Enter Quantity Number'/>
            <button style={{bgcolor: "blue"}} className='ms-3'>Restock</button>
        </div>
    </div>
    );
};

export default ItemDetail;