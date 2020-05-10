/**
 * @module DOM
 */

/**
 *
 * @description JavaScript库 - 返回当前的滚动位置
 * @method getScrollPosition
 * @memberof module:DOM
 * @author v@zanyuyu.com
 * @example
 *
 * getScrollPosition();
 * // {x: 0,y: 2354}
 *
 */
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})
export default getScrollPosition
