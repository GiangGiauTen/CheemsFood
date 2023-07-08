import React, { useEffect, useState } from 'react';
import { Table, Space, Modal, Button, Form, Input } from 'antd';

const QuanLyCongThucYeuThich = () => {
  // State for the favorite recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() =>{
    setFavoriteRecipes(JSON.parse(localStorage.getItem("listFavor")));
  },[])
  // Define the columns for the table
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Recipe Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href="#1" onClick={() => handleView(record)}>View</a>
          <a href="#2" onClick={() => handleEdit(record)}>Edit</a>
          <a href="#3" onClick={() => handleDelete(record)}>Delete</a>

        </Space>
      ),
    },
  ];

  // Handle view action
  const handleView = (record) => {
    // Handle view action
  };

  // Handle edit action
  const handleEdit = (record) => {
    // Handle edit action
  };

  // Handle delete action
  const handleDelete = (record) => {
    // Handle delete action
  };

  // Handle favorite action
  const handleFavorite = (record) => {
    // Add the recipe to favoriteRecipes
    setFavoriteRecipes((prevFavoriteRecipes) => [...prevFavoriteRecipes, record]);
  };

  return (
    <div>
      <h1>Favorite Recipes</h1>
      <Table columns={columns} dataSource={favoriteRecipes} />
    </div>
  );
};

export default QuanLyCongThucYeuThich;
