/* eslint-disable no-param-reassign */
/**
 * 设置css样式
 * @param {HTMLElement} ele
 * @param {String} attr 属性 key
 * @param {String} val 属性 value
 */
const setCss = (el, attr, val) => {
  if (attr === 'opacity') {
    el.style[attr] = val
    el.style.filter = `alpha(opacity=${val * 100})`
    return
  }
  const reg = /^width|height|fontSize|(margin|padding)?(top|left|bottom|right)?$/i
  if (reg.test(attr)) {
    if (typeof val === 'number') {
      val += 'px'
    }
  }
  el.style[attr] = val
}

export default setCss
