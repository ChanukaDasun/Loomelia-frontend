import React from 'react';
import { Row, Col, Input, Button, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const categories = [
    { name: 'Laptops & Computers', path: '/categories/laptops-computers' },
    { name: 'Cameras & Photography', path: '/categories/cameras-photography' },
    { name: 'Smart Phones & Tablets', path: '/categories/smartphones-tablets' },
    { name: 'Video Games & Consoles', path: '/categories/video-games-consoles' },
    { name: 'Waterproof Headphones', path: '/categories/waterproof-headphones' }
  ];

  const customerCare = [
    { name: 'My Account', path: '/account' },
    { name: 'Discount', path: '/discounts' },
    { name: 'Returns', path: '/returns' },
    { name: 'Orders History', path: '/orders-history' },
    { name: 'Order Tracking', path: '/order-tracking' }
  ];

  const pages = [
    { name: 'Blog', path: '/blog' },
    { name: 'Browse the Shop', path: '/shop' },
    { name: 'Category', path: '/category' },
    { name: 'Pre-Built Pages', path: '/pre-built-pages' },
    { name: 'Visual Composer Elements', path: '/visual-composer' },
    { name: 'WooCommerce Pages', path: '/woocommerce' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic here
    console.log('Newsletter signup submitted');
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <h3 className="footer-brand">Lumellia</h3>
                <form className="newsletter" onSubmit={handleNewsletterSubmit}>
                  <Input 
                    type="email"
                    placeholder="Enter Email Address"
                    className="newsletter-input"
                    required
                  />
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    className="newsletter-button"
                  >
                    Sign Up
                  </Button>
                </form>
                <div className="contact-info">
                  <p>Contact Info</p>
                  <address>
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </address>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <h4 className="footer-section-title">Categories</h4>
                <ul className="footer-links">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={category.path} className="footer-link">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <h4 className="footer-section-title">Customer Care</h4>
                <ul className="footer-links">
                  {customerCare.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="footer-link">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col xs={24} sm={12} lg={6}>
              <div className="footer-section">
                <h4 className="footer-section-title">Pages</h4>
                <ul className="footer-links">
                  {pages.map((page, index) => (
                    <li key={index}>
                      <Link to={page.path} className="footer-link">
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12}>
              <p className="copyright">©Chanuka - All Rights Reserved</p>
            </Col>
            <Col xs={24} md={12}>
              <div className="social-icons">
                <Space size="middle">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Facebook"
                  >
                    <FacebookOutlined />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <InstagramOutlined />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter"
                  >
                    <TwitterOutlined />
                  </a>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;