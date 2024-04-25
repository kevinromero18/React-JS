import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav">
            <h2>ZAPASPORT</h2>
            <div>
                <button>ADIDAS</button>
                <button>NIKE</button>
                <button>PUMA</button>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;