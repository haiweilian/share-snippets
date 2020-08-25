/* eslint-disable no-param-reassign */
/**
 * 字节大小转换
 * @param {Number} value
 * @param {Number} decimals (default: 2)
 */
const bytes = (value, decimals = 2) => {
  value = value === null || Number.isNaN(value) ? 0 : value
  if (value >= 1024 ** 4) {
    // TB
    return `${(value / 1024 ** 4).toFixed(decimals)} TB`
  }
  if (value >= 1024 ** 3) {
    // GB
    return `${(value / 1024 ** 3).toFixed(decimals)} GB`
  }
  if (value >= 1024 ** 2) {
    // MB
    return `${(value / 1024 ** 2).toFixed(decimals)} MB`
  }
  if (value >= 1024) {
    // kb
    return `${(value / 1024).toFixed(decimals)} kB`
  }
  // byte
  return value === 1 ? `${value} byte` : `${value} bytes`
}

export default bytes
