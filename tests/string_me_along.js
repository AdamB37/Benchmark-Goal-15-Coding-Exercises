import { expect } from 'chai'
import stringMeAlong from '../excercises/string_me_along'

describe('stringMeAlong', () => {
  it('exist', () => {
    expect(stringMeAlong).to.be.a('function')
  })
  it('return the longest substring with only two unique characters', () => {
    expect(stringMeAlong('ghhiiii')).to.equal('hhiiii')
  })
  it('return the longest substring with only two unique characters', () => {
    expect(stringMeAlong('efgefghiiikk')).to.equal('iiikk')
  })
})
