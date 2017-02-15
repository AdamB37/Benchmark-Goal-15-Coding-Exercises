export default function stringIndices(string, indexOfWord) {
  string = string.replace(/[^a-zA-Z ]/g, "")
  let array = string.split(' ')
  return indexOfWord > 0 || indexOfWord <= array.length ? array[indexOfWord-1] : -1
}
