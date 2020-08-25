/**
 * 根据OSS图片路径获取缩略图
 * @param {String} url 图片元素路径
 * @param {Number} w 缩略图宽
 * @param {Number} h 缩略图高
 */
const ossSmallImg = (url, w, h) => {
  if (typeof url !== 'string') {
    return ''
  }
  let simgurl = ''
  if (url.includes('x-oss-process')) {
    simgurl = `${url},image/resize,m_fill,h_${Number.parseFloat(h)},w_${Number.parseFloat(w)},limit_0`
  } else {
    simgurl = `${url}?x-oss-process=image/resize,m_fill,h_${Number.parseFloat(h)},w_${Number.parseFloat(w)},limit_0`
  }
  return simgurl
}

export default ossSmallImg
