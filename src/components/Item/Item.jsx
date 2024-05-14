/* eslint-disable react/prop-types */
import classes from './Item.module.css';
const Item = ({id, name, price, img}) => {
    console.log(id);
   return (
    <div className={classes.card}>
        <img src={img} />
        <h4>{name}</h4>
        <p>${price}</p>
    </div>
   );
};

export default Item;