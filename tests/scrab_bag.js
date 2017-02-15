import { expect } from 'chai'
import scrabBag from "../excercises/guess"

describe('scrabBag', () => {
  it('exists', () => {
    expect(scrabBag).to.be.a('function')
  })

  it('should return a list of tiles remaining', () => {
    expect(scrabBag('AERETOXMYCNS_B')).to.equal('10: E\n9: I\n8: A\n7: O\n5: R, N, T\n4: U, L, D\n3: G, S\n2: P, H, F, V, W\n1: B, Y, J, K, M, Q, C, Z, _\n0: X')
  })
})
