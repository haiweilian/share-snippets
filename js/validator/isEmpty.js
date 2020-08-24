/**
 * 判断是否为 '' 、null 、undefined
 * @param  {*} val
 * @return {Boolean}
 */
const isEmpty = (val) => {
  if (val === '' || val === null || val === undefined) {
    return true
  }
  return false
}

export default isEmpty
