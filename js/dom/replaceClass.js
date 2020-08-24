import removeClass from './removeClass'
import addClass from './addClass'

/**
 * 替换类名
 * @param {HTMLElement} ele //元素
 * @param {String} oldCls  //旧类名
 * @param {String} newCls  //新类名
 */
const replaceClass = (ele, oldCls, newCls) => {
  removeClass(ele, oldCls)
  addClass(ele, newCls)
}

export default replaceClass
