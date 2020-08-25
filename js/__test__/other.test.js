import ossSmallImg from '../other/ossSmallImg'

describe('Other API:', () => {
  describe('#ossSmallImg()', () => {
    it(`ossSmallImg('16062380347896.jpg', 100, 100)`, () => {
      expect(ossSmallImg('16062380347896.jpg', 100, 100)).toBe('16062380347896.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0')
    })

    it(`ossSmallImg(undefined)`, () => {
      expect(ossSmallImg(undefined)).toBe('')
    })
  })
})
