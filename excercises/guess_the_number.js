export default function guessTheNumber(input) {
  let number =  81 //Math.floor(Math.random()*100)+1 (turned off random for testing)
  if(input > number) {
    console.log("Too high")
    return "Too high"
  }
  if(input < number) {
    console.log("Too low")
    return "Too low"
  }
  if(input === "quit") {
    return
  }

  if(typeof(input)!=='number'){
    console.log("please enter an integer")
  }
  console.log("You win")
  return "You win"
}
