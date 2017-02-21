export default function stringPermutation(string) {
  let permutations = []
  function recursivePermutations(array, index) {
    if(index === array.length) {
      permutations.push(array.join(''))
      return
    }
    for (let i = index; i < array.length; i++) {
      let copy = array.slice(0)
      copy.swap(index, i)
      recursivePermutations(copy, index+1)
    }
    return
  }
  recursivePermutations(string.split(''), 0)
  return permutations
}

Array.prototype.swap = function (indexA, indexB) {
  let array = this
  if (indexA === indexB) {
    return array
  }
  let temp = array[indexA]
  array[indexA] = array[indexB]
  array[indexB] = temp
  let index = indexB
  while (index !== indexA + 1) {
    temp = array[index]
    array[index] = array[index-1]
    array[index-1] = temp
    index--
  }
  return array
}
