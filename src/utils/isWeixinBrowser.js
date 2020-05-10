/**
 * @module wechat
 */

/**
 *
 * @description JavaScript库 - 判断是否是微信微信浏览器
 * @method isWeixinBrowser
 * @memberof module:wechat
 * @author v@zanyuyu.com
 * @returns {Boolean}
 *
 */
function isWeixinBrowser () {
  var ua = navigator.userAgent.toLowerCase()
  return !!/micromessenger/.test(ua)
}

export default isWeixinBrowser
