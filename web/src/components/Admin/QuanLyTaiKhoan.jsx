import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Modal, Form, Input } from 'antd';
import { notification } from 'antd';
import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';
//im
const QuanLyTaiKhoan = () => {
    const [data, setData] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const fetchData = async () => {
        const response = await fetch(`${API_URL}/user`);
        const js = await response.json();
        if (response.ok) {
            setData(js);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (i) => {
        const newTaiKhoan = [...data];
        newTaiKhoan.splice(i, 1);
        setData(newTaiKhoan);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/signup`, {
                username: form.getFieldValue('username'),
                password: form.getFieldValue('password'),
                name: form.getFieldValue('name'),
                role: form.getFieldValue('role'),
            });

            console.log('Thêm tài khoản thành công:', response.data);

            // Display success notification
            notification.success({
                message: 'Success',
                description: 'Tài khoản đã được tạo thành công.',
            });

            form.resetFields(); // Reset form
            setIsModalVisible(false); // Đóng modal
            fetchData(); // Refresh data after successful creation
        } catch (error) {
            console.error('Thêm tài khoản không thành công:', error);

            // Display error notification
            notification.error({
                message: 'Error',
                description: 'Đã xảy ra lỗi khi tạo tài khoản.',
            });
        }
    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'ID',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => (
                <Space size='middle'>
                    <a onClick={() => handleDelete(index)}>Delete</a>
                </Space>
            ),
        },
    ];



    return (
        <div>
            <h1>Account List</h1>
            <Button type="primary" onClick={showModal}>
                Thêm tài khoản
            </Button>
            <Table columns={columns} dataSource={data} />

            <Modal
                title="Thêm tài khoản mới"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} >
                    <Form.Item
                        name="username"
                        label="Tên đăng nhập"
                        rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="name"
                        label="Họ và tên"
                        rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="role"
                        label="Vai trò"
                        rules={[{ required: true, message: 'Vui lòng nhập vai trò!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default QuanLyTaiKhoan;
