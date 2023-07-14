import React from 'react'
import {
	TeamOutlined,
	HomeOutlined,
	BarChartOutlined,
	ContactsOutlined,
	UserOutlined,
	UserAddOutlined,
	LogoutOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme, Button } from 'antd'
import Nhom from './components/Nhom/Nhom'
import QuanLyCongThuc from './components/QuanLyCongThuc/QuanLyCongThuc'
import QuanLyCongThucYeuThich from './components/QuanLyCongThuc/QuanLyCongThucYeuThich'
import QuanLyDoLuuTru from './components/QuanLyDoLuuTru/QuanLyDoLuuTru'
import QuanLyDoCanMua from './components/QuanLyDoCanMua/QuanLyDoCanMua'
import AddTeam from './components/Nhom/AddTeam'
import DangNhap from './components/DangNhap/DangNhap'
import DangKy from './components/DangKy/DangKy'

import React, { useState } from 'react'

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route exact path='/home' element={<Home />} />
					<Route path='/register' element={<RegisterForm />} />
				</Routes>
			</Router>
		</div>
	)
}
export default App
