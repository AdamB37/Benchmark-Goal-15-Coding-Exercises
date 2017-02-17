export default function resolveSymlink(string) {
  string = string.split('\n')
  let numOfSymlinks = string[0]
  let resolvedSymlink = string[string.length-1]
  for(let i = 1; i <= numOfSymlinks; i++) {
    let symlink = string[i].split(':')
    let temp = symlink[1].split('')
    if(temp[temp.length-1] === '/') {
      temp.pop()
      symlink[1] = temp.join('')
    }
    resolvedSymlink = resolvedSymlink.replace(symlink[0], symlink[1])
  }
  return resolvedSymlink
}
