export default function parensBeGone(string) {
  let temp = string
  do{
    if(temp.length<string.length) {
      string = temp
    }
    temp = deleteRedundantParens(temp)
  }while(temp.length<string.length)
  return string
}

function findEndOfParens(string, index) {
  string = string.split('')
  let leftParensCount = 1
  let rightParensCount = 0
  while(index < string.length && leftParensCount !== rightParensCount) {
    if(string[index] === '(') {
      leftParensCount++
    }
    else if(string[index] === ')') {
      rightParensCount++
    }
    if(leftParensCount !== rightParensCount) {
      index++
    }
  }
  return index
}
function deleteRedundantParens(string, start = 0) {
  if(start + 2 === string.length) {
    return string
  }

  let end = findEndOfParens(string, start+1)
  string = string.split('')
  
  if(string[start] === '(' && string[start+1] === '(' && string[end] === ')' && findEndOfParens(string.join(''),start + 2) === (end - 1)) {
    string.splice(start,1)
    string.splice(end-1,1)
    return deleteRedundantParens(string.join(''), start)
  }
  return deleteRedundantParens(string.join(''), start + 1)
}
