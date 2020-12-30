/*
 * @Author: Chauncey
 * @Date: 2020-10-13 10:47:37
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-12-29 17:20:17
 * @FilePath: \blog\admin\src\Pages\Login.js
 */
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import '../static/css/login.css';
import { Card, Input, Button, Spin, message } from 'antd';
import axios from 'axios'
import servicePath from '../config/apiUrl';
import { UserOutlined, KeyOutlined } from '@ant-design/icons'

function Login(props) {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

    }, [])

    const checkLogin = () => {
        setIsLoading(true)

        if (!userName) {
            message.error('用户名不能为空')
            setTimeout(()=>setIsLoading(false),500)
            return false
        } else if (!password) {
            message.error('密码不能为空')
            setTimeout(()=>setIsLoading(false),500)
            return false
        }
        let dataProps = {
            'userName': userName,
            'password': password
        }
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            header: { 'Access-Control-Allow-Origin': '*' },
        }).then(
            res => {
                setIsLoading(false)
                if (res.data.data === '登录成功') {
                    localStorage.setItem('openId', res.data.openId)
                    props.history.push('/index')
                } else {
                    console.log(res.data.data);
                    message.error('用户名密码错误')
                }
            }
        )

        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="login-div">

            <Spin tip="loading..." spinning={isLoading}>
                <Card title="Chauncey の Blog" bordered={true} style={{ width: 400 }}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <br /><br />
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <br /><br />
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login