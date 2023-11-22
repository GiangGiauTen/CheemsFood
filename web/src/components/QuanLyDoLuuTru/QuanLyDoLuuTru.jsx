import React, { useState, useEffect } from 'react';
import { Table, Space, Modal, Button, Form, Input, Checkbox, Select, DatePicker, message } from 'antd';
import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';

import moment from 'moment';
import 'moment/locale/vi';
const QuanLyDoLuuTru = () => {
    // Reserved foods state
    const [messageApi, contextHolder] = message.useMessage();
    const [reservedFoods, setReservedFoods] = useState([]);
    const [allFoods, setAllFoods] = useState([]);
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [showOutdated, setShowOutdated] = useState(false);
    useEffect(() => {
        // Fetch the reserved foods data from the endpoint when the component mounts
        fetchReservedFoods();
        fetchAllFoods()
    }, []);

    const fetchReservedFoods = async () => {
        try {
            const response = await axios.get(
                `${API_URL}/storage/user/${parseInt(userId)}`,
            );
            setReservedFoods(response.data.foods); // Update to response.data.foods since the API response contains the foods array
        } catch (error) {
            console.error('Error fetching reserved foods:', error);
        }
    };

    const fetchAllFoods = async () => {
        try {
            const response = await axios.get(`${API_URL}/food`);
            setAllFoods(
                response.data.map(food => {
                    return { value: food.foodId, label: food.name };
                }),
            );
        } catch (error) {
            console.error('Error fetching reserved foods:', error);
        }
    };

    const saveReservedFoods = async foods => {
        try {
            await axios.post(`${API_URL}/storage/user/${userId}`, { foods }); // Pass the foods array as the request body
            console.log('Reserved foods saved successfully');
        } catch (error) {
            console.error('Error saving reserved foods:', error);
        }
    };

    // Define the columns for the table
    const columns = [
        {
            title: 'ID',
            dataIndex: 'food.foodId',
            key: 'foodId',
            render: (text, record) => record.food.foodId, // Render the food ID value
        },
        {
            title: 'Food Name',
            dataIndex: 'food.name',
            key: 'name',
            render: (text, record) => record.food.name, // Render the food name value
        },
        {
            title: 'Image',
            dataIndex: 'food.imageUrl',
            key: 'name',
            render: (text, record) => <img src={record.food.imageUrl} height={80} />, // Render the food name value
        },
        {
            title: 'Storage Date',
            dataIndex: 'storageDate',
            key: 'storageDate',
            render: date => new Date(date).toLocaleDateString(), // Format the date
        },
        {
            title: 'Outdate',
            dataIndex: 'outdate',
            key: 'outdate',
            render: date => new Date(date).toLocaleDateString(), // Format the date
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
                    <a
                        href="#3"
                        onClick={() => handleDelete(record)}
                        style={{ color: 'red' }}>
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
    const [searchValue, setSearchValue] = useState('');

    // Search input change handler
    const handleSearchChange = e => {
        setSearchValue(e.target.value);
    };
    // Apply search and filter
    const filteredFoods = reservedFoods.filter(food => {
        const nameMatch = food.food.name
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        const outdateBefore = moment(food.outdate).isBefore(moment(), 'day');
        return showOutdated ? outdateBefore && nameMatch : nameMatch;
    });
    // Handle view action
    const handleView = food => {
        setSelectedFood(food);
        setViewModalVisible(true);
    };

    // Handle edit action
    const handleEdit = food => {
        setSelectedFood(food);
        editForm.setFieldsValue({
            description: food.food.description,
            quantity: food.quantity,
        });
        setEditModalVisible(true);
    };

    // Handle delete action
    const handleDelete = food => {
        // Perform delete action here
        setReservedFoods(prevFoods =>
            prevFoods.filter(item => item.food.foodId !== food.food.foodId),
        );
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
                food: {
                    ...selectedFood.food,
                    description: values.description,
                },
                quantity: values.quantity,
            };

            if (values.quantity === 0) {
                setReservedFoods(prevFoods =>
                    prevFoods.filter(
                        food => food.food.foodId !== updatedFood.food.foodId,
                    ),
                );
            } else {
                setReservedFoods(prevFoods =>
                    prevFoods.map(food => {
                        if (food.food.foodId === updatedFood.food.foodId) {
                            return updatedFood;
                        }
                        return food;
                    }),
                );
            }

            setEditModalVisible(false);
        });
    };
    const editFormInitialValues = {
        description: selectedFood?.food?.description,
        quantity: selectedFood?.quantity,
    };
    // Handle add action
    const handleAdd = () => {
        setSelectedFood(null);
        setAddModalVisible(true);
    };

    const handleAddModalSubmit = async () => {
        newIngredientForm.validateFields().then(async values => {
            const newIngredient = {
                food: {
                    foodId: values.name,
                    description: values.description,
                    outdate: (new Date(values.outdate)).toLocaleDateString(),
                    storageDate: (new Date(values.storage_date)).toLocaleDateString(),
                    quantity: parseInt(values.quantity),
                },
            };

            setAddModalVisible(false);

            try {
                const response = await axios.post(
                    `${API_URL}/storage/user/${userId}`, { ...newIngredient }
                );

                console.log(response.status);

                if (response.status === 201) {
                    message.success('Add food to storage successfully',
                        [1], async () => {
                            await fetchReservedFoods();
                        });
                } else {
                    console.error('Unexpected status code:', response.status);
                }

            } catch (error) {
                console.error('Error fetching reserved foods:', error);
            }
        });
    };


    return (
        <div>
            {/* <h1>Reserved Food List</h1> */}
            <div style={{ marginBottom: '16px' }}>
                <Input
                    placeholder="Tìm món ăn"
                    value={searchValue}
                    onChange={handleSearchChange}
                    style={{ width: '200px', marginRight: '16px' }}
                />
                <Checkbox
                    onChange={e => setShowOutdated(e.target.checked)}
                    style={{ marginRight: '16px' }}>
                    Lọc ra đồ ăn đã hết hạn
                </Checkbox>
            </div>
            <Button type="primary" onClick={handleAdd}>
                Add
            </Button>
            <Table columns={columns} dataSource={filteredFoods} />
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
                            <Input value={selectedFood.food.name} readOnly />
                        </Form.Item>
                        <Form.Item label="Description">
                            <Input.TextArea
                                value={selectedFood.food.description}
                                rows={4}
                                readOnly
                            />
                        </Form.Item>
                        <Form.Item label="Storage Date">
                            <Input value={selectedFood.storageDate} readOnly />
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
                    <Form
                        form={editForm}
                        layout="vertical"
                        initialValues={editFormInitialValues}>
                        <Form.Item name="description" label="Description">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                        <Form.Item name="quantity" label="Quantity">
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
                        <Select options={allFoods} optionFilterProp="label" showSearch></Select>
                    </Form.Item>
                    <Form.Item
                        name="storage_date"
                        label="Storage Date"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter the storage date',
                            },
                        ]}>
                        <DatePicker />
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
                        <DatePicker />
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
export default QuanLyDoLuuTru;
