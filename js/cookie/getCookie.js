/**
 * 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
const getCookie = (name) => {
  const arr = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0; i < arr.length; i + 1) {
    const tempArr = arr[i].split('=')
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

export default getCookie
