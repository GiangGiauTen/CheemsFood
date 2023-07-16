import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';

const ThemDanhSachDoCanMua = ({ setToBuyList }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async values => {
    setLoading(true);

    const requestBody = {
      ownerId: 1, // Thay đổi ownerId theo nhu cầu của bạn
      toBuyListDetail: [
        { foodId: 1, quantity: 2 },
        { foodId: 2, quantity: 3 },
      ], // Thay đổi thông tin chi tiết đồ cần mua theo nhu cầu của bạn
    };

    try {
      const response = await axios.post(`${API_URL}/to-buy-list`, requestBody);
      if (response.status === 200) {
        const { newToBuyList } = response.data;
        setToBuyList(prevList => [...prevList, newToBuyList]);
        message.success('Tạo danh sách đồ cần mua mới thành công');
        form.resetFields();
      } else {
        message.error('Tạo danh sách đồ cần mua mới thất bại');
      }
    } catch (error) {
      message.error(
        'Tạo danh sách đồ cần mua mới thất bại, vui lòng thử lại sau',
      );
    }

    setLoading(false);
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="Owner ID"
        name="ownerId"
        rules={[{ required: true, message: 'Vui lòng nhập Owner ID' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Food ID 1"
        name="foodId1"
        rules={[{ required: true, message: 'Vui lòng nhập Food ID 1' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Quantity 1"
        name="quantity1"
        rules={[{ required: true, message: 'Vui lòng nhập Quantity 1' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Food ID 2"
        name="foodId2"
        rules={[{ required: true, message: 'Vui lòng nhập Food ID 2' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Quantity 2"
        name="quantity2"
        rules={[{ required: true, message: 'Vui lòng nhập Quantity 2' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Xác nhận
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ThemDanhSachDoCanMua;
