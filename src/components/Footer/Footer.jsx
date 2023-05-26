import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis corporis nisi ratione. Porro, dicta minus.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Chaturanga, CityCenter, Durgapur, 713212</div>
                </div>

                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +098 0988 9540</div>
                </div>

                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: store@pradipta.com</div>
                </div>

                
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart watches</span>
                <span className="text">Bluetooth speaker</span>
                <span className="text">Samrt earbuds</span>
                <span className="text">Home theatres</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Return</span>
                <span className="text">Terms and Cond</span>
                <span className="text">Contact</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">PRADIPTA STORE {new Date().getFullYear()} CREATED BY DEV. PREMIUM ECOMMERCE SOLUTIONS</div>
            </div>
            <img src={Payment} alt="" />
        </div>
    </footer>;
};

export default Footer;
