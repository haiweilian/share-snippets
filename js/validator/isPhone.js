/* eslint-disable no-useless-escape */
/**
 * 判断是否为手机号码
 * @param  {String} str
 * @return {Boolean}
 */
const isPhone = (str) => {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}

export default isPhone
