import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // API
  };

  return (
    <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Ghi nhớ</Checkbox>
        </Form.Item>
        <a href="/">Quên mật khẩu</a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Đăng nhập
        </Button>
        Hoặc <a to="/DangKy">Đăng ký ngay</a>
      </Form.Item>

    </Form>
    
  );
};

export default LoginForm;
