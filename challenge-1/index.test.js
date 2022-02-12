const isEvenOrOdd = require('./index.js');

test('should return even if the rest from division by two is equal to zero', () => {
  expect(isEvenOrOdd(5)).not.toBe('Odd');
  expect(isEvenOrOdd(10)).toBe('even')
  expect(isEvenOrOdd(100)).toBe('even')
  expect(isEvenOrOdd(150)).toBe('even')
  expect(isEvenOrOdd(200)).toBe('even')
  expect(isEvenOrOdd(3282)).toBe('even')
  expect(isEvenOrOdd(1)).not.toBe('even')
  expect(isEvenOrOdd(3782)).toBe('even')
  expect(isEvenOrOdd(1221)).not.toBe('even')
});

test('should return odd if the rest from division by two is not equal to zero', () => {
  expect(isEvenOrOdd(5)).toBe('odd')
  expect(isEvenOrOdd(15)).toBe('odd')
  expect(isEvenOrOdd(254)).not.toBe('odd')
  expect(isEvenOrOdd(1234)).not.toBe('odd')
  expect(isEvenOrOdd(1241)).toBe('odd')
  expect(isEvenOrOdd(12315)).toBe('odd')
  expect(isEvenOrOdd(54899)).toBe('odd')
});

test('should return if the element in the loop is even or odd', () => {
  for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
      expect(isEvenOrOdd(i)).not.toBe('odd');
    } else {
      expect(isEvenOrOdd(i)).toBe('odd');
    }
  }
});
