/**
 * 获取 window 滚动量
 * @return {Object}
 */
const getScroll = () => {
  let top = 0
  let left = 0

  if (window.pageYOffset && window.pageXOffset) {
    top = window.pageYOffset
    left = window.pageXOffset
  } else {
    top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop
    left = document.documentElement ? document.documentElement.scrollLeft : document.body.scrollLeft
  }

  return {
    top,
    left,
  }
}

export default getScroll
