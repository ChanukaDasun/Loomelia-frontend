import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './ContactUs.css';
import { contactUsIcon } from '../../../assets/Assets';

const { TextArea } = Input;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form Values:', values);
      message.success('Message sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined />,
      title: 'Tel: 877-67-88-99',
      subtitle: 'E-Mail: shop@store.com',
      color: '#5726DF'
    },
    {
      icon: <ClockCircleOutlined />,
      title: 'Support Forum',
      subtitle: 'For over 24hr',
      color: '#FB2E86'
    },
    {
      icon: <EnvironmentOutlined />,
      title: '20 Margaret st, London',
      subtitle: 'Great britain, 3NM98-LK',
      color: '#FFB265'
    },
    {
      icon: <MailOutlined />,
      title: 'Free standard shipping',
      subtitle: 'On all orders',
      color: '#1BE982'
    }
  ];

  return (
    <div className="contact-us">
      <div className="contact-container">
        {/* Top Section - Information About Us and Contact Way */}
        <Row gutter={[48, 48]} className="top-section">
          <Col xs={24} md={12}>
            {/* Information About Us Section */}
            <div className="info-section">
              <h2 className="section-title">Information About us</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae 
                eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
              </p>
              <div className="info-dots">
                <span className="dot dot-blue"></span>
                <span className="dot dot-pink"></span>
                <span className="dot dot-cyan"></span>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            {/* Contact Way Section */}
            <div className="contact-way-section">
              <h2 className="section-title">Contact Way</h2>
              <Row gutter={[24, 24]}>
                {contactInfo.map((item, index) => (
                  <Col xs={12} sm={12} key={index}>
                    <div className="contact-item">
                      <div 
                        className="contact-icon"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div className="contact-details">
                        <div className="contact-title">{item.title}</div>
                        <div className="contact-subtitle">{item.subtitle}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Bottom Section - Form and Image */}
        <Row gutter={[48, 48]} align="middle" className="bottom-section">
          {/* Left Side - Get In Touch Form */}
          <Col xs={24} lg={12}>
            <div className="form-section">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
              </p>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="contact-form"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                      <Input 
                        placeholder="Your Name*"
                        className="form-input"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email' }
                      ]}
                    >
                      <Input 
                        placeholder="Your E-mail"
                        className="form-input"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  name="subject"
                  rules={[{ required: true, message: 'Please enter subject' }]}
                >
                  <Input 
                    placeholder="Subject*"
                    className="form-input"
                  />
                </Form.Item>
                
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea 
                    placeholder="Type Your Message*"
                    rows={6}
                    className="form-textarea"
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    loading={loading}
                    className="submit-button"
                  >
                    Send Mail
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>

          {/* Right Side - Contact Us Image */}
          <Col xs={24} lg={12}>
            <div className="illustration-section">
              <div className="contact-illustration">
                <img 
                  src={contactUsIcon} 
                  alt="Contact Us" 
                  className="contact-image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;