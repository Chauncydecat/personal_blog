/*
 * @Author: Chauncey
 * @Date: 2020-09-11 09:54:58
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-10-12 15:08:41
 * @FilePath: \blog\blog\components\Header.js
 */
import React, { useState, useEffect } from 'react'
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'
import { HomeOutlined, CommentOutlined } from '@ant-design/icons'


import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {


    const [navArray, setNavArray] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()


    }, [])

    //跳转到列表页
    const handleClick = (e) => {
        if (e.key == '0') {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }


    }

    return (
        <div className="header">
            <Row type="flex" justify="center"  >
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-log">
                        <Link href='/'>
                            <a>张五喵</a>
                        </Link>
                    </span>
                    <span className="header-text">选择前端就是选择终生学习</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key='0' >
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;