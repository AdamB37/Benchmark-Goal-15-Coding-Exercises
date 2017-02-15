export default function scrabBag(string) {

  let tiles = {
    'A': 9,
    'B': 2,
    'C': 2,
    'D': 4,
    'E': 12,
    'F': 2,
    'G': 3,
    'H': 2,
    'I': 9,
    'J': 1,
    'K': 1,
    'L': 4,
    'M': 2,
    'N': 6,
    'O': 8,
    'P': 2,
    'Q': 1,
    'R': 6,
    'S': 4,
    'T': 6,
    'U': 4,
    'V': 2,
    'W': 2,
    'X': 1,
    'Y': 2,
    'Z': 1,
    '_': 2
  }

  let tilesPlayed = string.split('')

  while(tilesPlayed.length) {
    tiles[tilesPlayed.pop()] -= 1
  }

  const maxTileCount = tiles[Object.keys(tiles).reduce( (a,b) => tiles[a] > tiles[b] ? a : b )]
  let currentTotalTileCount = {}
  let output = ''

  for(let i = maxTileCount; i >= 0; i--) {
    currentTotalTileCount[i] = Object.keys(tiles).filter( key => tiles[key] === i)
  }

  for(let key = maxTileCount; key >= 0; key--) {
    let string = ''

    currentTotalTileCount[key].forEach(element => string += element + ', ')
    string = string.slice(0,-2)

    if(string.length) {
      output += key + ': ' + string + '\n'
    }
  }

  return output
}
