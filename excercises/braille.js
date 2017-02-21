export default function braille(string) {
  let index = 0
  let brailleString = []
  let brailleAlphabet = {
    'a':['O.','..','..'],
    'b':['O.','O.','..'],
    'c':['OO','..','..'],
    'd':['OO','.O','..'],
    'e':['O.','.O','..'],
    'f':['OO','O.','..'],
    'g':['OO','OO','..'],
    'h':['O.','OO','..'],
    'i':['.O','O.','..'],
    'j':['.O','OO','..'],
    'k':['O.','..','O.'],
    'l':['O.','O.','O.'],
    'm':['OO','..','O.'],
    'n':['OO','.O','O.'],
    'o':['O.','.O','O.'],
    'p':['OO','O.','O.'],
    'q':['OO','OO','O.'],
    'r':['O.','OO','O.'],
    's':['.O','O.','O.'],
    't':['.O','OO','O.'],
    'u':['O.','..','OO'],
    'v':['O.','O.','OO'],
    'w':['.O','OO','.O'],
    'x':['OO','..','OO'],
    'y':['OO','.O','OO'],
    'z':['O.','.O','OO']
  }

  function getLetter (value) {
    return Object.keys(brailleAlphabet).find( key => equalArrays(brailleAlphabet[key], value))
  }

  let numOfBrailleLetters = string.split('\n')[0].replace(/\s+/g, '').length / 2


  for (let i = 0; i < numOfBrailleLetters; i++) {
    let top = string.split('\n')[0].split(' ')[i]
    let middle = string.split('\n')[1].split(' ')[i]
    let bottom = string.split('\n')[2].split(' ')[i]
    brailleString.push(getLetter([top,middle,bottom]))
  }
  return brailleString.join('')
}

function equalArrays(a,b) {
  return a.every( (_,index) => a[index] == b[index] )
}
