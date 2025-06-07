import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import './LoginPage.css';

const { Title, Text, Link } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Title level={2}>Login</Title>
        <Text className="login-subtitle">
          Please login using account detail bellow.
        </Text>
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <div className="forgot-password">
            <Link href="#">Forgot your password?</Link>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Sign In
            </Button>
          </Form.Item>

          <Text>
            Don’t have an Account? <Link href="#">Create account</Link>
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
