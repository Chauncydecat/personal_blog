/*
 * @Author: Chauncey
 * @Date: 2020-09-11 14:16:08
 * @LastEditors: Chauncey
 * @LastEditTime: 2020-09-11 15:40:09
 * @FilePath: \blog\components\Advert.js
 */
import React from 'react';
import '../static/style/components/advert.css'

const Advert=()=>{

    return(
        <div className="ad-div comm-box">
          <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
        </div>
    )
}

export default Advert