export default function stringPermutation(string) {
  string = string.split('')
  let permutations = []
  return recursivePermutations(string)
}

function recursivePermutations(array, index) {
  let singlePermutation = []
}
