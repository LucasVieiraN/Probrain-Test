import hasValueInFibonacciSequence from './index.js'

test('should verify if passed value is in Fibonacci sequence', () => {
  expect(hasValueInFibonacciSequence(21)).toBe(true)
  expect(hasValueInFibonacciSequence(89)).toBe(true)
  expect(hasValueInFibonacciSequence(987)).toBe(true)
  expect(hasValueInFibonacciSequence(8)).toBe(true)
})

test('should verify if passed value is not in Fibonacci sequence', () => {
  expect(hasValueInFibonacciSequence(15)).toBe(false)
  expect(hasValueInFibonacciSequence(186)).toBe(false)
  expect(hasValueInFibonacciSequence(581)).not.toBe(true)
  expect(hasValueInFibonacciSequence(4)).not.toBe(true)
})

test('should verify if passed value is greater than one thousand', () => {
  expect(hasValueInFibonacciSequence(1595)).toBe('Não é possível verificar esse número')
  expect(hasValueInFibonacciSequence(2594)).toBe('Não é possível verificar esse número')
  expect(hasValueInFibonacciSequence(12995)).toBe('Não é possível verificar esse número')
  expect(hasValueInFibonacciSequence(89)).toBe(true)
  expect(hasValueInFibonacciSequence(999)).toBe(false)
})
