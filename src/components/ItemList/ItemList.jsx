/* eslint-disable react/prop-types */
import Item from '../Item/Item';
import classes from './ItemList.module.css';

const ItemList = ({products}) => {
    return (
        <div className={classes.listContainer}>
            {products.map(product => {return <Item key={product.id} {...product} />})}
        </div>
    );
};

export default ItemList;