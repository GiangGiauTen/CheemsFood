import React, { useEffect, useState } from 'react'
import { Table, Space, Modal, Button, Form, Input, Tooltip, Checkbox, message } from 'antd'
import { InfoCircleTwoTone, HeartTwoTone, ShareAltOutlined, DownloadOutlined } from '@ant-design/icons';  // Add these imports
import axios from 'axios'
import { API_URL } from '../../utils/apiUrl'

const QuanLyCongThuc = () => {
	const [reservedFoods, setReservedFoods] = useState([])
	const [viewModalVisible, setViewModalVisible] = useState(false)
	const [selectedFood, setSelectedFood] = useState(null)
	const [favoriteRecipes, setFavoriteRecipes] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [filterFavorites, setFilterFavorites] = useState(false)
	const [shareModalVisible, setShareModalVisible] = useState(false);
	const [groups, setGroups] = useState([]);
	const [selectedGroups, setSelectedGroups] = useState([]);
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
			render: (text) => {
				return String(text).split(' ').slice(0, 50).join(' ') + ' ...'
			},
		},
		{
			title: '',
			key: 'action',
			render: (text, record) => (
				<Space size='middle'>
					<Tooltip title='Detail'>
						<a onClick={() => handleViewModal(record)}>
							<InfoCircleTwoTone />
						</a>
					</Tooltip>
					<Tooltip title={favoriteRecipes.includes(record.recipeId) ? 'Remove from favorite' : 'Add to favorite'}>
						<a onClick={() => handleFavorite(record)}>
							{favoriteRecipes.includes(record.recipeId) ? <HeartTwoTone twoToneColor='#eb2f96' /> : <HeartTwoTone />}
						</a>
					</Tooltip>
					<Tooltip title='Share'>
						<a onClick={() => handleShare(record)}>
							<ShareAltOutlined />
						</a>
					</Tooltip>
					<Tooltip title='Download'>
						<a onClick={() => handleDownload(record)}>
							<DownloadOutlined />
						</a>
					</Tooltip>
				</Space>
			),
		},

	]

	useEffect(() => {
		// Fetch the list of groups for the current user
		const fetchGroups = async () => {
			try {
				const response = await axios.get(`${API_URL}/group/${localStorage.getItem('userId')}`);
				setGroups(response.data);
				console.log(response.data);
			} catch (error) {
				console.error('Error fetching groups:', error);
			}
		};

		fetchGroups();
	}, []);

	const handleCheckboxChange = (checkedValues) => {
		setSelectedGroups(checkedValues);
	};

	const handleShareClick = () => {
		// Implement the logic to share the recipe with selected groups
		message.success('Recipe shared successfully!');

		// Close the modal
		setShareModalVisible(false);
	};

	const handleShare = (record) => {
		setSelectedFood(record);
		setShareModalVisible(true);
	};

	const handleDownload = async (record) => {
		try {
			// Replace 'YOUR_RESTPACK_API_KEY' with your actual Restpack API key
			const apiKey = axios.get(`${API_URL}/recipe/${record.recipeId}`);
			const restpackApiUrl = 'https://restpack.io/api/html2pdf/v6/convert';

			const htmlContent = `
			<html>
			  <head>
				<title>${record.name} Recipe</title>
			  </head>
			  <body>
				<h1>${record.name}</h1>
				<p>${record.description}</p>
				<!-- Add more content as needed -->
			  </body>
			</html>
		  `;

			const response = await axios.post(restpackApiUrl, {
				source: htmlContent,
				options: {
					// Add any additional options as needed, check Restpack documentation
				},
			}, {
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': apiKey,
				},
				responseType: 'arraybuffer', // Tell axios to expect a binary response
			});

			// Create a Blob from the binary response
			const blob = new Blob([response.data], { type: 'application/pdf' });

			// Create a download link
			const downloadLink = document.createElement('a');
			downloadLink.href = URL.createObjectURL(blob);
			downloadLink.download = `recipe_${record.recipeId}.pdf`;

			// Append the link to the body and click it programmatically
			document.body.appendChild(downloadLink);
			downloadLink.click();

			// Remove the link from the DOM
			document.body.removeChild(downloadLink);
		} catch (error) {
			console.error('Error downloading PDF:', error);
		}
	};
	const fetchReservedFoods = async () => {
		try {
			const response = await axios.get(`${API_URL}/recipe`)
			if (response.status === 200) {
				setReservedFoods(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const fetchFavoriteRecipe = async () => {
		try {
			const response = await axios.get(`${API_URL}/recipe/favorite/${localStorage.getItem('userId')}`)
			if (response.status === 200) {
				console.log(response.data)
				setFavoriteRecipes(response.data)
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchReservedFoods()
		fetchFavoriteRecipe()
	}, [])

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('listFavor'))) {
			setFavoriteRecipes(JSON.parse(localStorage.getItem('listFavor')))
		}
	}, [])

	// Handle favor action
	const handleFavorite = async (record) => {
		await axios.post(`${API_URL}/recipe/favorite`, {
			userId: parseInt(localStorage.getItem('userId')),
			recipeId: record.recipeId,
		})
		if (favoriteRecipes.includes(record.recipeId))
			setFavoriteRecipes(favoriteRecipes.filter((e) => e !== record.recipeId))
		else setFavoriteRecipes((prevFavoriteRecipes) => [...prevFavoriteRecipes, record.recipeId])
	}

	// View modal close handler
	const handleViewModalClose = () => {
		setSelectedFood(null)
		setViewModalVisible(false)
	}

	// View modal open handler
	const handleViewModal = async (record) => {
		await axios.get(`${API_URL}/recipe/${record.recipeId}`).then((response) => {
			console.log(response)
			setSelectedFood(response.data)
			setViewModalVisible(true)
		})
	}

	// Search input change handler
	const handleSearchChange = (e) => {
		setSearchValue(e.target.value)
	}

	// Filter favorites checkbox change handler
	const handleFilterFavoritesChange = (e) => {
		setFilterFavorites(e.target.checked)
	}

	// Apply search and filter
	const filteredFoods = reservedFoods.filter((food) => {
		const nameMatch = food.name.toLowerCase().includes(searchValue.toLowerCase())
		const isFavorite = favoriteRecipes.includes(food.recipeId)
		return (!filterFavorites || isFavorite) && nameMatch
	})

	return (
		<div>
			<h1>Danh sách công thức nấu ăn</h1>

			<div style={{ marginBottom: '16px' }}>
				<Input
					placeholder='Tìm món ăn'
					value={searchValue}
					onChange={handleSearchChange}
					style={{ width: '200px', marginRight: '16px' }}
				/>
				<label>
					<input type='checkbox' checked={filterFavorites} onChange={handleFilterFavoritesChange} /> Chọn những món ăn
					yêu thích
				</label>
			</div>

			<Table columns={columns} dataSource={filteredFoods} />

			<Modal
				title='Food Details'
				visible={viewModalVisible}
				onCancel={handleViewModalClose}
				footer={[
					<Button key='close' onClick={handleViewModalClose}>
						Đóng
					</Button>,
				]}>
				{selectedFood && (
					<Form layout='vertical'>
						<Form.Item label='Tên món ăn'>
							<Input value={selectedFood.name} readOnly />
						</Form.Item>
						<Form.Item label='Cách làm'>
							<Input.TextArea value={selectedFood.description} rows={4} readOnly />
						</Form.Item>
						<Form.Item label='Nguyên liệu'>
							<ul>
								{selectedFood.foods ? (
									<ul>
										{selectedFood.foods.map((food) => (
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
				title='Share Recipe'
				visible={shareModalVisible}
				onCancel={() => setShareModalVisible(false)}
				footer={[
					<Button key='cancel' onClick={() => setShareModalVisible(false)}>
						Cancel
					</Button>,
					<Button key='share' type='primary' onClick={handleShareClick}>
						Share
					</Button>,
				]}
			>
				<p>Select groups to share the recipe:</p>
				{groups && groups.length > 0 ? (
					<Checkbox.Group style={{ width: '100%' }} onChange={handleCheckboxChange} value={selectedGroups}>
						{groups.map((group) => (
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
	)
}

export default QuanLyCongThuc
