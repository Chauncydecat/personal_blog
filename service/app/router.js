/*
 * @Author: Chauncey
 * @Date: 2020-09-15 14:47:23
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-09-15 17:02:29
 * @FilePath: \blog\service\app\router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/default')(app)
};
