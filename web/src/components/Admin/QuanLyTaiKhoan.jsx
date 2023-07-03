import React from 'react';
import { Table, Space } from 'antd';

const QuanLyTaiKhoan = () => {
  // Sample data for reserved foods
  const taiKhoan = [
    {
      uid: 1,
      username: 'Nguyễn Thanh Dương',
     
    },
    {
      uid: 2,
      username: 'Trần Công Minh',
     
    },
    {
      uid: 3,
      username: 'Phạm Chính Thống',
      
    },
    // Add more food items here...
    {
      uid: 4,
      username: 'Nguyễn Nhật Minh',
      
    },
    // Add more food items here...
    {
      uid: 5,
      username: 'Phạm Minh Chính',
      
    },
  ];

  // Define the columns for the table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'uid',
      key: 'uid',
    },    
    {
      title: 'Food Name',
      dataIndex: 'username',
      key: 'username',
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
      <h1>Account List</h1>
      <Table columns={columns} dataSource={taiKhoan} />
    </div>
  );
};

export default QuanLyTaiKhoan;