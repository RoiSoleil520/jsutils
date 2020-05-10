/**
 * @module Tools
 */

/**
 *
 * @description JavaScript库 - 检查平台（设备）类型
 * @method checkDeviceType
 * @memberof module:Tools
 * @author v@zanyuyu.com
 * @param {type} String['wechat','ios','android'] 需要检查的设备
 * @returns {Boolean}
 * @example
 *
 * checkDeviceType('wechat')
 * // => false
 * checkDeviceType('ios')
 * // => false
 * checkDeviceType('android')
 * // => false
 *
 */
function checkDeviceType (type) {
  const typeRegExp = {
    wechat: /micromessenger/,
    ios: /(iphone|ipod|ipad|ios)/,
    android: /android/,
    medtime: /dxyapp_name\/medtime/ // 智汇 app
  }
  if (!typeRegExp[type.toLowerCase()]) {
    console.error('type 可选值为：wechat, medtime（智汇 app）, ios, android')
  }
  return typeRegExp[type.toLowerCase()].test(navigator.userAgent)
}

export default checkDeviceType
