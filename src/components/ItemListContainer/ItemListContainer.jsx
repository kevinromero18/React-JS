/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import classes from "./ItemListContainer.module.css";
import { getProducts } from '../../asyncMock';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(res => {setProducts(res)})
            .catch(e => {console.error(e)})
    }, [])
    return (
        <div>
            <h2 className={classes.greet}>{greeting}</h2>
            <ItemList products = {products} />
        </div>
    );
};

export default ItemListContainer;

