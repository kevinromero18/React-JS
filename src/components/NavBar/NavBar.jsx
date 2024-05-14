import CartWidget from "../CartWidget/CartWidget";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <h1>ZAPASPORT</h1>
            </div>
            <div className={classes.container}>
                <button className={classes.button}>ADIDAS</button>
                <button className={classes.button}>NIKE</button>
                <button className={classes.button}>PUMA</button>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;