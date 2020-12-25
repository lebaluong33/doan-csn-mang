import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FCFS from './../../components/FCFS/FCFS';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const Algorithm = () => {
  return (
    <Layout>
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu key="Có độc quyền" icon={<UserOutlined />} title="subnav 1">
          <Menu.Item key="1">FCFS</Menu.Item>
          <Menu.Item key="2">SJF</Menu.Item>
          <Menu.Item key="3">SRTF</Menu.Item>
          <Menu.Item key="4">RR</Menu.Item>
          <Menu.Item key="5">HRRN</Menu.Item>
          <Menu.Item key="6">MLFQ</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Main</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          margin: 0,
          minHeight: 280,
        }}
      >
        <FCFS />
      </Content>
    </Layout>
  </Layout>
  );
}

export default Algorithm;
