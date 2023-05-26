import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkdinIn,
    FaPinterest,
    FaCartPlus
} from "react-icons/fa";
import prodImg from "../../assets/products/speaker-prod-5.webp";
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    image
                </div>
                <div className="right">
                    Product
                </div>
            </div>
        </div>
    </div>;
};

export default SingleProduct;
