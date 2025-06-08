import { useState } from "react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./MainProductCard.css";

const MainProductCard = ({ productImage, productName, productPrice, productCode }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`main-product-card ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="main-actions-container">
                    <div className="main-action-icon main-cart-icon">
                        <ShoppingCartOutlined />
                    </div>
                    <div className="main-action-icon main-heart-icon">
                        <HeartOutlined />
                    </div>
                </div>
            )}

            <img
                alt={productCode}
                src={productImage}
                className="main-product-image"
            />

            <div className="main-product-info">
                <h3 className="main-product-name">{productName}</h3>
                <p className="main-product-code">Code - {productCode}</p>
                <p className="main-product-price">${productPrice}</p>
            </div>
        </div>
    );
};

export default MainProductCard;
