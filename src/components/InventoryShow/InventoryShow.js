import useManageInventory from '../../hooks/useManageInventory';

const InventoryShow = ({item}) => {
    const [items, setItems] = useManageInventory();
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
    const { name, price, img, description, quantity, supplier} = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h5>Price: ${price}</h5>
            <p>Description: {description}</p>
            <p>Quantity: {quantity}</p>
            <h6>Supplier Name: {supplier}</h6>
            <button onClick={()=> handleDelete(item._id)} className='btn btn-primary'>Delete</button>
        </div>
    );
};

export default InventoryShow;