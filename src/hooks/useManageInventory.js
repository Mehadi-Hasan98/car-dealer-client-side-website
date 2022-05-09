import { useEffect, useState } from "react";

const useManageInventory = () =>{
    const [items, setItems] = useState([]);

    useEffect( () =>{
        fetch('https://fierce-eyrie-19120.herokuapp.com/item')
        .then(res=> res.json())
        .then(data => setItems(data))
    }, [])
    return [items]
}

export default useManageInventory;