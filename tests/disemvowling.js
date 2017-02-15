import { expect } from 'chai'
import disemvowling from '../excercises/disemvowling'

describe('disemvowling' , () => {
  it('exits', () => {
    expect(disemvowling).to.be.a('function')
  })
  it('return the disemvowled string', () => {
    expect(disemvowling('i am groot')).to.equal('mgrt')
  })
})
