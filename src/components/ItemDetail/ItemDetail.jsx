/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount/ItemCount";
import classes from './ItemDetail.module.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemDetail = ({id, name, price, category, img, stock}) => {
    console.log(id);
    const [totalAdded,  setTotalAdded] = useState(0);

    const controllerOnAdd = (cantidad) => {
        setTotalAdded(cantidad)
    }

    return (
        <div className={classes.card}>
            <img src={img} alt={name}/>
            <h4> {name} </h4>
            <p> ${price} </p>
            <p> {category} </p>
            <div>
                {
                    totalAdded > 0 ? (
                    <Link to='./Cart' className={classes.cart}>Finalizar Compra</Link>
                    ) : (
                    <ItemCount initial={1} stock={stock} onAdd={controllerOnAdd}/> 
                    )
                }
            </div>
        </div>
    );
};

export default ItemDetail;