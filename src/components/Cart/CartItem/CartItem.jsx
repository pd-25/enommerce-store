import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prodImg from "../../../assets/products/watch-prod-3.webp";
const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prodImg} alt="" />
            </div>
        </div>
    </div>;
};

export default CartItem;
