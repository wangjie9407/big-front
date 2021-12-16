// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const tenpay = require('tenpay')
// 配置支付信息
const payConfig = {
  appid: '	wxd2c0fc3120c16e57',//'你的小程序appid', 
  mchid:  //'你的微信商户号',
  partnerKey: //'微信支付安全密钥', 
  notify_url: //'支付回调网址,这里可以先随意填一个网址', 
  spbill_create_ip: '127.0.0.1' //这里填这个就可以
}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}