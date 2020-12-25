import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Algorithm from './Algorithm/Algorithm';
import HeaderContainer from './HeaderContainer/HeaderContainer';

const App = () => {
  return (
    <Layout style={{height: "100vh"}}>
    <HeaderContainer/>
    <Algorithm/>
  </Layout>
  );
}

export default App;
