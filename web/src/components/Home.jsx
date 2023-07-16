import { TeamOutlined, LayoutOutlined, ShoppingCartOutlined, FileOutlined } from '@ant-design/icons'

import { Layout, Menu, theme, Button } from 'antd'
import Nhom from './Nhom/Nhom'
import QuanLyCongThuc from './QuanLyCongThuc/QuanLyCongThuc'
import QuanLyDoLuuTru from './QuanLyDoLuuTru/QuanLyDoLuuTru'
import QuanLyDoCanMua from './QuanLyDoCanMua/QuanLyDoCanMua'
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import AdminView from './Admin/adminView'
import QuanLyDoMuaNhom from './QuanLyDoCanMua/QuanLyDoMuaNhom'

const { Header, Content, Sider } = Layout

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	}
}

function Home() {
	const navigate = useNavigate()
	const [role, setRole] = useState('user')
	useEffect(() => {
		const userId = localStorage.getItem('userId')
		if (!userId) {
			navigate('/login')
		}
		setRole(localStorage.getItem('role'))
	})
	const [menuKey, setMenuKey] = useState('1')
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const items = [
		getItem('Nhóm', '1', <TeamOutlined />),
		getItem('Quản Lý Công Thức', '2', <FileOutlined />),
		getItem('Quản Lý Đồ Lưu Trữ', '3', <LayoutOutlined />),
		getItem('Quản Lý Đồ Cần Mua', '_4', <ShoppingCartOutlined />, [getItem('Cá Nhân', '4'), getItem('Nhóm', '41')]),
		getItem(
			<Button
				type='primary'
				onClick={() => {
					localStorage.removeItem('userId')
					localStorage.removeItem('name')
					localStorage.removeItem('username')
					localStorage.removeItem('role')
					navigate('/')
				}}>
				Đăng xuất
			</Button>,
			'5',
		),
	]
	return (
		<div>
			{role == 'admin' ? (
				<AdminView />
			) : (
				<Layout hasSider theme='light'>
					<Sider
						style={{
							overflow: 'auto',
							height: '100vh',
							position: 'fixed',
							left: 0,
							top: 0,
							bottom: 0,
						}}>
						<div className='demo-logo-vertical' />
						<Menu
							theme='dark'
							mode='inline'
							defaultSelectedKeys={['1']}
							items={items}
							onClick={(e) => setMenuKey(e.key)}
						/>
					</Sider>
					<Layout
						className='site-layout'
						style={{
							marginLeft: 200,
						}}>
						<Header
							style={{
								padding: 0,
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 20,
							}}>
							<img className='logo' src='logo.png' width={48} height={48} alt='Logo' />
							<h1 style={{ fontSize: 36, color: '#F9D030' }}>CheemsFood</h1>
						</Header>

						<Content
							style={{
								margin: '24px 16px 0',
								overflow: 'initial',
							}}>
							{menuKey === '1' && (
								<div>
									<Nhom />
								</div>
							)}
							{menuKey === '2' && (
								<div>
									<QuanLyCongThuc />
								</div>
							)}

							{menuKey === '3' && (
								<div>
									<QuanLyDoLuuTru />
								</div>
							)}
							{menuKey === '4' && (
								<div>
									<QuanLyDoCanMua />
								</div>
							)}
							{menuKey === '41' && (
								<div>
									<QuanLyDoMuaNhom />
								</div>
							)}
						</Content>
					</Layout>
				</Layout>
			)}
		</div>
	)
}

export default Home
