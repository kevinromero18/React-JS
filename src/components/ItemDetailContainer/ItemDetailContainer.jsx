import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import classes from './ItemDetailContainer.module.css';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getProductById()
            .then(res => {setProduct(res)})
            .catch(e => {console.error(e)})
    }, []);

    return (
        <div className={classes.container}>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;