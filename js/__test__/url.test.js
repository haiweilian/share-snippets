import queryParse from '../url/queryParse'
import queryStringfy from '../url/queryStringfy'

describe('Url API:', () => {
  describe('#queryParse()', () => {
    it(`queryParse('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')`, () => {
      expect(queryParse('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')).toEqual({
        wd: '百度',
        rsv_spt: '10',
      })
    })

    it(`queryParse('www.baidu.com?a=123&b=%26')`, () => {
      expect(queryParse('www.baidu.com?a=123&b=%26')).toEqual({
        a: '123',
        b: '&',
      })
    })

    it(`queryParse('')`, () => {
      expect(queryParse('')).toEqual({})
    })
  })

  describe('#queryStringfy()', () => {
    it(`queryStringfy({ wd: '百度', rsv_spt: '10' })`, () => {
      expect(queryStringfy({ wd: '百度', rsv_spt: '10' })).toBe('wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
    })

    it(`queryStringfy({})`, () => {
      expect(queryStringfy({})).toBe('')
    })
  })
})
