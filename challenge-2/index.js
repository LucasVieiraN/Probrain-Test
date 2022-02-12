function isPrime(num) {
  if (num > 1000) return 'Não é possível verificar esse número'
  for(let i = 2; i < num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}

module.exports = isPrime