/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import classes from './Item.module.css';
const Item = ({id, name, price, img}) => {
    console.log(id);
   return (
    <div className={classes.card}>
        <img src={img} />
        <h4>{name}</h4>
        <p>${price}</p>
        <Link to= {`/item/${id}`} className={classes.button}>Ver Detalle</Link>
    </div>
   );
};

export default Item;