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
    return <header className={`main-header ${ scrolledPD ? 'sticky-header' : ''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">Pradipta Store 2.26hr</div>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart />
                    <span>4</span>
                </span>
            </div>
        </div>
    </header>;
};

export default Header;
