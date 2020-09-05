import setCookie from './setCookie'

/**
 * 根据name删除cookie
 * @param {String} name
 */
const removeCookie = (name) => {
  setCookie(name, 1, -1)
}

export default removeCookie
