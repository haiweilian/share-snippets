/**
 * 反转字符串
 * @param  {String} value 被反转的字符串
 * @return {String}
 */
const reverse = (value) => {
  return Array.prototype.reverse.apply(value.split('')).join('')
}

export default reverse
