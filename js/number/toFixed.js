/**
 * 四舍五入解决精度问题
 * @param {Number} num 数字
 * @param {Number} precision 保留的位数
 * @return {String}
 */
const toFixed = (num, precision = 2) => {
  const power = 10 ** precision
  return (Math.round(num * power) / power).toFixed(precision)
}

export default toFixed
