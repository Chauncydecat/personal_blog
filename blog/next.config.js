/*
 * @Author: Chauncey
 * @Date: 2020-09-11 09:29:55
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-09-11 09:30:42
 * @FilePath: \blog\pages\next.config.js
 */
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})