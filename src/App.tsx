/*
 * @Descripttion: 应用主入口
 * @Author: huangjitao
 * @Date: 2021-08-04 20:27:49
 * @Function: 该文件用途描述
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Layout } from 'antd';
import SideMenu from './components/SideMunu';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { menu } from './consts/menu';
import PageHeader from './components/PageHeader';

const { Sider, Header, Content, Footer } = Layout

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Layout style={{height: '100%'}}>
          <Sider> <SideMenu /> </Sider>
          <Layout>
            <Header> <PageHeader /> </Header>
            <Content>
            <Routes>
              {
                menu.map(item => {
                  if (item.children) {
                    return item.children.map(child => 
                    <Route path={child.path} element={child.component} />
                    )
                  }
                })
              }
              <Navigate to={"/abstract/feature"} />
            </Routes>
            </Content>
            <Footer>尾部</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
