import React, { useEffect, useState } from 'react'
import { Table, Space } from 'antd'

const QuanLyTaiKhoan = () => {
	// Sample data for reserved foods

	let taiKhoan = [
		{
			userId: 1,
			name: 'Nguyễn Thanh Dương',
			username: 'katanashi',
		},
		{
			userId: 2,
			name: 'Trần Công Minh',
			username: 'CongMei',
		},
		{
			userId: 3,
			name: 'Phạm Chính Thống',
			username: 'ChingThong',
		},
		// Add more food items here...
		{
			userId: 4,
			name: 'Nguyễn Nhật Minh',
			username: 'Nminh',
		},
		// Add more food items here...
		{
			userId: 5,
			name: 'Phạm Minh Chính',
			username: 'MeiChin',
		},
	]
	let ft = async () => {
		const response = await fetch('http://localhost:4001/food')
		let js = await response.json()
		if (response.ok) {
			console.log(js)
		}
	}
	useEffect(() => {
		ft()
	}, [])

	let [data, setData] = useState(taiKhoan)
	taiKhoan = data
	let Delete = (i) => {
		let newTaiKhoan = [...taiKhoan]
		newTaiKhoan.splice(i, 1)
		setData(newTaiKhoan)
	}
	// Define the columns for the table
	const columns = [
		{
			title: 'ID',
			render: (text, record, index) => index + 1,
		},
		{
			title: 'User Name',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},

		{
			title: 'Action',
			key: 'action',
			render: (text, record, index) => (
				<Space size='middle'>
					<a onClick={() => Delete(index)}>Delete</a>
				</Space>
			),
		},
	]

  return (
    <div>
      <h1>Account List</h1>
      <Table columns={columns} dataSource={taiKhoan} />
    </div>
  );
};
