const { IS_INVALID_NUMBER_MESSAGE } = require('../constants/index.js')

function hasValueInFibonacciSequence(num) {
  if (num > 1000) return IS_INVALID_NUMBER_MESSAGE
  
  const sequence = [0,1];
    
  for (let i = 2; i < 17; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }

  return sequence.includes(num)
}

module.exports = hasValueInFibonacciSequence