export default function whereInTheJson(json, value) {
  let obj = JSON.parse(json)
  let found = false
  function traverse(obj, value, path = '') {
    if(obj === value) {
      found = true
      return path.slice(0,-4)
    }
    if(typeof(obj)==='object') {
      let temp = path
      for(let key in obj) {
        if(found) {
          return path
        }
        path = traverse(obj[key], value, temp + key +' -> ')
      }
    }
    return path
  }
  return traverse(obj, value)
}
