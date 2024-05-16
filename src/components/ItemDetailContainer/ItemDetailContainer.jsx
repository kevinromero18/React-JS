import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import classes from './ItemDetailContainer.module.css';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {itemId} = useParams();
    useEffect(() => {
        getProductById(itemId)
            .then(res => {setProduct(res)})
            .catch(e => {console.error(e)})
    }, [itemId]);

    return (
        <div className={classes.container}>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;