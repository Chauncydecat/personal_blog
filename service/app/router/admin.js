/*
 * @Author: Chauncey
 * @Date: 2020-09-15 15:30:00
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-12-29 10:53:18
 * @FilePath: \blog\service\app\router\admin.js
 */

module.exports = app => {
    const { router, controller } = app
    var adminauth = app.middleware.adminauth()
    router.get('/admin/index', adminauth, controller.admin.main.index)
    router.post('/admin/checkLogin', controller.admin.main.checkLogin)
    router.get('/admin/getTypeInfo', controller.admin.main.getTypeInfo)
    router.post('/admin/addArticle', controller.admin.main.addArticle)
    router.post('/admin/updateArticle', controller.admin.main.updateArticle)
    router.get('/admin/getArticleList', controller.admin.main.getArticleList)
    router.get('/admin/delArticle/:id', controller.admin.main.delArticle)
    router.get('/admin/getArticleById/:id',controller.admin.main.getArticleById)
}
