/**
 * 获取元素距离body的偏移量
 * @param  {HTMLElement} ele
 * @return {Object}
 */
const offset = (ele) => {
  let offsetL = ele.offsetLeft
  let offsetT = ele.offsetTop
  let offsetP = ele.offsetParent
  while (offsetP) {
    offsetL += offsetP.offsetLeft
    offsetT += offsetP.offsetTop
    offsetP = offsetP.offsetParent
  }
  return {
    left: offsetL,
    top: offsetT,
  }
}

export default offset
