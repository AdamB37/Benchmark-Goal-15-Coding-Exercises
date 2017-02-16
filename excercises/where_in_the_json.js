export default function whereInTheJson(json, value) {
  var obj = JSON.parse(json)
  let keys = Object.keys(obj)
  console.log(keys)
  return matchInObject(obj, keys, value)
}

function matchInObject(obj, keys, value, path = '') {
  console.log('keys', keys)
  let key = keys.pop()
  if(obj[key] === value) {
    console.log(path + key)
    return path + key
  }
  else if(typeof(obj[key]) === 'object') {
    return matchInObject(obj[key], Object.keys(obj[key]), value, path + key + ' -> ')
  }
  else if(keys.length) {
    return matchInObject(obj, keys, value)
  }
}
