import React from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import { API_URL } from '../../utils/apiUrl'

const AddGroup = ({ setIsCreateModalOpen }) => {
	const [form] = Form.useForm()
	const handleSubmit = async (values) => {
		try {
			await axios
				.post(`${API_URL}/group`, {
					userId: parseInt(localStorage.getItem('userId')),
					groupName: values.name,
				})
				.then((res) => {
					message.success('Tạo nhóm thành công!', [1], () => {
						setIsCreateModalOpen(false)
					})
				})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<h1>Thêm Nhóm</h1>
			<Form form={form} onFinish={handleSubmit}>
				<Form.Item name='name' label='Tên Nhóm' rules={[{ required: true, message: 'Vui lòng nhập tên nhóm' }]}>
					<Input placeholder='Nhập mã nhóm' />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Thêm
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddGroup
