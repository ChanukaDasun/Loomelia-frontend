import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import './SaleProductCard.css';

const SaleProductCard = ({ productImage, productName, productNewPrice, productPrevPrice }) => {
  return (
    <div className="sale-product-card">
      <div className="sale-product-image-container">
        <div className="sale-tag">Sale</div>
        <img src={productImage} alt={productName} className="sale-product-image" />
        <div className="hover-actions">
          <div className="action-icon cart-icon">
            <ShoppingCartOutlined />
          </div>
          <div className="action-icon heart-icon">
            <HeartOutlined />
          </div>
        </div>
      </div>
      <div className="sale-product-details">
        <h3 className="sale-product-name">{productName}</h3>
        <div className="price-container">
          <span className="new-price">${productNewPrice}</span>
          <span className="prev-price">${productPrevPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SaleProductCard;