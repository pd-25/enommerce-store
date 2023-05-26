import "./Category.scss";
import catImg from "../../../assets/category/cat-1.jpg"
import catImg2 from "../../../assets/category/cat-2.jpg"
import catImg3 from "../../../assets/category/cat-3.jpg"
import catImg4 from "../../../assets/category/cat-4.jpg"
const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
                <img src={catImg} alt="" />
            </div>
            <div className="category">
                <img src={catImg2} alt="" />
            </div>
            <div className="category">
                <img src={catImg3} alt="" />
            </div>
            <div className="category">
                <img src={catImg4} alt="" />
            </div>
        </div>
    </div>;
};

export default Category;
