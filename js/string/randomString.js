/**
 * 生成随机字符串
 * @param  {Number} num 字符串长度 @default 32
 * @return {String}
 */
const randomString = (num) => {
  const len = num || 32
  const chars = '-_ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
  const maxPos = chars.length
  const timestamp = Date.parse(new Date()) / 1000
  let pwd = ''
  for (let i = 0; i < len; i += 1) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return timestamp + pwd
}

export default randomString
