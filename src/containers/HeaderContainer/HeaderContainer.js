import React from 'react';
import { Layout, Menu } from 'antd';
const { Header} = Layout;

const HeaderContainer = () => {
  return (
    <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">Mô phỏng thuật toán định thời</Menu.Item>
    </Menu>
  </Header>
  );
}

export default HeaderContainer;
