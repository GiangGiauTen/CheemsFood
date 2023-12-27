import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../utils/apiUrl'

const RegisterForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/signup`, {
                username,
                password,
                name,
                role,
            });

            console.log('Đăng ký thành công:', response.data);

            // Display success notification
            notification.success({
                message: 'Success',
                description: 'Đăng ký thành công!',
            });

            // Wait for the notification to close, then navigate
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay as needed
            navigate('/'); // Redirect the user to the login page after successful registration
        } catch (error) {
            console.error('Đăng ký thất bại:', error);

            // Display error notification
            notification.error({
                message: 'Error',
                description: 'Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.',
            });
        }
    };

    const onFinish = (values) => {
        setUsername(values.username);
        setPassword(values.password);
        setName(values.name);
        setRole(values.role);

        handleRegister();
    };

    return (
        <Form
            name="register"
            onFinish={onFinish}
            style={{ maxWidth: '300px', margin: '0 auto' }}
        >
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
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
            >
                <Input placeholder="Họ và tên" />
            </Form.Item>
            <Form.Item
                name="role"
                rules={[{ required: true, message: 'Vui lòng nhập vai trò!' }]}
            >
                <Input placeholder="Vai trò" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
