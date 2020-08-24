import format from '../date/format'

describe('Date API:', () => {
  describe('#format()', () => {
    it(`format(1598185744163, 'yyyy-MM-dd hh:mm:ss')`, () => {
      expect(format(1598185744163, 'yyyy-MM-dd hh:mm:ss')).toBe('2020-08-23 20:29:04')
    })

    it(`format(1598185744163, 'yyyy-MM-dd')`, () => {
      expect(format(1598185744163, 'yyyy-MM-dd')).toBe('2020-08-23')
    })
  })
})
