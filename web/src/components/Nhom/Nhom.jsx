import React, { useEffect, useState } from 'react'
import { Table, Input, Modal, Form, Button, Space, message } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import moment from 'moment'
import users from './User'
import axios from 'axios'
import { API_URL } from '../../utils/apiUrl'

const { Search } = Input

const Nhom = () => {
	const [searchText, setSearchText] = useState(null)
	const [selectedRowData, setSelectedRowData] = useState([])
	const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] = useState(false)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [isModalVisible2, setIsModalVisible2] = useState(false)
	const [selectedUsers, setSelectedUsers] = useState(users)
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				await axios.get(`${API_URL}/group/${localStorage.getItem('userId')}`).then((res) => {
					if (res.status == 200) setData(res.data)
					else message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau')
				})
			} catch (error) {
				message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau')
			}
		}
		fetchData()
	}, [])

	const handleSearch = (value) => {
		setSearchText(value)
	}

	const handleRowClick = async (record) => {
		try {
			await axios.get(`${API_URL}/group/${record.groupId}/detail`).then((res) => {
				if (res.status == 200) setSelectedRowData(res.data)
				else message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau')
			})
		} catch (error) {
			message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau')
		}
		setIsModalVisible2(true)
	}
	const handleSearchUsers = (value) => {
		const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()))
		setSelectedUsers(filteredUsers)
	}
	// Hàm thêm người tham gia
	const addParticipant = () => {
		setIsAddParticipantFormVisible(!isAddParticipantFormVisible)
	}
	const handleEdit = (record) => {
		setSelectedRowData(record)
		setIsModalVisible(true)
	}

	const handleModalClose = () => {
		setIsModalVisible(false)
		setIsModalVisible2(false)
	}
	const handleDelete = (index) => {
		const updatedParticipants = [...selectedRowData.nguoiThamGia]
		updatedParticipants.splice(index, 1)
		const updatedData = data.map((item) => {
			if (item.groupId === selectedRowData.groupId) {
				return {
					...item,
					nguoiThamGia: updatedParticipants,
				}
			}
			return item
		})
		setData(updatedData)
		setSelectedRowData((prevMeeting) => ({
			...prevMeeting,
			nguoiThamGia: updatedParticipants,
		}))
	}
	const handleSelectUser = (user) => {
		const updatedSelectedRowData = {
			...selectedRowData,
			nguoiThamGia: [
				...selectedRowData.nguoiThamGia,
				{
					name: user.name,
					role: user.role,
				},
			],
		}

		setSelectedRowData(updatedSelectedRowData)

		const updatedData = data.map((record) => {
			if (record.groupId === selectedRowData.groupId) {
				return updatedSelectedRowData
			}
			return record
		})

		setData(updatedData)
	}
	const handleFormSubmit = (values) => {
		// Thực hiện cập nhật dữ liệu trong state `data` với giá trị mới từ `values`
		const updatedData = data.map((record) => {
			if (record.groupId === selectedRowData.groupId) {
				return {
					...record,
					name: values.name,
					adminName: values.adminName,
					nguoiThamGia: values.nguoiThamGia,
				}
			}
			return record
		})
		setData(updatedData)
		setIsModalVisible(false)
	}
	const columns = [
		{
			title: 'Mã Nhóm',
			dataIndex: 'groupId',
		},
		{
			title: 'Tên nhóm',
			dataIndex: 'name',
		},
		{
			title: 'Thao tác',
			key: 'isGroupAdmin',
			render: (text, record) => (
				<Space size='middle'>
					<a href='#1' onClick={() => handleRowClick(record)}>
						View
					</a>
					{record.isGroupAdmin && (
						<a href='#2' onClick={() => handleEdit(record)}>
							Edit
						</a>
					)}
				</Space>
			),
		},
	]

	const filteredData = searchText
		? data.filter(
				(record) =>
					columns &&
					Array.isArray(columns) &&
					columns.some(
						(column) =>
							record[column.dataIndex] &&
							record[column.dataIndex].toString().toLowerCase().includes(searchText.toLowerCase()),
					),
		  )
		: data

	return (
		<div>
			<Search
				placeholder='Tìm kiếm'
				value={searchText}
				onChange={(e) => handleSearch(e.target.value)}
				style={{ width: 200, marginBottom: 16 }}
			/>
			<Table columns={columns} dataSource={filteredData} />

			<Modal title='Thông tin Nhóm' visible={isModalVisible2} onCancel={handleModalClose} footer={null}>
				{selectedRowData && (
					<div>
						<p>
							<strong>Mã nhóm:</strong> {selectedRowData.groupId}
						</p>
						<p>
							<strong>Tên nhóm:</strong> {selectedRowData.name}
						</p>
						<p>
							<strong>Người Tạo:</strong> {selectedRowData.users?.find((e) => e.isGroupAdmin).name}
						</p>
						<p>
							<strong>Người tham gia:</strong>
						</p>
						<Table
							size='small'
							bordered
							dataSource={selectedRowData.users}
							pagination={false}
							columns={[
								{
									title: 'Tên',
									dataIndex: 'name',
									key: 'name',
								},
								{
									title: 'Vai Trò',
									dataIndex: 'isGroupAdmin',
									key: 'isGroupAdmin',
									render: (e) => (e ? 'Nhóm trưởng' : 'Thành viên'),
								},
							]}
						/>
					</div>
				)}
			</Modal>

			<Modal title='Thông tin nhóm' visible={isModalVisible} onCancel={handleModalClose} footer={null}>
				{selectedRowData && (
					<Form onFinish={handleFormSubmit} initialValues={selectedRowData}>
						<Form.Item label='Mã nhóm'>
							<span>{selectedRowData.groupId}</span>
						</Form.Item>
						<Form.Item label='Tên nhóm' name='name' rules={[{ required: true, message: 'Vui lòng nhập tên nhóm!' }]}>
							<Input />
						</Form.Item>
						<Form.Item
							label='Người tạo'
							name='adminName'
							rules={[{ required: true, message: 'Vui lòng nhập tên người tạo!' }]}>
							<Input />
						</Form.Item>
						<Form.Item
							label='Người tham gia'
							name='nguoiThamGia'
							rules={[{ required: true, message: 'Vui lòng nhập người tham gia!' }]}>
							<Table
								size='small'
								bordered
								dataSource={selectedRowData.nguoiThamGia}
								pagination={false}
								columns={[
									{
										title: 'Tên',
										dataIndex: 'name',
										key: 'name',
									},
									{
										title: 'Vai Trò',
										dataIndex: 'role',
										key: 'role',
									},
									{
										title: 'Thao tác',
										key: 'action',
										render: (_, record, index) => (
											<a href='#4' onClick={() => handleDelete(index)}>
												Xóa
											</a>
										),
									},
								]}
							/>
						</Form.Item>
						<Form.Item>
							<Button type='primary'>Thêm thành viên</Button>
						</Form.Item>
					</Form>
				)}
			</Modal>
		</div>
	)
}

export default Nhom
