import React, { useState } from "react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./MainProductCard.css";

const MainProductCard = ({ productImage, productName, productPrice, productCode }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`product-card ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && (
                <div className="icon-container">
                    <ShoppingCartOutlined className="icon" />
                    <HeartOutlined className="icon" />
                </div>
            )}

            <img
                alt={productCode}
                src={productImage}
                className="product-image"
            />

            <div className="product-info">
                <h3 className="product-name">{productName}</h3>
                <p className="product-code">Code - {productCode}</p>
                <p className="product-price">${productPrice}</p>
            </div>
        </div>
    );
};

export default MainProductCard;
