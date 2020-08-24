/* eslint-disable no-param-reassign */
import hasClass from './hasClass'

/**
 * 元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`)
    cls.className = ele.className.replace(reg, '')
  }
}

export default removeClass
