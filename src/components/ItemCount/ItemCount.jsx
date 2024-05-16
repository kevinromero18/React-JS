/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from './ItemCount.module.css'
;


const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    const [ count, setCount ] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    };
    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev -1)
        }
    };
  return (
    <div className={classes.container}>
        <div>
            <h4 className={classes.counter}>{count}</h4>
        </div>
        <div className={classes.controls}>
            <button className={classes.button} onClick={increment}>+</button>
            <button className={classes.buttonn} onClick={() => onAdd(count)} disabled = {!stock}>Agregar al Carrito</button>
            <button className={classes.button} onClick={decrement}>-</button>
        </div>
    </div>
  );
};

export default ItemCount;
