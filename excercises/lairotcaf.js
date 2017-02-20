export default function lairotcaf(number, factorial = 1) {
  if(number === 1) {
    return (factorial-1)+'!'
  }
  if(number % factorial === 0) {
    return lairotcaf(number/factorial, factorial+=1)
  }
  return undefined
}
