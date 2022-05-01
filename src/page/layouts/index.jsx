import React, { useEffect, useState } from 'react'
import { Layout, Menu, Avatar, Badge } from 'antd'
import { useNavigate, useLocation } from 'react-router'
import './index.css'
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'

const { Header, Content, Sider } = Layout

const Layouts = (props) => {
    const [page, setPage] = useState(1)
    const handleTo = (url) => {
       setPage(url)
    }
    const { children } = props
    return (
        <Layout className="lay" style={{ minHeight: '100vh' }}>
            <Sider className="sider">
                <div className="logo">
                   文件抽取系统
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{ padding: 10 }}
                    defaultSelectedKeys={'teach'}
                >
                    <Menu.Item key='teach' onClick={() => handleTo(1)} icon={<PieChartOutlined />} >
                        上传申报书
                    </Menu.Item>
                    <Menu.Item key='quize' onClick={() => handleTo(2)} icon={<DesktopOutlined />}  >
                        查看申报书
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {/* <Badge className='avatar'>
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge> */}
                </Header>
                <Content className='content' style={{ margin: '40px 16px' }}>{children[page - 1]}</Content>
            </Layout>
        </Layout>
    )
}

export default Layouts
