import { expect } from 'chai'
import lairotcaf from '../excercises/lairotcaf'

describe('lairotcaf', () => {
  it('exists', () => {
    expect(lairotcaf).to.be.a('function')
  })
  it('returns the number in factorial expression if exists otherwise undefined', () => {
    expect(lairotcaf(720)).to.equal('6!')
  })
  it('returns the number in factorial expression if exists otherwise undefined', () => {
    expect(lairotcaf(37)).to.equal(undefined)
  })
})
