const { IS_INVALID_NUMBER_MESSAGE } = require('../constants/index.js')

function multiplesOfFour (num) {
  if (num > 1000) return IS_INVALID_NUMBER_MESSAGE

  const result = []

  for (let i = 0; i <= num; i++) {
    if (i % 4 === 0) {
      result.push(`${i}-pin`)
    }
  }

  return result
}

module.exports = multiplesOfFour