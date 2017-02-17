import { expect } from 'chai'
import guessTheNumber from "../excercises/guess_the_number"

describe('guessTheNumber', () => {
  it('exists', () => {
    expect(guessTheNumber).to.be.a('function')
  })

  it('returns "Too high" if guess is higher than the generated number (between 1 and 100)', () => {
    expect(guessTheNumber(99)).to.equal("Too high")
  })

  it('returns "Too low" if guess is lower than the generated number (between 1 and 100)', () => {
    expect(guessTheNumber(1)).to.equal("Too low")
  })

  it('return "You win" if you match the generated number (between 1 and 100)', () => {
    expect(guessTheNumber(81)).to.equal("You win")
  })

})
