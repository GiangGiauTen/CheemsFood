// Tên file: SidebarHeader.js
import React from 'react';
import { Layout, Avatar, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const SidebarHeader = ({ avatarSrc, username }) => {
  return (
    <Header
      style={{
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '16px',
        marginBottom: '16px',
      }}>
      <Avatar src={avatarSrc} size={64} />
      <Title level={4} style={{ color: '#F9D030', margin: 0 }}>
        {username}
      </Title>
    </Header>
  );
};

export default SidebarHeader;
