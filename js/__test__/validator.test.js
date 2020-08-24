import isEmail from '../validator/isEmail'
import isIdCard from '../validator/isIdCard'
import isPhone from '../validator/isPhone'
import isUrl from '../validator/isUrl'
import isEmpty from '../validator/isEmpty'
import isEmptyObject from '../validator/isEmptyObject'

describe('Regexp API:', () => {
  describe('#isEmail()', () => {
    it(`isEmail('lian@haiweilian.com')`, () => {
      expect(isEmail('lian@haiweilian.com')).toBe(true)
    })

    it(`isEmail('haiweilian.com')`, () => {
      expect(isEmail('haiweilian.com')).toBe(false)
    })
  })

  describe('#isIdCard()', () => {
    it(`isIdCard('412723199806098888')`, () => {
      expect(isIdCard('412723199806098888')).toBe(true)
    })

    it(`isIdCard('xxx723199806098888')`, () => {
      expect(isIdCard('xxx723199806098888')).toBe(false)
    })
  })

  describe('#isPhone()', () => {
    it(`isPhone('18612113888')`, () => {
      expect(isPhone('18612113888')).toBe(true)
    })

    it(`isPhone('18612113')`, () => {
      expect(isPhone('18612113')).toBe(false)
    })
  })

  describe('#isUrl()', () => {
    it(`isUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1')`, () => {
      expect(isUrl('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1')).toBe(true)
    })

    it(`isUrl('www.baidu.com')`, () => {
      expect(isUrl('www.baidu.com')).toBe(true)
    })

    it(`isUrl('baidu.com')`, () => {
      expect(isUrl('baidu.com')).toBe(true)
    })

    it(`isUrl('http://baiducom')`, () => {
      expect(isUrl('http://baiducom')).toBe(false)
    })
  })

  describe('#isEmpty()', () => {
    it(`isEmpty('')`, () => {
      expect(isEmpty('')).toBe(true)
    })

    it(`isEmpty(null)`, () => {
      expect(isEmpty(null)).toBe(true)
    })

    it(`isEmpty(undefined)`, () => {
      expect(isEmpty(undefined)).toBe(true)
    })

    it(`isEmpty(0)`, () => {
      expect(isEmpty(0)).toBe(false)
    })
  })

  describe('#isEmptyObject()', () => {
    it(`isEmptyObject({})`, () => {
      expect(isEmptyObject({})).toBe(true)
    })

    it(`isEmptyObject(null)`, () => {
      expect(isEmptyObject(null)).toBe(false)
    })

    it(`isEmptyObject({ id: 1 })`, () => {
      expect(isEmptyObject({ id: 1 })).toBe(false)
    })
  })
})
