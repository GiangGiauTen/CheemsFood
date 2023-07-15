import React, { useEffect, useState } from 'react';
import { Table, Space, Modal, Button, Form, Input } from 'antd';
import reservedFoodsData from './CongThuc';
const QuanLyCongThucYeuThich = () => {
  // State for the favorite recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [reservedFoods, setReservedFoods] = useState(reservedFoodsData);
  useEffect(() =>{
    setFavoriteRecipes(JSON.parse(localStorage.getItem("listFavor")));
  },[])
  // Define the columns for the table
  // useEffect(()=> {
  //   setFavoriteRecipes(JSON.parse(localStorage.getItem("listFavor")));
  // },[favoriteRecipes])
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
      render: (text, record,position) => (
        <Space size="middle">
          <a href="#1" onClick={() => handleView(record)}>View</a>
          <a href="#2" onClick={() => handleEdit(record)}>Edit</a>
          <a href="#3" onClick={() => handleDelete(record,text,position)}>Delete</a>
        </Space>
      ),
    },
  ];
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [editForm] = Form.useForm();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newIngredientForm] = Form.useForm();
  const [editedDescription, setEditedDescription] = useState('');
  // Handle view action
  const handleView = (record) => {
    // Handle view action
    setSelectedFood(record);
    setViewModalVisible(true);
  };

  // Handle edit action
  const handleEdit = (record) => {
    // Handle edit action
    setSelectedFood(record);
    setEditedDescription(record.description);              //amdkmasmdksamdlksam
    editForm.setFieldsValue({
      description: record.description,
  
    });
    setEditModalVisible(true);
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
       editForm.validateFields().then((values) => {
        const updatedFood = {
          ...selectedFood,
          description: values.description,
        };
    
        const updatedFoods = favoriteRecipes.map((food) =>
          food.id === updatedFood.id ? updatedFood : food
        );
        // localStorage.setItem("listFavor",JSON.stringify(updatedFoods)) // F5 k mất thông tin edit
        setFavoriteRecipes(updatedFoods);
        setEditModalVisible(false);
      });
    };

   // Handle delete action
  const handleDelete = async (record,text,position) => {
    // Perform delete action here
    await setFavoriteRecipes(favoriteRecipes.splice(position,1));
    if(favoriteRecipes.length === 0){
      setFavoriteRecipes(null);
    }
    await localStorage.setItem("listFavor",JSON.stringify(favoriteRecipes))
    setFavoriteRecipes(JSON.parse(localStorage.getItem("listFavor")));
  };

  return (
    <div>
      <Modal
        title="Food Details"
        visible={viewModalVisible}
        onCancel={handleViewModalClose}
        footer={[
          <Button key="close" onClick={handleViewModalClose}>
            Close
          </Button>,
        ]}
      >
        {selectedFood && (
          <Form layout="vertical">
            <Form.Item label="Recipe Name">
              <Input value={selectedFood.name} readOnly />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea value={selectedFood.description} rows={4} readOnly />
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
            
          </Form>
        )}
      </Modal>
      <h1>Favorite Recipes</h1>
      <Table columns={columns} dataSource={favoriteRecipes} />
    </div>
  );
};

export default QuanLyCongThucYeuThich;
