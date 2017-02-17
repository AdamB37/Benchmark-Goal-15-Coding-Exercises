export default function fibonacciBases(base, number) {
  if(base === 'decimal') {
    return decimalToFibonacci(number)
  }
  if(base === 'fib') {
    return fibonacciToDecimal(number)
  }

  return undefined
}

function decimalToFibonacci(number) {
  let array = generateFibonacciForDecimal(number)
  let convert = ""

  while(array.length) {
    let temp = array.pop()
    if(number < temp) {
      convert += "0"
    }
    else if(number >= temp) {
      convert += "1"
      number = number % temp
    }
  }
  return convert
}

function fibonacciToDecimal(number) {
  if(number === 1 || number === 10) {
    return '1'
  }

  let array = generateFibonacciForFibonacciBase(number.toString().length)
  number = number.toString().split('')
  let convert = 0

  while(array.length) {
    convert += array.pop() * number.pop()
  }

  return convert.toString()
}

function generateFibonacciForDecimal(max, array = [1,1]) {
  let a = array.length-1
  let b = array.length-2
  let next = array[a] + array[b]
  if(next <= max) {
    array.push(next)
    return generateFibonacciForDecimal(max, array)
  }
  return array
}

function generateFibonacciForFibonacciBase(max, array = [1,1]) {
  let a = array.length-1
  let b = array.length-2
  let next = array[a] + array[b]
  if(array.length < max){
    array.push(next)
    return generateFibonacciForFibonacciBase(max, array)
  }
  return array
}
