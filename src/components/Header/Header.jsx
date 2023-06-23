import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//icons
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

//components
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import Context from "../../utils/context";


import "./Header.scss";
const Header = () => {
    const [scrolledPD, setScrolledPD] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleScrollPD = () => {
        const offsetPD = window.scrollY;
        if(offsetPD > 200) {
            setScrolledPD(true);
        }else {
            setScrolledPD(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrollPD);
    });
    return <>

    <header className={`main-header ${ scrolledPD ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">Pradipta Store 3.35hrs</div>
            <div className="right">
                <TbSearch onClick={() => setShowSearch(true)} />
                <AiOutlineHeart />
                <span className="cart-icon" onClick={() => setShowCart(true)}>
                    <CgShoppingCart />
                    <span>4</span>
                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart} />}
    {showSearch && <Search setShowSearch={setShowSearch} />}
    </>;
};

export default Header;
