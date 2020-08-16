import hello from '../demo'

describe('Demo API:', () => {
  describe('#demo', () => {
    it(`hello === hello jest`, () => {
      expect(hello).toBe('hello jest')
    })
  })
})
