import { expect } from 'chai'
import scrabBag from "../excercises/scrab_bag"

describe('scrabBag', () => {
  it('exists', () => {
    expect(scrabBag).to.be.a('function')
  })

  it('should return a list of tiles remaining', () => {
    expect(scrabBag('AERETOXMYCNS_B')).to.equal('10: E\n9: I\n8: A\n7: O\n5: N, R, T\n4: D, L, U\n3: G, S\n2: F, H, P, V, W\n1: B, C, J, K, M, Q, Y, Z, _\n0: X')
  })
})
