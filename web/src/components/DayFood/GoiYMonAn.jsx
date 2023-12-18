import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
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
  const [randomRecipe, setRandomRecipe] = useState([]);

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

  const handleCheckboxChange = checkedValues => {
    setSelectedGroups(checkedValues);
  };
  // Modal chỉnh sửa close handler
  const handleEditModalClose = () => {
    setEditableRecipe(null);
    setEditModalVisible(false);
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
        setRandomRecipe(
          response.data.sort(() => Math.random() - 0.5).slice(0, 6),
        );
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

  // Apply search and filter
  const filteredFoods = reservedFoods.filter(food => {
    const nameMatch = food.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const isFavorite = favoriteRecipes.includes(food.recipeId);
    return (!filterFavorites || isFavorite) && nameMatch;
  });
  return (
    <div>
      <h1>Hôm nay là 1 ngày tuyệt vời để nấu ăn </h1>
      <h1>Bạn đã thử những món ăn này chưa </h1>

      <Row gutter={[16, 16]}>
        {randomRecipe.map((recipe, id) => (
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
