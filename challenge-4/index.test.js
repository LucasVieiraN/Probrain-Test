import multiplesOfFour from './index.js'

test('should return an array where multiples of four contains a sufix "pin"', () => {
  expect(multiplesOfFour(16)).toEqual(["0-pin", "4-pin", "8-pin", "12-pin", "16-pin"])
  expect(multiplesOfFour(4)).toEqual(["0-pin", "4-pin"])
  expect(multiplesOfFour(84)).toContain("76-pin")
  expect(multiplesOfFour(84)).toContain("80-pin")
  expect(multiplesOfFour(84)).toContain("84-pin")
  expect(multiplesOfFour(84)).not.toContain("86-pin")
  expect(multiplesOfFour(1000)).toContain("996-pin")
  expect(multiplesOfFour(1000)).toContain("1000-pin")
  expect(multiplesOfFour(1000)).not.toContain("1004-pin")
})

test('should return an array where multiples of four contains a sufix "pin"', () => {
  expect(multiplesOfFour(12)).toContain("12-pin")
  expect(multiplesOfFour(85)).not.toContain("86-pin")
  expect(multiplesOfFour(10340)).toContain('Não é possível verificar esse número')
  expect(multiplesOfFour(5210)).toContain('Não é possível verificar esse número')
  expect(multiplesOfFour(1001)).toContain('Não é possível verificar esse número')
})