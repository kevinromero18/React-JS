import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classes from "./CartWidget.module.css";
const CartWidget = () => {
    return (
        <div className={classes.container}>
            <FontAwesomeIcon className={classes.cart} icon={faCartShopping} />
            <span className={classes.count}>0</span>
        </div>
    )
};

export default CartWidget;