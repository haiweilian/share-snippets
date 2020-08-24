/* eslint-disable no-param-reassign */
import hasClass from './hasClass'

/**
 * 元素添加 class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) {
    ele.className += ` ${cls}`
  }
}

export default addClass
