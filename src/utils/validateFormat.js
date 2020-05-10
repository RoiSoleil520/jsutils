/**
 * @module Tools
 */

/**
 *
 * @method validateFormat
 * @memberof module:Tools
 * @author v@zanyuyu.com
 * @param {String} type 需要娇艳的格式类型
 * @returns {Boolean} 需要校验的格式是否通过
 * @example
 *
 * validateFormat('phone','+8618520983743')
 * // => true
 */
const validateFormat = (type, value) => {
  const typeRegExp = {
    phone: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
    email: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
    url: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
    idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 身份证号码
  }
  if (!typeRegExp[type.toLowerCase()]) {
    console.error('type 可选值为：phone, email, url, idcard')
  }
  return typeRegExp[type.toLowerCase()].test(value)
}

export default validateFormat
