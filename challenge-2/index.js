import { IS_INVALID_NUMBER_MESSAGE } from '../constants/index.js' 

function isPrime(num) {
  if (num > 1000) return IS_INVALID_NUMBER_MESSAGE

  for(let i = 2; i < num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}

export default isPrime