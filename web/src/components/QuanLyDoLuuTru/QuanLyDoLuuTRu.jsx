import React from 'react';
import { Table, Space } from 'antd';

const QuanLyDoLuuTru = () => {
  // Sample data for reserved foods
  const reservedFoods = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Delicious pizza with cheese and toppings',
      storage_date: '2023-06-28',
      outdate: '2023-07-05',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Juicy burger with lettuce, tomato, and beef patty',
      storage_date: '2023-06-30',
      outdate: '2023-07-07',
      quantity: 4,
    },
    {
      id: 3,
      name: 'Salad',
      description: 'Fresh and healthy salad with mixed greens',
      storage_date: '2023-07-01',
      outdate: '2023-07-03',
      quantity: 1,
    },
    // Add more food items here...
    {
      id: 4,
      name: 'Pasta',
      description: 'Homemade pasta with marinara sauce',
      storage_date: '2023-07-01',
      outdate: '2023-07-06',
      quantity: 3,
    },
    // Add more food items here...
    {
      id: 5,
      name: 'Sushi',
      description: 'Fresh sushi rolls with assorted fillings',
      storage_date: '2023-07-02',
      outdate: '2023-07-04',
      quantity: 2,
    },
  ];

  // Define the columns for the table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Food Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Storage Date',
      dataIndex: 'storage_date',
      key: 'storage_date',
    },
    {
      title: 'Outdate',
      dataIndex: 'outdate',
      key: 'outdate',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href="#">View</a>
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Reserved Food List</h1>
      <Table columns={columns} dataSource={reservedFoods} />
    </div>
  );
};

export default QuanLyDoLuuTru;
