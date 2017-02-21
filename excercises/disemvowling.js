export default function disemvowling(string) {
  string = string.split(' ').join("")
  return string.replace(/[aeiou]/g, "")
}
