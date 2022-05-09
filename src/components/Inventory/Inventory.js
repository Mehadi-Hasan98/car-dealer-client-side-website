import useManageInventory from '../../hooks/useManageInventory';
import InventoryShow from '../InventoryShow/InventoryShow';


const Inventory = () => {
    const [items] = useManageInventory();
    return (
        <div className='text-center'>
            <h2>Manage Inventory</h2>
            <div className='mt-5 text-center items-container'>
            {
                items.map(item => <InventoryShow
                key ={item._id}
                item={item}
                ></InventoryShow>)
            }
        
        </div>
        </div>
    );
};

export default Inventory;