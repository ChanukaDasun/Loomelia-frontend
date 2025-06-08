import { Row, Col, Button } from 'antd';
import { aboutUsImage, allSupportsImg, cashbackGurImg, premiumQualityImg, deliveryTruchImg } from '../../../assets/Assets';
import OurFeatureCard from '../customerComponents/OurFeatureCard';
import './AboutUs.css';
import { Link } from 'react-router';

const AboutUs = () => {

  return (
    <div className="about-us-container">
      <div className="top-section">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={aboutUsImage} alt="About Us" className="about-us-image" />
          </Col>
          <Col xs={24} md={12}>
            <div className="about-us-text">
              <h2 className="about-us-title">Know About Our Ecommerce Business, History</h2>
              <p className="about-us-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. 
                Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <Link to={"/customer/contactus"}>
                <Button className="about-us-button">Contact us</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>

      <div className="features-section">
        <h2 className="features-title">Our Features</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={6}><OurFeatureCard featureIcon={<img src={deliveryTruchImg} alt='deliver truck' />} featureName={"Island Wide Delivery"} featureDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."} /></Col>
          <Col xs={24} sm={12} md={6}><OurFeatureCard featureIcon={<img src={cashbackGurImg} alt='cashback guarantee' />} featureName={"100% Cashback"} featureDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."} /></Col>
          <Col xs={24} sm={12} md={6}><OurFeatureCard featureIcon={<img src={premiumQualityImg} alt='premium quality' />} featureName={"Quality Products"} featureDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."} /></Col>
          <Col xs={24} sm={12} md={6}><OurFeatureCard featureIcon={<img src={allSupportsImg} alt='all supports' />} featureName={"24/7 Support"} featureDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."} /></Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
