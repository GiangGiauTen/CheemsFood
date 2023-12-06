import React, { useEffect, useState } from 'react';
import {
  Card,
  Table,
  Space,
  Modal,
  Button,
  Form,
  Input,
  Tooltip,
  Checkbox,
  message,
  Pagination,
  Row,
  Col,
} from 'antd';
import {
  InfoCircleTwoTone,
  HeartTwoTone,
  ShareAltOutlined,
  DownloadOutlined,
  EditOutlined,
} from '@ant-design/icons'; // Add these imports
import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';
import jsPDF from 'jspdf';

const Meta = { Card };
const recipesPerPage = 6;

const QuanLyCongThuc = () => {
  const [reservedFoods, setReservedFoods] = useState([]);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editableRecipe, setEditableRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newFoodForm] = Form.useForm();
  useEffect(() => {
    // Fetch the list of groups for the current user
    const fetchGroups = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/group/${localStorage.getItem('userId')}`,
        );
        setGroups(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };
    fetchGroups();
  }, []);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };
  const handleCheckboxChange = checkedValues => {
    setSelectedGroups(checkedValues);
  };
  // Modal chỉnh sửa close handler
  const handleEditModalClose = () => {
    setEditableRecipe(null);
    setEditModalVisible(false);
  };

  // Modal chỉnh sửa open handler
  const handleEdit = record => {
    setEditableRecipe(record);
    setEditModalVisible(true);
  };
  const handleShareClick = () => {
    // Implement the logic to share the recipe with selected groups
    message.success('Recipe shared successfully!');

    // Close the modal
    setShareModalVisible(false);
  };

  const handleShare = record => {
    setSelectedFood(record);
    setShareModalVisible(true);
  };

  const handleDownload = async record => {
    try {
      // Fetch the recipe details from your server
      const response = await axios.get(`${API_URL}/recipe/${record.recipeId}`);
      const recipe = response.data;

      // Create a new instance of jsPDF
      const pdf = new jsPDF();

      // Set font to support Unicode characters (including Vietnamese)
      pdf.setFont('Arial', 'normal');

      // Add content to the PDF
      pdf.text(`Recipe: ${recipe.name}`, 10, 10);
      pdf.text(`Description: ${recipe.description}`, 10, 20);
      pdf.text(
        `Ingredients: ${recipe.foods.map(food => food.foodNames).join(', ')}`,
        10,
        140,
      );
      // Add more content as needed

      // Save the PDF with a specific filename
      pdf.save(`recipe_${record.recipeId}.pdf`);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  const fetchReservedFoods = async () => {
    try {
      const response = await axios.get(`${API_URL}/recipe`);
      if (response.status === 200) {
        setReservedFoods(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFavoriteRecipe = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/recipe/favorite/${localStorage.getItem('userId')}`,
      );
      if (response.status === 200) {
        console.log(response.data);
        setFavoriteRecipes(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReservedFoods();
    fetchFavoriteRecipe();
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('listFavor'))) {
      setFavoriteRecipes(JSON.parse(localStorage.getItem('listFavor')));
    }
  }, []);
  //Save
  const handleSaveEdit = async () => {
    try {
      console.log('Editable Recipe:', editableRecipe);
      await axios.patch(`${API_URL}/recipe/${editableRecipe.recipeId}`, {
        name: editableRecipe.name,
        description: editableRecipe.description,
        // Thêm các trường khác cần chỉnh sửa
      });

      // Cập nhật danh sách công thức
      fetchReservedFoods();

      message.success('Công thức đã được chỉnh sửa thành công!');
      handleEditModalClose();
    } catch (error) {
      console.error('Lỗi khi chỉnh sửa công thức:', error);
    }
  };
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
    const isFavorite = favoriteRecipes.includes(food.recipeId);
    return (!filterFavorites || isFavorite) && nameMatch;
  });
  const handleAdd = () => {
    console.log('Add new food');
    setSelectedFood(null);
    setAddModalVisible(true);
  };

  const handleAddModalSubmit = async () => {
    newFoodForm.validateFields().then(async values => {
      console.log('Received values of form:', values);
      const newRecipe = {
        name: values.name,
        description: values.description,
      };
      setAddModalVisible(false);
      try {
        const response = await axios.post(`${API_URL}/recipe`, {
          ...newRecipe,
        });
        console.log(response.status);

        if (response.status === 201) {
          message.success(
            'Add recipe to storage successfully',
            [1],
            async () => {
              await fetchReservedFoods();
            },
          );
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
      <h1>Danh sách công thức nấu ăn</h1>

      <div style={{ marginBottom: '16px' }}>
        <Input
          placeholder="Tìm món ăn"
          value={searchValue}
          onChange={handleSearchChange}
          style={{ width: '200px', marginRight: '16px' }}
        />
        <label>
          <input
            type="checkbox"
            checked={filterFavorites}
            onChange={handleFilterFavoritesChange}
          />{' '}
          Chọn những món ăn yêu thích
        </label>
      </div>
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
      <Row gutter={[16, 16]}>
        {filteredFoods
          .slice(
            (currentPage - 1) * recipesPerPage,
            currentPage * recipesPerPage,
          )
          .map((recipe, id) => (
            <Col key={id} xs={24} sm={12} md={8} lg={8}>
              <Card
                style={{ width: '100%' }}
                cover={
                  <img
                    alt="Recipe"
                    src={recipe.imgUrl}
                    style={{
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                }
                actions={[
                  <Tooltip title="Detail">
                    <a onClick={() => handleViewModal(recipe)}>
                      <InfoCircleTwoTone />
                    </a>
                  </Tooltip>,
                  <Tooltip
                    title={
                      favoriteRecipes.includes(recipe.recipeId)
                        ? 'Remove from favorite'
                        : 'Add to favorite'
                    }>
                    <a onClick={() => handleFavorite(recipe)}>
                      {favoriteRecipes.includes(recipe.recipeId) ? (
                        <HeartTwoTone twoToneColor="#eb2f96" />
                      ) : (
                        <HeartTwoTone />
                      )}
                    </a>
                  </Tooltip>,
                  <Tooltip title="Chỉnh Sửa">
                    <a onClick={() => handleEdit(recipe)}>
                      <EditOutlined />
                    </a>
                  </Tooltip>,
                  <Tooltip title="Share">
                    <a onClick={() => handleShare(recipe)}>
                      <ShareAltOutlined />
                    </a>
                  </Tooltip>,
                  <Tooltip title="Download">
                    <a onClick={() => handleDownload(recipe)}>
                      <DownloadOutlined />
                    </a>
                  </Tooltip>,
                ]}>
                <Card.Meta
                  title={recipe.name}
                  description={
                    <div
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}>
                      {recipe.description}
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
      </Row>

      <Pagination
        current={currentPage}
        pageSize={recipesPerPage}
        total={filteredFoods.length}
        onChange={handlePageChange}
      />

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
                {selectedFood.foods ? (
                  <ul>
                    {selectedFood.foods.map(food => (
                      <li key={food.foodId}>{food.foodNames}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No nguyên liệu available for this recipe.</p>
                )}
              </ul>
            </Form.Item>
          </Form>
        )}
      </Modal>
      <Modal
        title="Add Food"
        visible={addModalVisible}
        onCancel={() => setAddModalVisible(false)}
        onOk={handleAddModalSubmit}>
        <Form form={newFoodForm} layout="vertical">
          <Form.Item
            name="name"
            label="name"
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
            label="description"
            rules={[
              {
                required: true,
                message: 'Please enter the description',
              },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Chỉnh Sửa Công Thức"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        footer={[
          <Button key="cancel" onClick={handleEditModalClose}>
            Hủy
          </Button>,
          <Button key="save" type="primary" onClick={handleSaveEdit}>
            Lưu
          </Button>,
        ]}>
        {editableRecipe && (
          <Form layout="vertical">
            <Form.Item label="Tên món ăn">
              <Input
                value={editableRecipe.name}
                onChange={e =>
                  setEditableRecipe({
                    ...editableRecipe,
                    name: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Cách làm">
              <Input.TextArea
                value={editableRecipe.description}
                rows={4}
                onChange={e =>
                  setEditableRecipe({
                    ...editableRecipe,
                    description: e.target.value,
                  })
                }
              />
            </Form.Item>
            {/* Thêm các trường khác cần chỉnh sửa */}
          </Form>
        )}
      </Modal>
      <Modal
        title="Share Recipe"
        visible={shareModalVisible}
        onCancel={() => setShareModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setShareModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="share" type="primary" onClick={handleShareClick}>
            Share
          </Button>,
        ]}>
        <p>Select groups to share the recipe:</p>
        {groups && groups.length > 0 ? (
          <Checkbox.Group
            style={{ width: '100%' }}
            onChange={handleCheckboxChange}
            value={selectedGroups}>
            {groups.map(group => (
              <Checkbox key={group.groupId} value={group.groupId}>
                {group.name}
              </Checkbox>
            ))}
          </Checkbox.Group>
        ) : (
          <p>No groups available.</p>
        )}
      </Modal>
    </div>
  );
};

export default QuanLyCongThuc;
