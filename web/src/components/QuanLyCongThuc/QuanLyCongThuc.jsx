import React, { useEffect, useState } from 'react'
import { Table, Space, Modal, Button, Form, Input, Tooltip } from 'antd'
import { InfoCircleTwoTone, HeartTwoTone } from '@ant-design/icons'
import axios from 'axios'
import { API_URL } from '../../utils/apiUrl'

const QuanLyCongThuc = () => {
	const [reservedFoods, setReservedFoods] = useState([])
	const [viewModalVisible, setViewModalVisible] = useState(false)
	const [selectedFood, setSelectedFood] = useState(null)
	const [favoriteRecipes, setFavoriteRecipes] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [filterFavorites, setFilterFavorites] = useState(false)

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
				</Space>
			),
		},
	]

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
								{selectedFood.foods.map((food) => (
									<li key={food.foodId}>{food.foodNames}</li>
								))}
							</ul>
						</Form.Item>
					</Form>
				)}
			</Modal>
		</div>
	)
}

export default QuanLyCongThuc
