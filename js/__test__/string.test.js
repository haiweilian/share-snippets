import trim from '../string/trim'

describe('String API:', () => {
  describe('#trim()', () => {
    it(`trim(';;;aaaa;;;',';') === aaaa`, () => {
      expect(trim(';;;aaaa;;;', ';')).toBe('aaaa')
    })
    it(`trim('  aaaa  ',' ') === aaaa`, () => {
      expect(trim('  aaaa  ', ' ')).toBe('aaaa')
    })
  })
})
