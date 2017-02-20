import { expect } from 'chai'
import braille from '../excercises/braille'

describe('braille', () => {
  it('exists', () => {
    expect(braille).to.be.a('function')
  })
  it('return braille translated to word', () => {
    expect(braille(`O. O. O. O. O. .O O. O. O. OO
OO .O O. O. .O OO .O OO O. .O
.. .. O. O. O. .O O. O. O. ..`)).to.equal('helloworld')
  })
})
