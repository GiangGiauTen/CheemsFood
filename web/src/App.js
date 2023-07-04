import {
  TeamOutlined,
  HomeOutlined,
  BarChartOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Nhom from './components/Nhom/Nhom';
import QuanLyCongThuc from './components/QuanLyCongThuc/QuanLyCongThuc';
import QuanLyDoLuuTRu from './components/QuanLyDoLuuTru/QuanLyDoLuuTRu';
import QuanLyDoCanMua from './components/QuanLyDoCanMua/QuanLyDoCanMua';
import AddTeam from './components/Nhom/AddTeam';
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
    getItem('Đăng ký tạm vắng', '12'),
    getItem('Đăng ký tạm trú', '13'),
    getItem('Khai tử', '14'),
  ]),
  getItem('Quản Lý Công Thức', '_2', <HomeOutlined />, [
    getItem('Danh sách', '2'),
    getItem('Thêm mới', '21'),
    getItem('Tách hộ khẩu', '22'),
    getItem('Chuyển đi', '23'),
  ]),
  getItem('Quản Lý Đồ Lưu Trữ', '3', <BarChartOutlined />),
  getItem('Quản Lý Đồ Cần Mua', '_4', <ContactsOutlined />, [
    getItem('Danh sách', '4'),
    getItem('Thêm mới', '41'),
    getItem('Sửa', '42'),
  ]),
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

          {menuKey === '3' && (
            <div>
              <QuanLyDoLuuTRu />
            </div>
          )}
          {menuKey === '4' && (
            <div>
              <QuanLyDoCanMua />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
