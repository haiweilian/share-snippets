/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} time 时间
 * @return {Number}
 */
const getMonthDays = (time) => {
  const date = time ? new Date(time) : new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return new Date(year, month, 0).getDate()
}

export default getMonthDays
