/**
 * 设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
const setCookie = (name, value, days) => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = `${name}=${value};expires=${date}`
}

export default setCookie
