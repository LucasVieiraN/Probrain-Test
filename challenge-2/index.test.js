import isPrime from './index.js'

test('should only return prime numbers', () => {
  expect(isPrime(123)).toBe(false)
  expect(isPrime(63)).toBe(false)
  expect(isPrime(2)).toBe(true)
  expect(isPrime(24)).toBe(false)
  expect(isPrime(51)).toBe(false)
  expect(isPrime(567)).not.toBe(true)
  expect(isPrime(683)).not.toBe(false)
  expect(isPrime(10)).not.toBe(true)
})

 test('should only return not prime numbers', () => {
  expect(isPrime(111)).toBe(false)
  expect(isPrime(711)).toBe(false)
  expect(isPrime(38)).not.toBe(true)
  expect(isPrime(1)).not.toBe(true)
  expect(isPrime(875)).not.toBe(true)
  expect(isPrime(42)).toBe(false)
  expect(isPrime(90)).toBe(false)
  expect(isPrime(88)).not.toBe(true)
}) 

test('should validate numbers greater than one thousand', () => {
  expect(isPrime(1001)).toBe('Não é possível verificar esse número')
  expect(isPrime(241)).toBe(true)
  expect(isPrime(3815)).toBe('Não é possível verificar esse número')
  expect(isPrime(67)).not.toBe(false)
  expect(isPrime(87512451)).toBe('Não é possível verificar esse número')
  expect(isPrime(21)).toBe(false)
  expect(isPrime(999)).toBe(false)
  expect(isPrime(81511)).toBe('Não é possível verificar esse número')
}) 