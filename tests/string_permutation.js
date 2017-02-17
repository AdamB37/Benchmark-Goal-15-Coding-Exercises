import { expect } from 'chai'
import stringPermutation from '../excercises/stringPermutation'

describe('stringPermutation', () => {
  it('exists', () => {
    expect(stringPermutation).to.be.a('function')
  })
  it('return all permutation', () => {
    expect(stringPermutation('bar')).to.equal(['bar','bra','abr','arb','rba','rab'])
  })
  it('return all permutation', () => {
    expect(stringPermutation('ABCD')).to.equal(['ABCD','ABDC','ACBD','ACDB','ADBC',
    'ADCB','BACD','BADC','BCAD','BCDA','BDAC','BDCA','CABD','CADB','CBAD','CBDA',
    'CDAB','CDBA','DABC','DACB','DBAC','DBCA','DCAB','DCBA'])
  })

})
