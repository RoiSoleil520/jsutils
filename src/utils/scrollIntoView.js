/**
 * @module DOM
 */

/**
 *
 * @description JavaScript库 - 滚动到指定元素区域
 * @method scrollIntoView
 * @memberof module:DOM
 * @author v@zanyuyu.com
 * @param {String} element 需要滚动的元素
 * @param {Object} options 可选，参考 [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView]
 * @example
 *
 * scrollIntoView('.test')
 * scrollIntoView('.test', {
 *  behavior: 'auto',
 *  block: 'center'
 * })
 *
 */
function scrollIntoView (element, options) {
  if (!options) {
    options = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }
  }
  document.querySelector(element).scrollIntoView({
    options
  })
}

export default scrollIntoView
