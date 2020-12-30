/*
 * @Author: Chauncey
 * @Date: 2020-12-17 13:49:45
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-12-29 10:49:50
 * @FilePath: \blog\service\app\middleware\adminauth.js
 */


 module.exports=options=>{
     return async function adminauth(ctx,next){
        console.log("中间件检验-openId:",ctx.session.openId);
        //console.log(ctx.session);
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
     }
 }