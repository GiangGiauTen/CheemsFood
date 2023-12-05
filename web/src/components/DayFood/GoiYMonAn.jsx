import React, { useEffect, useState } from 'react';
import { Table, Space, Modal, Button, Form, Input, Tooltip } from 'antd';
import { InfoCircleTwoTone, HeartTwoTone } from '@ant-design/icons';
import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';

const QuanLyCongThuc = () => {
  const [reservedFoods, setReservedFoods] = useState([]);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterFavorites, setFilterFavorites] = useState(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'recipeId',
      key: 'recipeId',
    },
    {
      title: 'Tên món ăn',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cách làm',
      dataIndex: 'description',
      key: 'description',
      render: text => {
        return String(text).split(' ').slice(0, 50).join(' ') + ' ...';
      },
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Tooltip title="Detail">
            <a onClick={() => handleViewModal(record)}>
              <InfoCircleTwoTone />
            </a>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const fetchReservedFoods = async () => {
    try {
      const response = await axios.get(`${API_URL}/recipe`);
      if (response.status === 200) {
        // Shuffle the array to get random items
        const shuffledFoods = response.data.sort(() => Math.random() - 0.5);
        // Take only the first 5 items
        const selectedFoods = shuffledFoods.slice(0, 5);
        setReservedFoods(selectedFoods);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReservedFoods();
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('listFavor'))) {
      setFavoriteRecipes(JSON.parse(localStorage.getItem('listFavor')));
    }
  }, []);

  // Handle favor action
  const handleFavorite = async record => {
    await axios.post(`${API_URL}/recipe/favorite`, {
      userId: parseInt(localStorage.getItem('userId')),
      recipeId: record.recipeId,
    });
    if (favoriteRecipes.includes(record.recipeId))
      setFavoriteRecipes(favoriteRecipes.filter(e => e !== record.recipeId));
    else
      setFavoriteRecipes(prevFavoriteRecipes => [
        ...prevFavoriteRecipes,
        record.recipeId,
      ]);
  };

  // View modal close handler
  const handleViewModalClose = () => {
    setSelectedFood(null);
    setViewModalVisible(false);
  };

  // View modal open handler
  const handleViewModal = async record => {
    await axios.get(`${API_URL}/recipe/${record.recipeId}`).then(response => {
      console.log(response);
      setSelectedFood(response.data);
      setViewModalVisible(true);
    });
  };

  // Search input change handler
  const handleSearchChange = e => {
    setSearchValue(e.target.value);
  };

  // Filter favorites checkbox change handler
  const handleFilterFavoritesChange = e => {
    setFilterFavorites(e.target.checked);
  };

  // Apply search and filter
  const filteredFoods = reservedFoods.filter(food => {
    const nameMatch = food.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return !filterFavorites || nameMatch;
  });

  return (
    <div>
      <h1>Món ăn của ngày</h1>
      <h2>
        Thay vì phải đau đầu suy nghĩ sao không thử nhìn qua những món ăn dưới
        đây nhỉ
      </h2>
      <div style={{ marginBottom: '16px' }}>
        <Input
          placeholder="Tìm món ăn"
          value={searchValue}
          onChange={handleSearchChange}
          style={{ width: '200px', marginRight: '16px' }}
        />
      </div>

      <Table columns={columns} dataSource={filteredFoods} />

      <Modal
        title="Food Details"
        visible={viewModalVisible}
        onCancel={handleViewModalClose}
        footer={[
          <Button key="close" onClick={handleViewModalClose}>
            Đóng
          </Button>,
        ]}>
        {selectedFood && (
          <Form layout="vertical">
            <Form.Item label="Tên món ăn">
              <Input value={selectedFood.name} readOnly />
            </Form.Item>
            <Form.Item label="Cách làm">
              <Input.TextArea
                value={selectedFood.description}
                rows={4}
                readOnly
              />
            </Form.Item>
            <Form.Item label="Nguyên liệu">
              <ul>
                {selectedFood.foods.map(food => (
                  <li key={food.foodId}>{food.foodNames}</li>
                ))}
              </ul>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default QuanLyCongThuc;
