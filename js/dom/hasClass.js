/**
 * 判断元素是否有某个class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 * @return {Boolean}
 */
const hasClass = (ele, cls) => {
  return new RegExp(`(\\s|^)${cls}(\\s|$)`).test(ele.className)
}

export default hasClass
