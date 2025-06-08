import React, { useState } from 'react';
import { Row, Col, Typography, Form, Input, Button, Card, Collapse, message } from 'antd';
import { QuestionCircleOutlined, SendOutlined } from '@ant-design/icons';
import './FAQs.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Panel } = Collapse;

const FAQs = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Array of most asked questions
  const frequentQuestions = [
    {
      key: '1',
      question: 'Eu dictumst cum at sed euismod condimentum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis. Our team provides comprehensive solutions tailored to your specific needs.'
    },
    {
      key: '2',
      question: 'Magna bibendum est fermentum eros.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis. We ensure quality and reliability in all our services.'
    },
    {
      key: '3',
      question: 'Odio muskana hak eros consequin scelerisq?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis. Our support team is available 24/7 to assist you.'
    },
    {
      key: '4',
      question: 'Elit id blandit sabara bel velit qua mare?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis. We offer flexible pricing plans to suit different requirements.'
    }
  ];

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Your question has been submitted successfully! We will get back to you soon.');
      form.resetFields();
    } catch (error) {
      message.error('Failed to submit your question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <Row gutter={[32, 32]} align="top">
          {/* Left Side - General Information */}
          <Col xs={24} lg={12} xl={10}>
            <div className="general-info-section">
              <Title level={2} style={{paddingBottom: '30px'}} className="faq-section-title">
                General Information
              </Title>
              
              <div className="faq-list">
                <Collapse 
                  ghost 
                  expandIconPosition="end"
                  className="custom-collapse"
                  items={frequentQuestions.map(item => ({
                    key: item.key,
                    label: (
                      <div className="faq-question">
                        <QuestionCircleOutlined className="question-icon" />
                        <span style={{fontSize: '1.2rem'}}>{item.question}</span>
                      </div>
                    ),
                    children: (
                      <Paragraph className="faq-answer">
                        {item.answer}
                      </Paragraph>
                    )
                  }))}
                />
              </div>
            </div>
          </Col>

          {/* Right Side - Ask a Question Form */}
          <Col xs={24} lg={12} xl={14}>
            <div className="ask-question-section">
              <Card className="question-form-card">
                <Title level={3} className="form-title">
                  Ask a Question
                </Title>
                
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="question-form"
                >
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: 'Please enter your name' },
                      { min: 2, message: 'Name must be at least 2 characters' }
                    ]}
                  >
                    <Input 
                      placeholder="Your Name*" 
                      size="large"
                      className="form-input"
                    />
                  </Form.Item>

                  <Form.Item
                    name="subject"
                    rules={[
                      { required: true, message: 'Please enter a subject' },
                      { min: 5, message: 'Subject must be at least 5 characters' }
                    ]}
                  >
                    <Input 
                      placeholder="Subject*" 
                      size="large"
                      className="form-input"
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: 'Please enter your message' },
                      { min: 10, message: 'Message must be at least 10 characters' }
                    ]}
                  >
                    <TextArea
                      placeholder="Type Your Message*"
                      rows={8}
                      className="form-textarea"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit"
                      size="large"
                      loading={loading}
                      icon={<SendOutlined />}
                      className="submit-button"
                      block
                    >
                      Send Mail
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FAQs;