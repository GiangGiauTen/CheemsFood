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
import Nhom from './components/Nhom/Nhom';
import QuanLyCongThuc from './components/QuanLyCongThuc/QuanLyCongThuc';
import QuanLyCongThucYeuThich from './components/QuanLyCongThuc/QuanLyCongThucYeuThich';
import QuanLyDoLuuTru from './components/QuanLyDoLuuTru/QuanLyDoLuuTru';
import QuanLyDoCanMua from './components/QuanLyDoCanMua/QuanLyDoCanMua';
import AddTeam from './components/Nhom/AddTeam';
import DangNhap from './components/DangNhap/DangNhap';
import DangKy from './components/DangKy/DangKy';

import React, { useState } from 'react';
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
    getItem('Thêm mới', '41'),
    getItem('Sửa', '42'),
  ]),

  getItem('DangNhap', '5', <UserOutlined />),
  getItem('DangKy', '6', <UserAddOutlined />),
];
const App = () => {
  const [menuKey, setMenuKey] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
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
          {menuKey === '5' && (
            <div>
              <DangNhap />
            </div>
          )}
          {menuKey === '6' && (
            <div>
              <DangKy />
            </div>
          )}
        </Content>
      </Layout>
      <Button icon={<LogoutOutlined />}>Đăng xuất</Button>
    </Layout>
  );
};
export default App;
