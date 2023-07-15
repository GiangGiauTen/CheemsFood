import React, { useEffect, useState } from 'react'
import { Table, Input, Modal, Form, Button, Space, message, Divider } from 'antd'
import axios from 'axios'
import { API_URL } from '../../utils/apiUrl'
import AddGroup from './AddGroup'

const { Search } = Input

const Nhom = () => {
	const [form] = Form.useForm()
	const [searchText, setSearchText] = useState(null)
	const [selectedRowData, setSelectedRowData] = useState([])
	const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] = useState(false)
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [isModalVisible2, setIsModalVisible2] = useState(false)
	const [data, setData] = useState([])
	const [tmpUserId, setTmpUserId] = useState(null)

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

	const fetchGroupData = async (groupId) => {
		try {
			await axios.get(`${API_URL}/group/${groupId}/detail`).then((res) => {
				if (res.status == 200) setSelectedRowData(res.data)
				else message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau')
			})
		} catch (error) {
			message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau')
		}
	}
	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		fetchData()
	}, [isCreateModalOpen])

	const handleSearch = (value) => {
		setSearchText(value)
	}

	const handleRowClick = async (record) => {
		await fetchGroupData(record.groupId)
		setIsModalVisible2(true)
	}

	const handleEdit = async (record) => {
		await fetchGroupData(record.groupId)
		setIsModalVisible(true)
	}

	const handleModalClose = () => {
		setIsModalVisible(false)
		setIsModalVisible2(false)
	}
	const handleFormSubmit = async () => {
		await axios
			.patch(`${API_URL}/group/${selectedRowData.groupId}`, { name: form.getFieldValue('name') })
			.then((res) => {
				if (res.status == 200) {
					message.success('Cập nhật thông tin nhóm thành công', [2], () => {
						fetchData()
						setIsModalVisible(false)
					})
				} else {
					message.error('Có lỗi xảy ra, vui lòng thử lại sau', [2])
				}
			})
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
			<Button
				onClick={() => {
					setIsCreateModalOpen(true)
				}}>
				Tạo nhóm
			</Button>
			<Modal
				title='Tạo nhóm'
				open={isCreateModalOpen}
				footer={null}
				onCancel={() => {
					setIsCreateModalOpen(false)
				}}>
				<AddGroup setIsCreateModalOpen={setIsCreateModalOpen} />
			</Modal>
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
							<strong>Thành viên:</strong>
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

			<Modal title='Thông tin nhóm' open={isModalVisible} onOk={handleFormSubmit} onCancel={handleModalClose}>
				{selectedRowData && (
					<Form form={form}>
						<Form.Item label='Mã nhóm'>
							<span>{selectedRowData.groupId}</span>
						</Form.Item>
						<Form.Item
							label='Tên nhóm'
							name='name'
							initialValue={selectedRowData.name}
							rules={[{ required: true, message: 'Vui lòng nhập tên nhóm!' }]}>
							<Input />
						</Form.Item>
						<Form.Item
							label='Thành viên'
							name='nguoiThamGia'
							rules={[{ required: true, message: 'Vui lòng nhập người tham gia!' }]}></Form.Item>
						<Table
							size='small'
							bordered
							dataSource={selectedRowData.users}
							pagination={false}
							columns={[
								{
									title: 'UID',
									dataIndex: 'userId',
									key: 'UserId',
								},
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
								{
									title: 'Thao tác',
									value: 'userId',
									key: 'action',
									render: (_, record, index) => (
										<a
											href='#4'
											onClick={async () => {
												await axios
													.post(`${API_URL}/group/${selectedRowData.groupId}/removeUser`, {
														userId: parseInt(record.userId),
													})
													.then((res) => {
														if (res.status == 201) {
															message.success('Xóa người dùng khỏi nhóm thành công!', [1])
															setSelectedRowData({
																...selectedRowData,
																users: selectedRowData.users.filter((user) => user.userId != record.userId),
															})
														}
													})
											}}>
											Xóa
										</a>
									),
								},
							]}
						/>
						<Form.Item>
							<Input
								placeholder='Nhập UID của người dùng muốn thêm'
								onChange={(e) => {
									setTmpUserId(e.target.value)
								}}
							/>
							<Button
								type='primary'
								onClick={async () => {
									await axios
										.post(`${API_URL}/group/${selectedRowData.groupId}/addUser`, {
											userId: parseInt(tmpUserId),
										})
										.then((res) => {
											if (res.status == 201) {
												message.success('Thêm người dùng vào nhóm thành công', [1])
												fetchGroupData(selectedRowData.groupId)
											}
										})
								}}>
								Thêm thành viên
							</Button>
						</Form.Item>
					</Form>
				)}
			</Modal>
		</div>
	)
}

export default Nhom
