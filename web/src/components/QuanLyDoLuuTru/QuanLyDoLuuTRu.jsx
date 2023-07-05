import React, { useState } from 'react';
import { Table, Space, Modal, Button, Form, Input } from 'antd';
import reservedFoodsData from './Reserved';
const QuanLyDoLuuTru = () => {
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
          <a onClick={() => handleView(record)}>View</a>
          <a onClick={() => handleEdit(record)}>Edit</a>
          <a onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [editForm] = Form.useForm();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newIngredientForm] = Form.useForm();
  // Handle view action
  const handleView = (food) => {
    setSelectedFood(food);
    setModalVisible(true);
  };

  // Handle edit action
  const handleEdit = (food) => {
    setSelectedFood(food);
    editForm.setFieldsValue({
      description: food.description,
      quantity: food.quantity,
    });
    setModalVisible(true);
  };

  // Handle delete action
  const handleDelete = (food) => {
    // Perform delete action here
    setReservedFoods(reservedFoods.filter((item) => item.id !== food.id));
  };

  // Modal close handler
  const handleModalClose = () => {
    setSelectedFood(null);
    setModalVisible(false);
  };
  const handleModalSubmit = () => {
    editForm.validateFields().then((values) => {
      const updatedFood = {
        ...selectedFood,
        description: values.description,
        quantity: values.quantity,
      };

      const updatedFoods = reservedFoods.map((food) =>
        food.id === updatedFood.id ? updatedFood : food
      );

      setReservedFoods(updatedFoods);
      setModalVisible(false);
    });
  };
  const handleAdd = () => {
    setSelectedFood(null);
    setModalVisible(true);
  };
  const showAddModal = () => {
    setAddModalVisible(true);
  };
   const handleAddModalSubmit = () => {
    newIngredientForm.validateFields().then((values) => {
      const newIngredient = {
        id: reservedFoods.length + 1, // Generate a unique ID for the new ingredient
        name: values.name,
        description: values.description,
        storage_date: values.storage_date,
        outdate: values.outdate,
        quantity: parseInt(values.quantity),
      };

      setReservedFoods([...reservedFoods, newIngredient]);
      setAddModalVisible(false);
      newIngredientForm.resetFields();
    });
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
      visible={modalVisible}
      onCancel={handleModalClose}
      footer={[
        <Button key="close" onClick={handleModalClose}>
          Close
        </Button>,
        <Button key="save" type="primary" onClick={handleModalSubmit}>
          Save
        </Button>,
      ]}
    >
      {selectedFood && (
        <Form form={editForm} layout="vertical">
          <Form.Item
            name="description"
            label="Description"
            initialValue={selectedFood.description}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            initialValue={selectedFood.quantity}
          >
            <Input type="number" min={0} />
          </Form.Item>
        </Form>
      )}
    </Modal>
  </div>
  );
};

export default QuanLyDoLuuTru;
