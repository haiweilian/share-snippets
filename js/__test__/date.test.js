import formatDate from '../date/formatDate'
import monthDays from '../date/monthDays'

describe('Date API:', () => {
  describe('#formatDate()', () => {
    it(`formatDate(1598185744163, 'yyyy-MM-dd hh:mm:ss')`, () => {
      expect(formatDate(1598185744163, 'yyyy-MM-dd hh:mm:ss')).toBe('2020-08-23 20:29:04')
    })

    it(`formatDate(1598185744163, 'yyyy-MM-dd')`, () => {
      expect(formatDate(1598185744163, 'yyyy-MM-dd')).toBe('2020-08-23')
    })
  })

  describe('#monthDays()', () => {
    it(`monthDays('2020-02')`, () => {
      expect(monthDays('2020-02')).toBe(29)
    })

    it(`monthDays('2020-09')`, () => {
      expect(monthDays('2020-09')).toBe(30)
    })

    it(`monthDays('2020-08')`, () => {
      expect(monthDays('2020-08')).toBe(31)
    })
  })
})
