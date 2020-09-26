/* eslint-disable no-param-reassign */
/**
 * 获取style样式
 * @param {HTMLElement} ele
 * @param {String} attr 属性 key
 * @param {Object} style 属性 style
 * @return {Object}
 */
const getStyle = (el, att, style) => {
  style = style || el.style

  let val = ''

  if (style) {
    val = style[att]

    if (val === '') {
      val = window.getComputedStyle(el, att)
    }
  }

  return val
}

export default getStyle
