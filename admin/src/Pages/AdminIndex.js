/*
 * @Author: Chauncey
 * @Date: 2020-10-13 15:02:56
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-12-29 10:38:26
 * @FilePath: \blog\admin\src\Pages\AdminIndex.js
 */
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../static/css/adminIndex.css';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Route } from "react-router-dom";
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {

    const [collapsed, setCollapsed] = useState(false)


    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    const handleClickArticle = e => {
        console.log(e.item.props)
        if (e.key === 'addArticle') {
            props.history.push('/index/add/')
        } else {
            props.history.push('/index/list/')
        }

    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>工作台</span>
                    </Menu.Item>
                    <SubMenu
                        key="2"
                        onClick={handleClickArticle}
                        title={
                            <span>
                                <DesktopOutlined />
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="addArticle">添加文章</Menu.Item>
                        <Menu.Item key="articleList">文章列表</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <UserOutlined />
                                <span>用户管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <TeamOutlined />
                                <span>用户</span>
                            </span>
                        }
                    >
                        <Menu.Item key="6">type 1</Menu.Item>
                        <Menu.Item key="8">type 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <FileOutlined />
                        <span>文件管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <div>
                            <Route path="/index/" exact component={AddArticle} />
                            <Route path="/index/add/" exact component={AddArticle} />
                            <Route path="/index/add/:id" exact component={AddArticle} />
                            <Route path="/index/list/" exact component={ArticleList} />

                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>update by Chauncey</Footer>
            </Layout>
        </Layout>
    );

}

export default AdminIndex