import { expect } from 'chai'
import stringIndices from '../excercises/string_indices'

describe('stringIndices', () => {
  it('exists', () => {
    expect(stringIndices).to.be.a('function')
  })
  it('should return the word at the given index', () => {
    expect(stringIndices("Cash me ousside, how bout dat?", 3)).to.equal("ousside")
  })
})
