export default function stringMeAlong(string) {
  string = string.split('')
  let substring = []
  let startIndex = 0
  let uniqueChars = []
  let result = []
  let index = 0

  while(index < string.length) {
    if(!uniqueChars.includes(string[index])) {
      uniqueChars.push(string[index])
    }
    if(uniqueChars.length < 3) {
      result.push(string[index])
      index++
    }
    else{
      uniqueChars = []
      result = []
      startIndex++
      index = startIndex
    }
  }
  return result.join('')
}
