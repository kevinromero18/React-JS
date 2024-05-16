/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import classes from "./ItemListContainer.module.css";
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(res => {setProducts(res)})
            .catch(e => {console.error(e)})
    }, [categoryId])
    return (
        <div>
            <h2 className={classes.greet}>{greeting}</h2>
            <ItemList products = {products} />
        </div>
    );
};

export default ItemListContainer;

