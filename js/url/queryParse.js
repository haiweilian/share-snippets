/* eslint-disable no-param-reassign, no-plusplus */
/**
 * 序列化字符串转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
const queryParse = (url) => {
  url = !url ? window.location.href : url
  if (url.indexOf('?') === -1) {
    return {}
  }
  let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (search === '') {
    return {}
  }
  search = search.split('&')
  const query = {}
  for (let i = 0; i < search.length; i++) {
    const pair = search[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}

export default queryParse
