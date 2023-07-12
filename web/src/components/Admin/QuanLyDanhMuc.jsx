import React from 'react';
import { Table, Space } from 'antd';

const QuanLyDanhMuc = () => {
  const danhMuc = [
    {
      category_id: 1,
      categogy_name: 'FastFood',
      categogy_type: 'Food',
    },
    {
        category_id: 2,
        categogy_name: 'Sake',
        categogy_type: 'Drink',
    },
    {
        category_id: 3,
        categogy_name: 'TinhBot',
        categogy_type: 'Food',
    },
    // Add more food items here...
    {
        category_id: 4,
        categogy_name: 'Vegetable',
        categogy_type: 'Food',
    },
    // Add more food items here...
    {
        category_id: 5,
        categogy_name: 'Pizza',
        categogy_type: 'Food',
    },
  ];

  // Define the columns for the table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'category_id',
      key: 'category_id',
    },    
    {
      title: 'Categogy Name',
      dataIndex: 'categogy_name',
      key: 'categogy_name',
    },
    {
      title: 'Categogy_type',
      dataIndex: 'categogy_type',
      key: 'categogy_type',
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
      <h1>Category List</h1>
      <Table columns={columns} dataSource={danhMuc} />
    </div>
  );
};

export default QuanLyDanhMuc;