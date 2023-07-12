import { useState } from 'react';
import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('API_REGISTER_ENDPOINT', {
        username,
        password,
        email,
      });

      console.log('Đăng ký thành công:', response.data);
      // Xử lý sau khi đăng ký thành công (ví dụ: chuyển hướng, hiển thị thông báo, v.v.)
      navigate('/login'); // Chuyển hướng người dùng về trang đăng nhập
    } catch (error) {
      console.error('Đăng ký thất bại:', error);
      // Xử lý khi xảy ra lỗi đăng ký (ví dụ: hiển thị thông báo lỗi, xử lý lỗi khác, v.v.)
    }
  };

  const onFinish = () => {
    handleRegister();
  };
  
  return (
    <Form name="register" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập địa chỉ email!' },
          { type: 'email', message: 'Địa chỉ email không hợp lệ!' }
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Địa chỉ email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Đăng ký
        </Button>
        Hoặc <Link to="/">Đăng nhập ngay!</Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;