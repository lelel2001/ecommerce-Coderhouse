import logo from "../../img/logo.png"
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {

    const categories = [
        {
            id: 1,
            label:"Mates",
        },
        {
            id:2,
            label:"Termos"
        },
        {
            id:3,
            label:"Accesorios"
        }
    ]

    return (
    <nav className="navbar">
        <div className="brand">
            <img src={logo} className="brand-img" alt="" />
        </div>

        <ul className="categories">
            {
            categories.map((category)=>(
                <li>key={category.id} {category.label}</li>
            ))
            }
        </ul>

        <CartWidget />
    </nav>
    )
}

export default NavBar