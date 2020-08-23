/**
 * 省略文字
 * @param  {String} value  原始字符串
 * @param  {Number} leng 截取的字符长度
 * @return {String}
 */
const truncate = (value, len = 10) => {
  if (value.length <= len) return value
  return `${value.substring(0, len)}...`
}

export default truncate
