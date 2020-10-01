import trim from '../string/trim'
import reverse from '../string/reverse'
import truncate from '../string/truncate'
import randomString from '../string/randomString'

describe('String API:', () => {
  describe('#trim()', () => {
    it(`trim(';;;aaaa;;;', ';')`, () => {
      expect(trim(';;;aaaa;;;', ';')).toBe('aaaa')
    })

    it(`trim(',,,aaaa,,,')`, () => {
      expect(trim(',,,aaaa,,,')).toBe('aaaa')
    })
  })

  describe('#reverse()', () => {
    it(`reverse('abc')`, () => {
      expect(reverse('abc')).toBe('cba')
    })
  })

  describe('#truncate()', () => {
    it(`truncate('abcdefghigklmnopqr')`, () => {
      expect(truncate('abcdefghigklmnopqr')).toBe('abcdefghig...')
    })

    it(`truncate('abcdefghigklmnopqr', 50)`, () => {
      expect(truncate('abcdefghigklmnopqr', 50)).toBe('abcdefghigklmnopqr')
    })
  })

  describe('#randomString', () => {
    it(`randomString().length`, () => {
      expect(randomString().length).toBe(42)
    })

    it(`randomString(64).length`, () => {
      expect(randomString(64).length).toBe(74)
    })
  })
})
