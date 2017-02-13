var prompt = require('prompt')

function guess_the_number() {
  let number = Math.floor(Math.random()*100+1)

  prompt.start()

  function guess() {
    prompt.get(['guess'], (err,result) => {

      if(result.guess > number) {
        console.log("Too high homie, again")
        return guess()
      }

      if(result.guess < number) {
        console.log("Too low bro, guess again")
        return guess()
      }

      console.log("you win!")
      prompt.stop()
    })

  }
  guess()

}

guess_the_number()
