const { IS_INVALID_NUMBER_MESSAGE } = require('../constants/index.js')

function isEvenOrOdd(num) {
  if (num > 1000) return IS_INVALID_NUMBER_MESSAGE

  return num % 2 === 0 ? 'even' : 'odd'
}

module.exports = isEvenOrOdd