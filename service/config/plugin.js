/*
 * @Author: Chauncey
 * @Date: 2020-09-15 14:47:23
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-10-09 17:23:01
 * @FilePath: \blog\service\config\plugin.js
 */
'use strict';

/** @type Egg.EggPlugin */
/* module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
}; */

exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}

exports.cors = {
  enable: true,
  package: 'egg-cors'
}
