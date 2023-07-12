import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    try {
      const response = await axios.post('API_LOGIN_ENDPOINT', {
        username,
        password,
      });

      console.log('Đăng nhập thành công:', response.data);

      navigate('/home');
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
    }
  };


  const onFinish = (values) => {
    handleLogin();
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
        Hoặc <Link to="/register">Đăng ký ngay</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;