/**
 * 判断是否为邮箱
 * @param  {String} str
 * @return {Boolean}
 */
const isEmail = (str) => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}

export default isEmail
