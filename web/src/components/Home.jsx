import {
  TeamOutlined,
  HomeOutlined,
  BarChartOutlined,
  ContactsOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme, Button } from 'antd';
import Nhom from './Nhom/Nhom';
import QuanLyCongThuc from './QuanLyCongThuc/QuanLyCongThuc';
import QuanLyCongThucYeuThich from './QuanLyCongThuc/QuanLyCongThucYeuThich';
import QuanLyDoLuuTru from './QuanLyDoLuuTru/QuanLyDoLuuTru';
import QuanLyDoCanMua from './QuanLyDoCanMua/QuanLyDoCanMua';
import React, { useEffect, useState } from 'react';
import AddTeam from './Nhom/AddTeam';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminView from './Admin/adminView';
import QuanLyDoMuaNhom from './QuanLyDoCanMua/QuanLyDoMuaNhom';
import ThemDanhSachDoCanMua from './QuanLyDoCanMua/ThemDanhSachDoCanMua';

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function Home() {
  const navigate = useNavigate();
  const [role, setRole] = useState('user');
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
    }
    setRole(localStorage.getItem('role'));
  });
  const [menuKey, setMenuKey] = useState('1');
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
      getItem('Cá Nhân', '4'),
      getItem('Nhóm', '41'),
      getItem('Thêm', '42'),
    ]),
    getItem(
      <Button
        type="primary"
        onClick={() => {
          localStorage.removeItem('userId');
          localStorage.removeItem('name');
          localStorage.removeItem('username');
          localStorage.removeItem('role');
          navigate('/');
        }}>
        Đăng xuất
      </Button>,
      '5',
    ),
  ];
  return (
    <div>
      {role == 'admin' ? (
        <AdminView />
      ) : (
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
              {menuKey === '41' && (
                <div>
                  <QuanLyDoMuaNhom />
                </div>
              )}
              {menuKey === '42' && (
                <div>
                  <ThemDanhSachDoCanMua />
                </div>
              )}
            </Content>
          </Layout>
        </Layout>
      )}
    </div>
  );
}

export default Home;
