/*
 * @Author: Chauncey
 * @Date: 2020-09-15 14:47:23
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-12-17 12:07:26
 * @FilePath: \blog\service\app\router.js
 */
'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  require('./router/default')(app)
  require('./router/admin')(app)
};