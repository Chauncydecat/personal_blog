/*
 * @Author: Chauncey
 * @Date: 2020-09-15 15:28:49
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-10-12 15:40:57
 * @FilePath: \blog\service\app\controller\default\home.js
 */
'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller {

    async index() {
        //获取用户表的数据

        let result = await this.app.mysql.get("blog_content", {})
        console.log(result)
        this.ctx.body = result
    }

    async getArticleList() {
        let sql = 'SELECT t1.id as id,' +
            't1.title as title,' +
            't1.introduce as introduce,' +
            "FROM_UNIXTIME(t1.add_time,'%Y-%m-%d %H:%i:%s') as addTime," +
            't1.view_count as viewCount ,' +
            't2.type_name as typeName ' +
            'FROM article AS t1 LEFT JOIN type AS t2 ON t1.type_id = t2.id'

        const res = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: res
        }
    }

    async getArticleById() {

        let id = this.ctx.params.id

        let sql = 'SELECT t1.id as id,' +
            't1.title as title,' +
            't1.introduce as introduce,' +
            't1.article_content as articleContent,' +
            "FROM_UNIXTIME(t1.add_time,'%Y-%m-%d %H:%i:%s') as addTime," +
            't1.view_count as viewCount ,' +
            't2.type_name as typeName ,' +
            't1.type_id as typeId ' +
            'FROM article AS t1 LEFT JOIN type AS t2 ON t1.type_id = t2.id ' +
            'WHERE t1.id=' + id

        const res = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: res
        }
    }

    //得到类别名称和编号
    async getTypeInfo() {

        const result = await this.app.mysql.select('type')
        this.ctx.body = { data: result }

    }

    //根据typeId获取文章列表
    async getListById(){
        let id = this.ctx.params.id

        let sql = 'SELECT t1.id as id,' +
            't1.title as title,' +
            't1.introduce as introduce,' +
            't1.article_content as articleContent,' +
            "FROM_UNIXTIME(t1.add_time,'%Y-%m-%d %H:%i:%s') as addTime," +
            't1.view_count as viewCount ,' +
            't2.type_name as typeName ,' +
            't1.type_id as typeId ' +
            'FROM article AS t1 LEFT JOIN type AS t2 ON t1.type_id = t2.id ' +
            'WHERE type_id=' + id

        const res = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: res
        }
    }


}

module.exports = HomeController