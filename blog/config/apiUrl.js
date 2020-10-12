/*
 * @Author: Chauncey
 * @Date: 2020-10-10 18:05:41
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-10-12 15:45:20
 * @FilePath: \blog\blog\config\apiUrl.js
 */
let ipUrl = 'http://127.0.0.1:7001/default/' 

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo:ipUrl+'getTypeInfo',//获取类别信息
    getListById:ipUrl+'getListById/',//根据typeId获取文章列表
}
export default servicePath;