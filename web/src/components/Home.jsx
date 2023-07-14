import {
  TeamOutlined,
  HomeOutlined,
  BarChartOutlined,
  ContactsOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme, Button } from 'antd';
import Nhom from './Nhom/Nhom';
import QuanLyCongThuc from './QuanLyCongThuc/QuanLyCongThuc';
import QuanLyCongThucYeuThich from './QuanLyCongThuc/QuanLyCongThucYeuThich';
import QuanLyDoLuuTru from './QuanLyDoLuuTru/QuanLyDoLuuTru';
import QuanLyDoCanMua from './QuanLyDoCanMua/QuanLyDoCanMua';
import AddTeam from './Nhom/AddTeam';
import DangNhap from './DangNhap/DangNhap';
import DangKy from './DangKy/DangKy';
import React, { useState } from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Nhóm', '_1', <TeamOutlined />, [
    getItem('Danh sách', '1'),
    getItem('Thêm mới', '11'),
  ]),
  getItem('Quản Lý Công Thức', '_2', <HomeOutlined />, [
    getItem('Danh sách', '2'),
    getItem('Quản Lý Công Thức Yêu Thích', '21'),
  ]),
  getItem('Quản Lý Đồ Lưu Trữ', '3', <BarChartOutlined />),
  getItem('Quản Lý Đồ Cần Mua', '_4', <ContactsOutlined />, [
    getItem('Danh sách', '4'),
  ]),

];
function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Gửi yêu cầu POST để xóa dữ liệu
      await axios.post('http://localhost:4001/seed');
      
      // Chuyển hướng người dùng về trang đăng nhập
      navigate('/');
    } catch (error) {
      console.error('Đăng xuất thất bại:', error);
    }
  };
  const [menuKey, setMenuKey] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout hasSider theme="light">
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            onClick={e => setMenuKey(e.key)}
          />
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />

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
            {menuKey === '11' && (
              <div>
                <AddTeam />
              </div>
            )}
            {menuKey === '2' && (
              <div>
                <QuanLyCongThuc />
              </div>
            )}
            {menuKey === '21' && (
              <div>
                <QuanLyCongThucYeuThich />
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
          </Content>
        </Layout>
        <Button type="primary" onClick={handleLogout}>
        Đăng xuất
      </Button>
      </Layout>
    </div>
  );
}

export default Home;
