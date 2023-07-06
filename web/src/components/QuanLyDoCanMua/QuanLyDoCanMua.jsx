import React, { useState } from 'react';
import { Table, Space, Modal, Button, Form, Input } from 'antd';
import reservedFoodsData from './Reserved';

const QuanLyDoCanMua = () => {
  // Sample data for reserved foods
  const [reservedFoods, setReservedFoods] = useState(reservedFoodsData);

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
          <a href="#1" onClick={() => handleView(record)}>
            View
          </a>
          <a href="#2" onClick={() => handleEdit(record)}>
            Edit
          </a>
          <a href="#3" onClick={() => handleDelete(record)}>
            Delete
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

  // Handle view action
  const handleView = food => {
    setSelectedFood(food);
    setViewModalVisible(true);
  };

  // Handle edit action
  const handleEdit = food => {
    setSelectedFood(food);
    editForm.setFieldsValue({
      description: food.description,
      quantity: food.quantity,
    });
    setEditModalVisible(true);
  };

  // Handle delete action
  const handleDelete = food => {
    // Perform delete action here
    setReservedFoods(reservedFoods.filter(item => item.id !== food.id));
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
    editForm.validateFields().then(values => {
      const updatedFood = {
        ...selectedFood,
        description: values.description,
        quantity: values.quantity,
      };

      const updatedFoods = reservedFoods.map(food =>
        food.id === updatedFood.id ? updatedFood : food,
      );

      setReservedFoods(updatedFoods);
      setEditModalVisible(false);
    });
  };

  // Handle add action
  const handleAdd = () => {
    setSelectedFood(null);
    setAddModalVisible(true);
  };

  const handleAddModalSubmit = () => {
    newIngredientForm.validateFields().then(values => {
      const newIngredient = {
        id: reservedFoods.length + 1, // Generate a unique ID for the new ingredient
        name: values.name,
        description: values.description,

        outdate: values.outdate,
        quantity: parseInt(values.quantity),
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
            <Form.Item label="Food Name">
              <Input value={selectedFood.name} readOnly />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea
                value={selectedFood.description}
                rows={4}
                readOnly
              />
            </Form.Item>

            <Form.Item label="Outdate">
              <Input value={selectedFood.outdate} readOnly />
            </Form.Item>
            <Form.Item label="Quantity">
              <Input value={selectedFood.quantity} readOnly />
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
            <Form.Item
              name="quantity"
              label="Quantity"
              initialValue={selectedFood.quantity}>
              <Input type="number" min={0} />
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
            label="Food Name"
            rules={[
              {
                required: true,
                message: 'Please enter the food name',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}>
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="outdate"
            label="Outdate"
            rules={[
              {
                required: true,
                message: 'Please enter the outdate',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
                message: 'Please enter the quantity',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || /^[0-9]+$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'Please enter a valid integer for quantity',
                  );
                },
              }),
            ]}>
            <Input type="number" min={0} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default QuanLyDoCanMua;
