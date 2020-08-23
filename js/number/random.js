/**
 * 获取指定范围内的随机整数
 * @param  {Number} n 开始数字
 * @param  {Number} m 结束数字
 * @return {Number} 获取的随机数字
 */
const random = (n, m) => {
  return Math.round(Math.random() * (m - n) + n)
}

export default random
