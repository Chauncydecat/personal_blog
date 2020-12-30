/*
 * @Author: Chauncey
 * @Date: 2020-10-13 10:47:29
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-12-29 10:46:52
 * @FilePath: \blog\admin\src\Pages\Main.js
 */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './Login'
import AdminIndex from './AdminIndex'
/* import AddArticle from './AddArticle'
import ArticleList from './ArticleList' */

function Main() {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/index/" exact component={AdminIndex} />
            <Route path="/index/add/" exact component={AdminIndex} />
            <Route path="/index/add/:id" exact component={AdminIndex} />
            <Route path="/index/list/"   component={AdminIndex} />
        </Router>
    )
}

export default Main