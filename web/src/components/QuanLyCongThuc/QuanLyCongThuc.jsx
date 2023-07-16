import React, { useEffect, useState } from 'react';
import { Table, Space, Modal, Button, Form, Input } from 'antd';
// import reservedFoodsData from './CongThuc';
import QuanLyCongThucYeuThich from './QuanLyCongThucYeuThich'; // Import QuanLyCongThucYeuThich
import axios from 'axios';
const QuanLyCongThuc = () => {
  // Sample data for reserved foods
  const [reservedFoods, setReservedFoods] = useState([]);

  // Define the columns for the table
  const columns = [
    {
      title: 'Recipe Id',
      dataIndex: 'recipeId',
      key: 'recipeId',
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
        <Space size="mrecipeIddle">
          <a href="#1" onClick={() => handleView(record)}>
            View
          </a>
          <a href="#2" onClick={() => handleEdit(record)}>
            Edit
          </a>
          <a href="#3" onClick={() => handleDelete(record)}>
            Delete
          </a>
          <a href="#4" onClick={() => handleFavorite(record)}>
            Favorite
          </a>
        </Space>
      ),
    },
  ];

  // Modal states
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [editForm] = Form.useForm();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newIngredientForm] = Form.useForm();
  const [editedDescription, setEditedDescription] = useState('');
  const [favoriteRecipes, setFavoriteRecipes] = useState([]); // Thêm khai báo cho biến setFavoriteRecipes

  const fetchReservedFoods = async () => {
    try {
      const response = await axios.get('http://localhost:4001/recipe'); // Thay đổi URL tương ứng với API của bạn
      if (response.status === 200) {
        setReservedFoods(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchReservedFoods();
  }, []);
  // Handle view action
  const handleView = async food => {
    try {
      const response = await axios.get(
        `http://localhost:4001/recipe/${food.recipeId}`,
      );
      if (response.status === 200) {
        setSelectedFood(response.data);
        setViewModalVisible(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle edit action
  const handleEdit = food => {
    setSelectedFood(food);
    setEditedDescription(food.description); //amdkmasmdksamdlksam
    editForm.setFieldsValue({
      description: food.description,
    });
    setEditModalVisible(true);
  };

  // Handle delete action
  const handleDelete = food => {
    // Perform delete action here
    setReservedFoods(
      reservedFoods.filter(item => item.recipeId !== food.recipeId),
    );
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('listFavor'))) {
      setFavoriteRecipes(JSON.parse(localStorage.getItem('listFavor')));
    }
  }, []);
  useEffect(() => {
    if (favoriteRecipes.length > 0) {
      localStorage.setItem('listFavor', JSON.stringify(favoriteRecipes));
    }
  }, [favoriteRecipes]);

  // Handle favor action
  const handleFavorite = record => {
    // Add the recipe to favoriteRecipes
    setFavoriteRecipes(prevFavoriteRecipes => [...prevFavoriteRecipes, record]);
  };

  // View modal close handler
  const handleViewModalClose = () => {
    setSelectedFood(null);
    setViewModalVisible(false);
  };

  // Edit modal close handler
  const handleEditModalClose = () => {
    setSelectedFood(null);
    setEditModalVisible(false);
  };

  const handleModalSubmit = () => {
    editForm.valrecipeIdateFields().then(values => {
      const updatedFood = {
        ...selectedFood,
        description: values.description,
      };

      const updatedFoods = reservedFoods.map(food =>
        food.recipeId === updatedFood.recipeId ? updatedFood : food,
      );
      console.log(updatedFood);
      // setReservedFoods(updatedFoods);
      setEditModalVisible(false);
    });
  };

  // Handle add action
  const handleAdd = () => {
    setSelectedFood(null);
    setAddModalVisible(true);
  };

  const handleAddModalSubmit = () => {
    newIngredientForm.valrecipeIdateFields().then(values => {
      const newIngredient = {
        recipeId: reservedFoods.length + 1, // Generate a unique recipeId for the new ingredient
        name: values.name,
        description: values.description,
      };

      const updatedFoods = [...reservedFoods, newIngredient];
      setReservedFoods(updatedFoods);
      setAddModalVisible(false);
      newIngredientForm.resetFields();

      // Save the updated reserved foods to Reserved.js
      saveReservedFoods(updatedFoods);
    });
  };

  // Function to save the updated reserved foods to Reserved.js
  const saveReservedFoods = foods => {
    // You can customize this implementation based on your requirements
    // For example, you can use a backend API or local storage to persist the data
    // In this example, we'll simply log the updated foods to the console
    console.log('Updated Reserved Foods:', foods);
  };

  return (
    <div>
      <h1>Reserved Food List</h1>
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>

      <Table columns={columns} dataSource={reservedFoods} />

      <Modal
        title="Food Details"
        visible={viewModalVisible}
        onCancel={handleViewModalClose}
        footer={[
          <Button key="close" onClick={handleViewModalClose}>
            Close
          </Button>,
        ]}>
        {selectedFood && (
          <Form layout="vertical">
            <Form.Item label="Recipe Name">
              <Input value={selectedFood.name} readOnly />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea
                value={selectedFood.description}
                rows={4}
                readOnly
              />
            </Form.Item>
            <Form.Item label="Foods">
              <ul>
                {selectedFood.foods.map(food => (
                  <li key={food.foodId}>{food.foodNames}</li>
                ))}
              </ul>
            </Form.Item>
          </Form>
        )}
      </Modal>
      <Modal
        title="Edit Food"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        footer={[
          <Button key="close" onClick={handleEditModalClose}>
            Close
          </Button>,
          <Button key="save" type="primary" onClick={handleModalSubmit}>
            Save
          </Button>,
        ]}>
        {selectedFood && (
          <Form form={editForm} layout="vertical">
            <Form.Item
              name="description"
              label="Description"
              initialValue={selectedFood.description}>
              <Input.TextArea rows={4} />
            </Form.Item>
          </Form>
        )}
      </Modal>
      <Modal
        title="Add Food"
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        onOk={handleAddModalSubmit}>
        <Form form={newIngredientForm} layout="vertical">
          <Form.Item
            name="name"
            label="Recipe Name"
            rules={[
              {
                required: true,
                message: 'Please enter the Recipe Name',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            initialValue={editedDescription}
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}>
            <Input.TextArea
              rows={4}
              onChange={e => setEditedDescription(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default QuanLyCongThuc;
