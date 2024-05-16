import CartWidget from "../CartWidget/CartWidget";
import classes from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <Link to={`/ `} className={classes.logo}>
                <h1>ZapaSport</h1>
            </Link>
            <div className={classes.container}>
                <NavLink to={`/category/Nike`} className={classes.button}>Nike</NavLink>
                <NavLink to={`/category/Adidas`} className={classes.button}>Adidas</NavLink>
                <NavLink to={`/category/Puma`} className={classes.button}>Puma</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;