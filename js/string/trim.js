/**
 * 去掉字符串 指定的首尾字符
 * @param  {String} value 被去除的字符
 * @param  {String} code  去除的字符
 * @return {String}
 */
const trim = (value, code = ',') => {
  const regs = new RegExp(`(^\\${code}*)|(\\${code}*$)`, 'g')
  return value.replace(regs, '')
}

export default trim
