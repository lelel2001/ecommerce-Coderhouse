import logo from "../../img/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
    return (
    <nav className="navbar">
        <div className="brand">
            <img src={logo} className="brand-img" alt="" />
        </div>

        <ul className="categories">
            <li>Mates</li>
            <li>Termos</li>
            <li>Accesorios</li>
        </ul>

        <CartWidget />
    </nav>
    )
}

export default NavBar