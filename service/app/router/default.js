/*
 * @Author: Chauncey
 * @Date: 2020-09-15 15:30:16
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-10-12 16:01:36
 * @FilePath: \blog\service\app\router\default.js
 */
module.exports = app =>{
    const {router,controller}=app
    router.get('/default/index',controller.default.home.index)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
    router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
    router.get('/default/getListById/:id',controller.default.home.getListById)
}