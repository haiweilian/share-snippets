import trim from '../string/trim'
import reverse from '../string/reverse'
import truncate from '../string/truncate'

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

    it(`truncate('abcdefghigklmnopqr', 10)`, () => {
      expect(truncate('abcdefghigklmnopqr', 10)).toBe('abcdefghig...')
    })
  })
})
