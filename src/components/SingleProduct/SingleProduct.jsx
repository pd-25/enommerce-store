import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa";
import prodImg from "../../assets/products/speaker-prod-5.webp";
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prodImg} alt="" />
                </div>
                <div className="right">
                    <span className="name">Wireless Speaker</span>
                    <span className="price">$-30</span>
                    <span className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptate?</span>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus />
                            Add to cart
                        </button>
                    </div>

                    <span className="divider"></span>

                    <div className="info-items">
                        <span className="text-bold">
                            Category:
                            <span>Speaker</span>
                        </span>

                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16}/>
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
    </div>;
};

export default SingleProduct;
