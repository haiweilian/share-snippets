import parseQueryString from '../url/parseQueryString'
import stringfyQueryString from '../url/stringfyQueryString'

describe('Url API:', () => {
  describe('#parseQueryString()', () => {
    it(`parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')`, () => {
      expect(parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')).toEqual({
        wd: '百度',
        rsv_spt: '10',
      })
    })

    it(`parseQueryString('www.baidu.com?a=123&b=%26')`, () => {
      expect(parseQueryString('www.baidu.com?a=123&b=%26')).toEqual({
        a: '123',
        b: '&',
      })
    })

    it(`parseQueryString('')`, () => {
      expect(parseQueryString('')).toEqual({})
    })
  })

  describe('#stringfyQueryString()', () => {
    it(`stringfyQueryString({ wd: '百度', rsv_spt: '10' })`, () => {
      expect(stringfyQueryString({ wd: '百度', rsv_spt: '10' })).toBe('wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
    })

    it(`stringfyQueryString({})`, () => {
      expect(stringfyQueryString({})).toBe('')
    })
  })
})
