/**
 * @module DOM
 */

/**
 * @description JavaScript库 - 平滑滚动至顶部
 * @method scrollToTop
 * @memberof module:DOM
 * @author v@zanyuyu.com
 * @example
 *
 * scrollToTop()
 *
 */
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

export default scrollToTop
