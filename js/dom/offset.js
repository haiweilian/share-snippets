/**
 * 获取元素距离body的偏移量
 * @param  {HTMLElement} ele
 * @return {Object}
 */
const offset = (ele) => {
  let top = ele.offsetTop
  let left = ele.offsetLeft
  let parent = ele.offsetParent

  while (parent) {
    top += parent.offsetTop
    left += parent.offsetLeft
    parent = parent.offsetParent
  }

  return {
    top,
    left,
  }
}

export default offset
