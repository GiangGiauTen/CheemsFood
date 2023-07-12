import {
    TeamOutlined,
    HomeOutlined,
    BarChartOutlined,
    ContactsOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  
  
  import QuanLyTaiKhoan from './QuanLyTaiKhoan';
  import QuanLyDanhMuc from './QuanLyDanhMuc';
  import AddForm from './AddForm.tsx';
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
    
    getItem('Quản Lý Tài Khoản', '1', <BarChartOutlined />),
    getItem('Quản Lý Danh Mục', '2', <ContactsOutlined />, [
      getItem('Danh sách', '2'),
      getItem('Thêm mới', '3'),
     
    ]),
    getItem('Tài Khoản', '4', <TeamOutlined />)
  ];
  const AdminView = () => {
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
                <QuanLyTaiKhoan></QuanLyTaiKhoan>s
              </div>
            )}
            {menuKey === '2' && (
              <div>
               <QuanLyDanhMuc></QuanLyDanhMuc>
              </div>
            )}
            {menuKey === '3' && (
              <div>
               <AddForm></AddForm>
              </div>
            )}
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default AdminView;
  