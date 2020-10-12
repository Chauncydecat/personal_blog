/*
 * @Author: Chauncey
 * @Date: 2020-09-11 13:00:10
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-10-09 15:55:45
 * @FilePath: \blog\blog\components\Author.js
 */
import React from 'react';
import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined , WechatFilled } from '@ant-design/icons'
import '../static/style/components/author.css'

const Author = () => {

    const avatarStyle={marginLeft:".5rem",marginRight:".5rem"}
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100}><img src="../static/img/author.png"  onError={error=>console.log(error)} width='100px' height='100px' /></Avatar></div>
            <div className="author-introduction">
                这是一段自我介绍：一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十
                <Divider>社交账号</Divider>
                <Avatar size={28} style={{backgroundColor:"#595959",...avatarStyle}} ><GithubOutlined  /></Avatar>
                <Avatar size={28} style={{backgroundColor:"#73d13d",...avatarStyle}} ><WechatFilled /></Avatar>
                <Avatar size={28} style={{backgroundColor:"#69c0ff",...avatarStyle}}><QqOutlined /></Avatar>
            </div>
        </div>
    )
}

export default Author;