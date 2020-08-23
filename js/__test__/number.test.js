import random from '../number/random'
import digitUppercase from '../number/digitUppercase'
import toFixed from '../number/toFixed'

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      }
    }
    return {
      message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false,
    }
  },
})

describe('Number API:', () => {
  describe('#random()', () => {
    it(`random(1, 10)`, () => {
      expect(random(1, 10)).toBeWithinRange(1, 10)
    })
  })

  describe('#digitUppercase()', () => {
    it(`digitUppercase(9999999999)`, () => {
      expect(digitUppercase(9999999999)).toBe('玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整')
    })

    it(`digitUppercase(0)`, () => {
      expect(digitUppercase(0)).toBe('零元整')
    })

    it(`digitUppercase(-235423545)`, () => {
      expect(digitUppercase(-235423545)).toBe('欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整')
    })
  })

  describe('#toFixed()', () => {
    it(`toFixed(1.335)`, () => {
      expect(toFixed(1.335)).toBe('1.34')
    })

    it(`toFixed(1.335, 2)`, () => {
      expect(toFixed(1.335, 2)).toBe('1.34')
    })
  })
})
