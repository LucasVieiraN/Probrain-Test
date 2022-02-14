const select = document.querySelector('.implementations')
const div = document.querySelector('.create-div')
const section = document.querySelector('section')
const form = document.querySelector('form')
const input = document.querySelector('input')
const result = document.querySelector('.result')
const namedImplementation = document.querySelector('.named-implementation')

import isEvenOrOdd from './challenge-1/index.js'
import isPrime from './challenge-2/index.js'
import hasValueInFibonacciSequence from './challenge-3/index.js'
import multiplesOfFour from './challenge-4/index.js'

import { IS_INVALID_NUMBER_MESSAGE, implementationsNamed } from './constants/index.js'

let selectedImplementation = ''

const implementationsFn = {
  implementation1: isEvenOrOdd, 
  implementation2: isPrime, 
  implementation3: hasValueInFibonacciSequence, 
  implementation4: multiplesOfFour
}

function isEvenOrOddResult (formatedResultText) {
  return `${formatedResultText === 'odd' ? 'Não' : 'Sim'}`
}

function multiplesOfFourResult (multiples) {
  return `${multiples.join(', ')}`
}

function showResult() {
  const selectedInputValue = Number(input.value)
  const implementationResult = implementationsFn[selectedImplementation](selectedInputValue)
  const formatedResultText = implementationsNamed[selectedImplementation].subtitle

  if(selectedInputValue > 1000) {
    result.innerText = IS_INVALID_NUMBER_MESSAGE
  }

  else if(selectedImplementation === 'implementation1') {
    result.innerText = `${formatedResultText} ${isEvenOrOddResult(implementationResult)}` 
  }

  else if(selectedImplementation !== 'implementation4') {
    result.innerText = `${formatedResultText} ${implementationResult ? 'Sim' : 'Não'}`
  }

  else {
    result.innerText = `${formatedResultText} ${multiplesOfFourResult(implementationResult)}`
  }
}

function takeNumber(event) {
  event.preventDefault()
  showResult()
}

function resetToInitialValues() {
  section.innerHTML = ''
  result.innerText = ''
  input.value = ''
}

select.addEventListener('change', (e) => {
  const { value } = e.target
  
  namedImplementation.innerText = implementationsNamed[value].title

  div.classList.add('ativo')

  resetToInitialValues()

  selectedImplementation = value
})

form.addEventListener('submit', takeNumber)